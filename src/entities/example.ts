interface IXOptions {
  a?: string
  b?: any
  c?: number
}

const XDefaults: IXOptions = {
  a: 'default',
  b: null,
  c: 1,
}

export class ClassX {
  private options: IXOptions

  constructor(XOptions: IXOptions) {
    this.options = { ...XDefaults, ...XOptions }
  }

  public printOptions(): void {
    console.log(this.options.a)
    console.log(this.options.b)
    console.log(this.options.c)
  }
}
