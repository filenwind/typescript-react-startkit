declare module 'camelcase' {
  interface Options {
    pascalCase: boolean;
  }
  function camelCase(input: string, options: Options): string;
  function camelCase(inputs: string[], options: Options): string;
  export default camelCase;
}
