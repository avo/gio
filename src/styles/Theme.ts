import { css } from '@emotion/react';

export const themeStyle = css`
  :root {
    /**** COLORS ****/
    --av-color-brand-hs: 198, 100%; // darker blue
    --av-color-purple-hs: 217, 45%; // blue purple
    --av-color-green-hs: 155, 23%; // greenish
    --av-color-yellow-hs: 51, 30%; // yellowish
    --av-color-teal-hs: 180, 94%; // use for accent

    // "white"
    --av-color-white: hsl(217, 45%, 89%); // white

    // brand
    --av-color-brand-100: hsl(var(--av-color-brand-hs), 9%);
    --av-color-brand-200: hsl(var(--av-color-brand-hs), 13%);
    --av-color-brand-300: hsl(var(--av-color-brand-hs), 16%);
    --av-color-brand-400: hsl(var(--av-color-brand-hs), 18%);

    // purple
    --av-color-purple-100: hsl(var(--av-color-purple-hs), 32%);
    --av-color-purple-200: hsl(var(--av-color-purple-hs), 55%);

    // green
    --av-color-green-100: hsl(var(--av-color-green-hs), 60%);
    --av-color-green-200: hsl(var(--av-color-green-hs), 65%);
    --av-color-green-300: hsl(var(--av-color-green-hs), 75%);
    --av-color-green-400: hsl(var(--av-color-green-hs), 80%);

    // yellow
    --av-color-yellow-100: hsl(var(--av-color-yellow-hs), 75%);
    --av-color-yellow-200: hsl(var(--av-color-yellow-hs), 80%);

    // teal
    --av-color-teal-100: hsl(var(--av-color-teal-hs), 27%);
    --av-color-teal-200: hsl(var(--av-color-teal-hs), 24%);

    /** Layout Colors **/
    --av-color-fg: var(--av-color-white);

    --av-color-primary-bg: var(--av-color-brand-100);
    --av-color-primary-bg-hover: var(--av-color-brand-200);
    --av-color-primary-bg-active: var(--av-color-brand-300);
    --av-color-primary-fg: var(--av-color-fg);
    --av-color-primary-fg-hover: var(--av-color-green-200);
    --av-color-primary-border: var(--av-color-teal-100);
    --av-color-primary-border-hover: var(--av-color-green-100);
    --av-color-primary-border-active: var(--av-color-yellow-100);

    --av-color-secondary: var(--av-color-brand-400);
    --av-color-secondary-border: var(--av-color-green-200);

    --av-color-tertiary-bg: var(--av-color-purple-100);
    --av-color-tertiary-border: var(--av-color-teal-100);

    --av-color-accent-primary-bg: var(--av-color-teal-100);
    --av-color-accent-primary-bg-dimmed: var(--av-color-teal-200);

    --av-color-link-fg: var(--av-color-green-200);
    --av-color-link-fg-hover: var(--av-color-green-400);
    --av-color-link-fg-active: var(--av-color-yellow-200);
    --av-color-link-fg-dimmed: var(--av-color-green-100);
    --av-color-link-fg-dimmed-hover: var(--av-color-green-300);
    --av-color-link-fg-dimmed-active: var(--av-color-yellow-100);

    --av-color-focus-outline: var(--av-color-purple-200); /* use for focus outline */
  }
`;
