import {Button} from "./button.interface";

export interface Column{
  type: string
  name: string
  sortProperty?: string
  button?: Button
}
