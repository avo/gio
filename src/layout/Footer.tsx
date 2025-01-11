import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { Anchor } from '../core/Anchor'
import {
  diamondMixin,
  layoutMediaQueryMixin,
  pseudoAbsContentMixin,
  textShadowMixin,
} from '../styles/Mixins'

const footerStyle = css`
  ${layoutMediaQueryMixin};
  ${textShadowMixin};
  font-size: var(--av-font-step--2);
  padding-block: 3rem 2rem;
  padding-inline-start: 10rem;

  p {
    max-width: 38rem;
    position: relative;
    z-index: var(--av-zindex-md);
  }

  /* bottom right diamond */
  ::before {
    ${pseudoAbsContentMixin};
    ${diamondMixin(80, 120)};
    background: var(--av-color-tertiary-bg);
    right: 5rem;
    opacity: 0.4;
  }

  /* bottom left diamond beneath footer text */
  ::after {
    ${pseudoAbsContentMixin};
    ${diamondMixin(50, 60)};
    bottom: 10px;
    left: 5rem;
    margin-block-start: var(--av-space-sm);
    opacity: 0.4;
    position: absolute;
  }
`

const copyrightStyle = css`
  font-size: var(--av-font-step--1);
`

export function Footer() {
  return (
    <footer css={footerStyle}>
      <p css={copyrightStyle}>&copy;{new Date().getFullYear()} Anna Vo. All rights reserved.</p>
      <p>
        <Anchor as={Link} to="/about/site">
          How this site was built
        </Anchor>
      </p>
    </footer>
  )
}
