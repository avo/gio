import { css } from '@emotion/react'
import { HTMLAttributes } from 'react'
import { breakpointMaxWidth } from '../styles/Mixins'

const quoteStyleMixin = css`
  font-family: cursive, serif, sans-serif;
  font-size: var(--av-font-step-5);
  font-style: italic;
  line-height: 0.1em;
  opacity: 0.6;
  position: absolute;
`

const blockquoteStyle = css`
  background: var(--av-color-tertiary-bg);
  border-radius: var(--av-border-radius-md);
  padding-block: var(--av-space-md) var(--av-space-lg);
  padding-inline: var(--av-space-xl);
  position: relative;

  ::before {
    ${quoteStyleMixin};
    content: open-quote;
    left: 1rem;
    top: 3rem;
  }

  ::after {
    ${quoteStyleMixin};
    bottom: 5.25rem;
    content: close-quote;
    right: 1.25rem;
  }

  @media (max-width: ${breakpointMaxWidth.md}) {
    margin-inline: 0;
    padding-inline: var(--av-space-s-l) var(--av-space-lg);
  }
`

const quoteWrapperStyle = css`
  border-left: 6px double var(--av-color-tertiary-border);
  padding-inline-start: var(--av-space-md);

  @media (max-width: ${breakpointMaxWidth.md}) {
    margin-inline-start: var(--av-space-sm);
    padding-inline-start: var(--av-space-xs);
  }

  @media (max-width: ${breakpointMaxWidth.xs}) {
    border: 0;
    padding-inline: var(--av-space-3xs);
  }
`

const citeStyle = css`
  display: block;
  text-align: right;
  margin-block-start: var(--av-space-lg);
`

export function BlockQuote({ children, cite }: BlockQuoteProps) {
  return (
    <blockquote css={blockquoteStyle}>
      <div css={quoteWrapperStyle}>{children}</div>
      <cite css={citeStyle}>&mdash; {cite}</cite>
    </blockquote>
  )
}

interface BlockQuoteProps extends HTMLAttributes<HTMLQuoteElement> {
  cite: string
}
