import {Component, Input, OnInit} from '@angular/core';
import {QuestionsGroup} from "../../../../../../../site/webui/src/app/entity/questions-group";
import {FormGroup} from "@angular/forms";
import {QuestionControlService} from "../../../../../../../site/webui/src/app/service/question-control.service";

@Component({
  selector: 'app-single-dynamic-form',
  templateUrl: './single-dynamic-form.component.html',
  styleUrls: ['./single-dynamic-form.component.scss'],
  providers: [QuestionControlService]
})
export class SingleDynamicFormComponent implements OnInit {

  @Input() questionsData?: QuestionsGroup<string> | Map<string, QuestionsGroup<string>>
  questions: QuestionsGroup<string> | null = null
  @Input() submit!: (data: any, id?: string) => void
  form!: FormGroup;

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.questions = this.questionsData instanceof Map ? this.questionsData.values().next().value : this.questionsData
    this.form = this.qcs.toFormGroup(this.questions as QuestionsGroup<string>);
  }

  onSubmit() {
    this.submit(this.form.getRawValue());
  }

}
