import {Component, Input, OnInit} from '@angular/core';
import {BaseField} from "../base-field";
import {FormGroup} from "@angular/forms";
import {InputField} from "../../../../interfaces/input-field.interface";

@Component({
  selector: 'app-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.scss']
})
export class InputQuestionComponent extends BaseField implements OnInit {
  @Input() field!: InputField
  @Input() key!: string
  @Input() error?: string
  @Input() form!: FormGroup

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
