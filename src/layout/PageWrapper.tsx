import { css } from '@emotion/react'
import { SkipLink } from '../core/SkipLink'
import { diamondMixin, pseudoAbsContentMixin } from '../styles/Mixins'
import { Footer } from './Footer'
import { Header } from './Header'
import { MainSection } from './MainSection'

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  padding-block-end: var(--av-space-sm);
  padding-inline: var(--av-space-sm) var(--av-space-lg);

  /* first top left diamond */
  ::before {
    ${pseudoAbsContentMixin};
    ${diamondMixin(150, 45)};
    left: 0;
    top: 0;
  }

  /* second top left diamond */
  ::after {
    ${pseudoAbsContentMixin};
    ${diamondMixin(100, 53)};
    left: 30px;
    top: 145px;
    opacity: 0.9;
  }
`

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div css={layoutStyle}>
      <SkipLink />
      <Header />
      <MainSection>{children}</MainSection>
      <Footer />
    </div>
  )
}

interface PageWrapperProps {
  children: React.ReactNode
}
