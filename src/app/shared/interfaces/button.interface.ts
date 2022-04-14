import {Form} from "./form.interface";

export interface Button{
  type: string
  text: string
  formKey: string
  url?: string
  requestMethod?: string
}
