import { css } from '@emotion/react'
import { HTMLAttributes, ReactNode } from 'react'
import {
  breakpointMaxWidth,
  layoutMediaQueryMixin,
  pentagonMixin,
  pseudoAbsContentMixin,
} from '../styles/Mixins'

const mainStyle = css`
  ${layoutMediaQueryMixin};
  display: flex;
  padding-inline: 7.75rem 0;
  position: relative;
  z-index: var(--av-zindex-sm);

  /* bottom right large pentagon */
  ::before {
    ${pseudoAbsContentMixin};
    ${pentagonMixin(50, 60)};
    bottom: -9rem;
    background: var(
      --av-color-accent-primary-bg-dimmed
    ); /* use for a11y text contrast with footer text on small screens */
    position: absolute;
    right: 5rem;
  }

  /* bottom right medium pentagon */
  ::after {
    ${pseudoAbsContentMixin};
    ${pentagonMixin(30, 80)};
    right: 3rem;
    position: absolute;
    bottom: -6rem;
    opacity: 0.6;
    z-index: var(--av-zindex-sm);
  }
`

const contentWrapperStyle = css`
  background: var(--av-color-secondary-bg);
  border-radius: var(--av-border-radius-xl);
  display: flex;
  flex-direction: column;
  margin-block-start: var(--av-space-2xs);
  min-height: 500px;
  padding-block: var(--av-space-sm) var(--av-space-xl);
  padding-inline: var(--av-space-lg);
  position: relative;
  width: 100%;

  /* purple backdrop */
  ::before {
    background-color: var(--av-color-tertiary-bg);
    border: 1px solid var(--av-color-tertiary-border);
    border-radius: var(--av-border-radius-xl);
    bottom: 0;
    content: ' ';
    left: -4px;
    position: absolute;
    top: -120px;
    transform: rotate(7deg);
    transform-origin: top left;
    width: 93%;
    z-index: -1;

    @media (max-width: ${breakpointMaxWidth.lg}) {
      top: -100px;
    }

    @media (max-width: ${breakpointMaxWidth.md}) {
      top: -80px;
    }

    @media (max-width: ${breakpointMaxWidth.sm}) {
      top: -60px;
    }
  }

  /* bottom right small pentagon */
  ::after {
    ${pseudoAbsContentMixin};
    ${pentagonMixin(20, 20)};
    right: 2rem;
    position: absolute;
    bottom: -3rem;
    opacity: 0.4;
  }
`

export function MainSection({ children, ...props }: MainSectionProps) {
  return (
    <main css={mainStyle} id="main" {...props}>
      <section css={[contentWrapperStyle]}>{children}</section>
    </main>
  )
}

interface MainSectionProps extends HTMLAttributes<HTMLBodyElement> {
  children: ReactNode
}
