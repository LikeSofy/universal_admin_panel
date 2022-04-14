import {Button} from "./button.interface";
import {Table} from "./table.interface";

export interface Controller{
  name: string
  createButton: Button
  table: Table
}
