import {InputField} from "./input-field.interface";

export interface Form{
  name: string
  buttonText: string
  url: string
  initializeUrl?: string
  requestMethod: string
  fields: {
    [key: string]: InputField
  }
}
