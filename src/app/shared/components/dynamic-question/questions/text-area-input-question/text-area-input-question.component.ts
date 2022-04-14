import {Component, Input, OnInit} from '@angular/core';
import {BaseField} from "../base-field";
import {FormGroup} from "@angular/forms";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {InputField} from "../../../../interfaces/input-field.interface";

@Component({
  selector: 'app-text-area-input-question',
  templateUrl: './text-area-input-question.component.html',
  styleUrls: ['./text-area-input-question.component.scss']
})
export class TextAreaInputQuestionComponent extends BaseField implements OnInit {
  @Input() field!: InputField
  @Input() key!: string
  @Input() form!: FormGroup

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    sanitize: false,
    height: 'auto',
    minHeight: '1000',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['fontName'],
      ['insertImage',
        'insertVideo',]
    ]
  };

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
