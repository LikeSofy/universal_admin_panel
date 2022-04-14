import {Component, Input, OnInit} from '@angular/core';
import {BaseField} from "../base-field";
import {FormGroup} from "@angular/forms";
import {InputField} from "../../../../interfaces/input-field.interface";

@Component({
  selector: 'app-file-input-question',
  templateUrl: './file-input-question.component.html',
  styleUrls: ['./file-input-question.component.scss']
})
export class FileInputQuestionComponent extends BaseField implements OnInit {
  @Input() field!: InputField
  @Input() key!: string
  @Input() form!: FormGroup

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    //if (event.target.files.length > 0) {
    //  this.question.formControl.setValue(event.target.files[0]);
    //}
  }

  fileText(data: any): string{
    //return data?.files[0]?.name ?? "choose " + this.question.label
    return "ff"
  }

}
