import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { Anchor, AnchorDivider } from '../core/Anchor';
import { Button } from '../core/Button';
import {
  breakpointMaxWidth,
  layoutMediaQueryMixin,
  pentagonMixin,
  pseudoAbsContentMixin,
} from '../styles/Mixins';

const headerStyle = css`
  padding-block-start: var(--av-space-sm);
  position: relative;
  z-index: var(--av-zindex-md);

  /* top left pentagon */
  ::before {
    ${pseudoAbsContentMixin};
    ${pentagonMixin()};
    left: 5rem;
    opacity: 0.4;
    position: absolute;
    top: 1.25rem;

    @media (max-width: ${breakpointMaxWidth.md}) {
      opacity: 0;
    }
  }
`;

const secondaryNavStyle = css`
  display: flex;
  font-size: var(--av-font-step--1);
  justify-content: flex-end;
`;

const primaryNavStyle = css`
  ${layoutMediaQueryMixin};
  padding-block: var(--av-space-2xs);
  padding-inline-start: 8rem;
  position: relative;
  z-index: var(--av-zindex-md);

  button,
  a {
    margin-block-start: var(--av-space-2xs);
    margin-inline-end: var(--av-space-sm);
  }
`;

export function Header() {
  return (
    <header css={headerStyle}>
      <nav aria-label="Secondary external links" css={secondaryNavStyle}>
        <Anchor href="https://www.linkedin.com/in/annavo/" target="_blank">
          LinkedIn
        </Anchor>
        <AnchorDivider />
        <Anchor href="https://github.com/avo" target="_blank">
          Github
        </Anchor>
      </nav>
      <nav aria-label="Primary" css={primaryNavStyle}>
        <Button as={Link} to="/">
          Home
        </Button>
        <Button as={Link} to="/blog">
          Blog
        </Button>
      </nav>
    </header>
  );
}
