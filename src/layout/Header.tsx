import { css } from '@emotion/react'
import { HomeIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { Button } from '../core/Button'
import {
  breakpointMaxWidth,
  layoutMediaQueryMixin,
  pentagonMixin,
  pseudoAbsContentMixin,
} from '../styles/Mixins'
import { NavSecondaryLinks } from './NavSecondaryLinks'

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
`

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
`

export function Header() {
  return (
    <header css={headerStyle}>
      <NavSecondaryLinks />
      <nav aria-label="Primary" css={primaryNavStyle}>
        <Button as={Link} to="/">
          <HomeIcon style={{ height: '20px', verticalAlign: 'text-bottom', width: '20px' }} />
        </Button>
        <Button as={Link} to="/articles">
          Articles
        </Button>
        <Button as={Link} to="/blog">
          Blog
        </Button>
      </nav>
    </header>
  )
}
