import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Form} from "../../interfaces/form.interface";

@Component({
  selector: 'app-dynamic-form-card',
  templateUrl: './dynamic-form-card.component.html',
  styleUrls: ['./dynamic-form-card.component.scss']
})
export class DynamicFormCardComponent implements OnInit {

  @Input() form!: Form
  @Input() id?: number
  @Input() buttonText: string = 'Save'
  @Input() errors?: {[key: string] : string}
  @Output() onSubmit = new EventEmitter<any>();

  progress: number = 0

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  submitButtonClicked() {
    this.onSubmit.emit()
  }
}
