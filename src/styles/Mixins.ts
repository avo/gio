import { css } from '@emotion/react';

/**
 * Breakpoints for desktop first design, which is the intended target audience.
 * JS vars because css vars don't work in media queries
 */
/* eslint-disable sort/object-properties */
export const breakpointMaxWidth = {
  xs: '444px',
  sm: '599px',
  md: '767px',
  lg: '929px',
  xl: '1023px',
};
/* eslint-enable sort/object-properties */

/**
 * Use to add primary outline to elements, especially with tab focus.
 */
export const outlinePrimaryMixin = css`
  outline: max(1px, 0.1em) solid var(--av-color-primary-focus-outline);
`;

/**
 * Use to add primary outline to elements, especially with tab focus.
 */
export const outlinePrimaryOffsetMixin = css`
  ${outlinePrimaryMixin};
  outline-offset: 0.25em;
`;

/**
 * Use to add focus outline when tabbing on keyboard.
 */
export const focusVisibleMixin = css`
  :focus-visible {
    ${outlinePrimaryOffsetMixin};
  }
`;

/**
 * For use with pseudo-elements.
 * Use to position empty content absolutely.
 */
export const pseudoAbsContentMixin = css`
  content: '';
  position: absolute;
`;

/**
 * Use to create a diamond shape.
 * @param size Used to set width and height. @default 150
 * @param rotation The rotation added. @default 45
 * @returns
 */
export const diamondMixin = (size = 150, rotation = 45) => css`
  background-color: var(--av-color-secondary);
  border: 1px solid var(--av-color-secondary-border);
  border-radius: var(--av-border-radius-sm);
  height: ${size}px;
  transform: rotate(${rotation}deg);
  width: ${size}px;
`;

/**
 * Use to create a pentagon shape.
 * @param size  Used to set width and height @default 100
 * @param rotation The rotation to add. @default 30
 * @returns
 */
export const pentagonMixin = (size = 100, rotation = 30) => css`
  background: var(--av-color-accent-primary-bg);
  clip-path: polygon(50% 0, 100% 38%, 81% 100%, 19% 100%, 0 38%);
  height: ${size}px;
  transform: rotate(${rotation}deg);
  width: ${size}px;
`;

/**
 * Use to change the inline padding for the main
 * layout at a specific viewport width.
 */
export const layoutMediaQueryMixin = css`
  @media (max-width: ${breakpointMaxWidth.md}) {
    padding-inline: var(--av-space-2xs-xl) 0;
  }
`;

/**
 * Add a touch of text shadow to increase readability when text overlays shape
 */
export const textShadowMixin = css`
  text-shadow: 0.1em 0.1em 0.2em var(--av-color-primary-bg);
`;

/**
 * Use to hide things off screen for screen reader only.
 */
export const srOnlyMixin = css`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
