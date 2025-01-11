import { css } from '@emotion/react'

const headingStyle = css`
  line-height: 125%;
  margin-inline: 0;
`

export const heading1Style = css`
  ${headingStyle}
  font-size: var(--av-font-step-3);
  margin-block: var(--av-space-xs);
`

export const heading2Style = css`
  ${headingStyle}
  font-size: var(--av-font-step-1);
  margin-block: var(--av-space-2xs);
`

export const heading3Style = css`
  ${headingStyle}
  font-size: var(--av-font-step-1);
  margin-block: var(--av-space-2xs);
`

export const headingEmStyle = css`
  font-size: var(--av-font-step-2);
  font-style: italic;
`

export const textSmallStyle = css`
  font-size: var(--av-font-step--1);
`

export const textXsmallStyle = css`
  font-size: var(--av-font-step--2);
`
