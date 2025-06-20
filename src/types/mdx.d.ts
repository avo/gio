declare module '*.mdx' {
  let MDXComponent: (props: any) => React.JSX.Element
  export default MDXComponent
  export const meta: { [key: string]: any }
}
