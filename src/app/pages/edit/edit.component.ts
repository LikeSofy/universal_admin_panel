import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormService} from "../../shared/service/form.service";
import {Form} from "../../shared/interfaces/form.interface";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form?: Form
  id?: number
  modelName!: string
  formName!: string

  constructor(private route: ActivatedRoute, private formService: FormService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
      this.modelName = params['model']
      this.formName = params['form']

      this.formService.getForm({
        model: this.modelName,
        form: this.formName
      }).subscribe(data => {
        this.form = data
      })
    })
  }

  onSubmit($event: any) {

  }
}
