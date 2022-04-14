import {Column} from "./column.interface";

export interface Table{
  name: string
  addFormKey: string
  url: string
  pageParamName: string
  pageSizeParamName: string
  sortDirectionParamName: string
  sortPropertyParamName: string
  searchParamName?: string
  availablePageSize?: number[]
  currentPageSize?: number
  columns: {[key: string] : Column}
}
