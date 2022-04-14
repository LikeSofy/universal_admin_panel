import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Form} from "../../interfaces/form.interface";
import {FormService} from "../../service/form.service";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() form!: Form
  @Input() id?: number
  @Input() buttonText: string = 'Save'
  @Input() errors?: {[key: string] : string}
  @Output() onSubmit = new EventEmitter<any>();

  formGroup!: FormGroup

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.formGroup = this.formService.toFormGroup(this.form.fields);
    this.initForm()
  }

  initForm(): void{
    if (this.form.initializeUrl && this.id){
      this.formService.getInitFormData(this.form, this.id).subscribe(data => {
        this.formGroup.patchValue(data)
      })
    }
  }

  findKeys(): string[] {
    return Object.keys(this.form.fields)
  }

  findError(key: string): string | undefined {
    return this.errors?.[key]
  }

  submitButtonClicked() {
    this.onSubmit.emit(this.formGroup)
  }
}
