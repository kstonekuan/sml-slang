declare module 'acorn-loose' {
  import { Options as AcornOptions } from 'acorn'

  export function parse(source: string, options: AcornOptions): any
}
