import {Component, Input, OnInit} from '@angular/core';
import {BaseField} from "../base-field";
import {FormGroup} from "@angular/forms";
import {InputField} from "../../../../interfaces/input-field.interface";

@Component({
  selector: 'app-multiple-select-question',
  templateUrl: './multiple-select-question.component.html',
  styleUrls: ['./multiple-select-question.component.scss']
})
export class MultipleSelectQuestionComponent extends BaseField implements OnInit {
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
