import { css } from '@emotion/react'
import { HTMLAttributes } from 'react'
import { ScrollRestoration } from 'react-router-dom'
import { Anchor } from '../../core/Anchor'
import { SkipLink } from '../../core/SkipLink'

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  padding-block-end: var(--av-space-sm);
  padding-inline: var(--av-space-lg);
`

const headingStyle = css`
  margin-block-start: 2rem;
`

const mainStyle = css`
  margin-block: 1rem 2rem;
  min-height: 300px;
`

const anchorStyle = css`
  align-self: self-start; /* prevent full-width stretching */
  margin-block-start: 1rem;
`

export function PlaygroundWrapper({ children, title, ...props }: PlaygroundWrapperProps) {
  return (
    <div css={wrapperStyle} {...props}>
      <ScrollRestoration />
      <SkipLink />
      <Anchor css={anchorStyle} href={'/playground'}>
        &larr; Back to Playground
      </Anchor>

      <h1 css={headingStyle}>{title}</h1>
      <main css={mainStyle} id="main">
        {children}
      </main>
    </div>
  )
}

interface PlaygroundWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  title: string
}
