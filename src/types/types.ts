export interface FormProp {
  nameId: string
  titleId: string
  type?: string
  register: any
  validationSchema?: any
  errors: any
  errorText: string
  children?: React.ReactNode
}

export interface ContactProp {
  name: string
  email: string
  message: string
  checkbox: boolean
}
