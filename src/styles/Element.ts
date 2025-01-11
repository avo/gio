import { css } from '@emotion/react'
import { heading1Style, heading2Style, heading3Style } from './typography'

export const elementStyle = css`
  html,
  body {
    background: var(--av-color-primary-bg);
    color: var(--av-color-fg);
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: var(--av-font-step-0);
    font-synthesis: none;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    min-height: 100%;
    min-width: 320px;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    background-image: linear-gradient(
      45deg,
      var(--av-color-primary-bg),
      var(--av-color-primary-bg),
      var(--av-color-primary-bg),
      var(--av-color-primary-bg-active)
    );
  }

  h1 {
    ${heading1Style}
  }

  h2 {
    ${heading2Style}
  }

  h3 {
    ${heading3Style}
  }

  a {
    text-decoration: inherit;
  }

  p {
    margin-block: var(--av-space-xs);
    text-wrap: pretty; /* use in newer browsers to pretty up text wrapping */
  }

  ul {
    margin-block-start: 0.25rem;
    margin-block-end: 1rem;
    padding-inline-start: 1.5rem;
  }

  ul ul {
    margin-block: 0;
  }
`
