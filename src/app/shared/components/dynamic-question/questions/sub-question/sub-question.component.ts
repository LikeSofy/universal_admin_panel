import {Component, Input, OnInit} from '@angular/core';
import {InputField} from "../../../../interfaces/input-field.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sub-question',
  templateUrl: './sub-question.component.html',
  styleUrls: ['./sub-question.component.scss']
})
export class SubQuestionComponent implements OnInit {
  @Input() field!: InputField
  @Input() key!: string
  @Input() form!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

  fieldKeys(): string[]{
    return Object.keys(this.field.fields)
  }

  getSubFormGroup(): FormGroup{
    return <FormGroup>this.form.controls[this.key]
  }

}
