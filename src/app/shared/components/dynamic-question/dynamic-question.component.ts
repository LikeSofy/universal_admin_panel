import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {InputField} from "../../interfaces/input-field.interface";

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.scss']
})
export class DynamicQuestionComponent implements OnInit{

  @Input() field!: InputField
  @Input() form!: FormGroup
  @Input() error?: string
  @Input() key!: string

  ngOnInit(): void {
  }
}
