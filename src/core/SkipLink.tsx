import { css } from '@emotion/react';
import { outlinePrimaryMixin } from '../styles/Mixins';
import { Anchor } from './Anchor';

const skipLinkStyle = css`
  ${outlinePrimaryMixin};
  background: var(--av-color-primary-bg);
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--av-color-fg);
  font-size: var(--av-font-step--2);
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0.5rem;
  transform: translateX(-125%);
  z-index: var(--av-zindex-layout-popover);

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.3s;
  }

  &:focus-within {
    transform: translateX(0%);

    a {
      outline: none;
    }
  }
`;

export function SkipLink() {
  return (
    <div css={skipLinkStyle}>
      <Anchor href="#main">Skip to content</Anchor>
    </div>
  );
}
