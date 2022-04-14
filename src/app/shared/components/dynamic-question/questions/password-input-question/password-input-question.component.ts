import {Component, Input, OnInit} from '@angular/core';
import {BaseField} from "../base-field";
import {FormGroup} from "@angular/forms";
import {InputField} from "../../../../interfaces/input-field.interface";

@Component({
  selector: 'app-password-input-question',
  templateUrl: './password-input-question.component.html',
  styleUrls: ['./password-input-question.component.scss']
})
export class PasswordInputQuestionComponent extends BaseField implements OnInit {
  @Input() field!: InputField
  @Input() key!: string
  @Input() form!: FormGroup

  hide = true;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
