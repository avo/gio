import { css } from '@emotion/react';

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
      var(--av-color-primary),
      var(--av-color-primary),
      var(--av-color-primary),
      var(--av-color-primary-active)
    );
  }

  h1 {
    font-size: var(--av-font-step-3);
    margin-block: var(--av-space-xs);
    margin-inline: 0;
  }

  a {
    text-decoration: inherit;
  }

  p {
    margin-block: var(--av-space-xs);
    text-wrap: pretty; /* use in newer browsers to pretty up text wrapping */
  }
`;
