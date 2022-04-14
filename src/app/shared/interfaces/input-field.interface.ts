export interface InputField{
  type: string
  name: string
  supportTypes?: string[]
  selectOptions?: {
    url: string
    nameKeys: string[]
  }
  fields: {
    [key: string]: InputField
  }
}
