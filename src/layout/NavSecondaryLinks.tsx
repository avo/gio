import { css } from '@emotion/react'
import { Anchor, AnchorDivider } from '../core/Anchor'

const secondaryNavStyle = css`
  display: flex;
  font-size: var(--av-font-step--1);
  justify-content: flex-end;
`

export function NavSecondaryLinks() {
  return (
    <nav aria-label="Secondary external links" css={secondaryNavStyle}>
      <Anchor
        aria-label="View my LinkedIn profile"
        href="https://www.linkedin.com/in/annavo/"
        target="_blank"
      >
        LinkedIn
      </Anchor>
      <AnchorDivider />
      <Anchor aria-label="View my Github pages" href="https://github.com/avo" target="_blank">
        Github
      </Anchor>
    </nav>
  )
}
