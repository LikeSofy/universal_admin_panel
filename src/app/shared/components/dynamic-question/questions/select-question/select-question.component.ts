import {Component, Input, OnInit} from '@angular/core';
import {BaseField} from "../base-field";
import {FormGroup} from "@angular/forms";
import {InputField} from "../../../../interfaces/input-field.interface";

@Component({
  selector: 'app-select-question',
  templateUrl: './select-question.component.html',
  styleUrls: ['./select-question.component.scss']
})
export class SelectQuestionComponent extends BaseField implements OnInit {
  @Input() field!: InputField
  @Input() key!: string
  @Input() form!: FormGroup

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.findOptions()
  }

  private findOptions() {
  }
}
