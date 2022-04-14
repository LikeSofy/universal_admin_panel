import {Injectable} from "@angular/core";
import {InputField} from "../interfaces/input-field.interface";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable, tap} from "rxjs";
import {Form} from "../interfaces/form.interface";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpEvent} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    protected http: HttpClient,
  ) {
  }

  toFormGroup(fields: { [key: string]: InputField }): FormGroup {
    const group: any = {};
    for (let fieldKey of Object.keys(fields)) {
      if (fields[fieldKey].type == "sub-form-input") {
        group[fieldKey] = this.toFormGroup(fields[fieldKey].fields)
      } else {
        group[fieldKey] = new FormControl()
      }
    }

    return new FormGroup(group);
  }

  getForm(data: {
    model: string,
    form: string
  }): Observable<Form> {
    return this.http.get<Form>(environment.baseUrl + '/api/v1/sofy-admin/' + data.model + '/' + data.form)
  }

  sendFormWithEvent(request: any, form: Form, id?: number): Observable<HttpEvent<any>> {
    let formData: FormData = new FormData()

    let files: Map<string, File> = this.excludeFiles(request)

    for (let fileKey of files.keys()) {
      formData.append(fileKey, files.get(fileKey) as File)
    }

    formData.append("json", JSON.stringify(request))

    let url

    if (id)
      url = environment.baseUrl + form.url.replace('{id}', id.toString())
    else
      url = environment.baseUrl + form.url

    return this.http.request<any>(form.requestMethod, url, {
      body: formData,
      observe: "events",
      reportProgress: true
    })
  }

  sendForm(formGroup: FormGroup, form: Form, id?: number): Observable<any> {

    let request = formGroup.getRawValue()

    let formData: FormData = new FormData()

    let files: Map<string, File> = this.excludeFiles(request)

    for (let fileKey of files.keys()) {
      formData.append(fileKey, files.get(fileKey) as File)
    }

    formData.append("json", JSON.stringify(request))

    let url

    if (id)
      url = environment.baseUrl + form.url.replace('{id}', id.toString())
    else
      url = environment.baseUrl + form.url

    return this.http.request<any>(form.requestMethod, url, {
      body: formData
    }).pipe(tap({
      error: err => {
        for (let key of Object.keys(err.error.fieldsErrors)){
          formGroup.controls[key]?.markAsTouched()
          formGroup.controls[key]?.setErrors({'serverError': err.error.fieldsErrors[key].error})
        }
      }
    }))
  }

  excludeFiles(data: any, key?: string): Map<string, File> {
    if (key) {
      key.concat('.')
    } else {
      key = ''
    }

    let files: Map<string, File> = new Map<string, File>();
    for (let iterableKey of Object.keys(data)) {
      if (data[iterableKey] instanceof File) {
        files.set(key.concat(iterableKey), data[iterableKey])
        data[key] = undefined
      } else if (data[key] instanceof Object) {
        this.excludeFiles(data[key], key).forEach(((value, key1) => {
          files.set(key1, value)
        }))
      }
    }

    return files
  }

  getInitFormData(form: Form, id: number): Observable<any> {
    console.log(environment.baseUrl + form.initializeUrl?.replace("{id}", id.toString()))
    return this.http.get<Form>(environment.baseUrl + form.initializeUrl?.replace("{id}", id.toString()))
  }
}
