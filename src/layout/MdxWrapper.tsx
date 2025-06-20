import { css } from '@emotion/react'
import { MDXProvider } from '@mdx-js/react'
import { ReactNode } from 'react'
import { Anchor } from '../core/Anchor'
import { textSmallStyle } from '../styles/typography'
import { capitalize, joinWithSeparator } from '../utils/string'

const backStyle = css`
  align-self: flex-start;
`
const metaStyle = css`
  ${textSmallStyle}
  display: grid;
  grid-gap: var(--av-space-3xs);
  grid-template-columns: max-content auto;
  margin-block: 0 0.5rem;

  dt {
    font-weight: bold;
  }

  dd {
    margin-inline: 0.5rem;
  }
`

export function MdxWrapper({ children, meta, type }: MdxWrapperProps) {
  return (
    <>
      <Anchor css={backStyle} href={`/${type}`}>
        &larr; Back to {capitalize(type)}
      </Anchor>
      <h1>{meta.title}</h1>
      <dl css={metaStyle}>
        <dt>Updated:</dt>
        <dd>{meta.dateUpdated}</dd>
        <dt>Tags:</dt>
        <dd>{joinWithSeparator(meta.tags)}</dd>
      </dl>

      <MDXProvider>{children}</MDXProvider>
    </>
  )
}

interface MdxMeta {
  dateCreated: string
  dateUpdated: string
  description: string
  tags: string[]
  title: string
}

interface MdxWrapperProps {
  children: ReactNode
  meta: MdxMeta
  type: 'articles' | 'blog'
}
