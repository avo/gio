import { css } from '@emotion/react'
import { Link, ScrollRestoration } from 'react-router-dom'
import beachSunsetImage from '../assets/beach-sunset-purple-blue_1920.jpg'
import { Anchor } from '../core/Anchor'
import { SkipLink } from '../core/SkipLink'
import { Footer } from '../layout/Footer'
import { NavSecondaryLinks } from '../layout/NavSecondaryLinks'
import { layoutMediaQueryMixin } from '../styles/Mixins'
import { heading2Style } from '../styles/typography'

const headerHeight = '70px'

const layoutStyle = css`
  @supports (animation-range: 0 90vh) {
    padding-top: 100vh;
  }

  @keyframes sticky-parallax-header-move-and-size {
    from {
      background-position: 50% 0;
      font-size: var(--av-font-step-4);
      height: 100vh;
    }
    to {
      background-color: var(--av-color-primary-bg);
      background-opacity: 0.5;
      background-position: 50% 100%;
      font-size: var(--av-font-step-0);
      height: ${headerHeight};
    }
  }

  @keyframes sticky-parallax-opacity-fade {
    from {
      opacity: 100;
    }
    to {
      opacity: 0;
    }
  }
`

const stickyParallaxHeaderStyle = css`
  background-blend-mode: soft-light;
  background-color: var(--av-color-tertiary-bg);
  background-image: url(${beachSunsetImage});
  background-position: 50% 50%;
  background-size: cover;
  box-sizing: border-box;
  display: grid;
  font-size: calc(4vw + 1em);
  height: 100vh;
  place-items: center;
  text-align: center;
  width: 100%;

  @supports (animation-range: 0vh 90vh) {
    animation: sticky-parallax-header-move-and-size linear forwards;
    animation-range: 0vh 90vh;
    animation-timeline: scroll();
    border-bottom: 1px solid var(--av-color-primary-border);
    position: fixed;
    top: 0;
  }
`

const headerStyle = css`
  text-shadow: var(--av-shadow-1);
`

const subtitleStyle = css`
  opacity: 100;

  @supports (animation-range: 0 90vh) {
    animation: sticky-parallax-opacity-fade linear forwards;
    animation-range: 0 90vh;
    animation-timeline: scroll();
  }
`

const stickyNavStyle = css`
  background-color: var(--av-color-primary-bg);
  padding-block: 0.5rem;
  padding-inline: 2rem;
  position: sticky;
  top: ${headerHeight};
`

const mainStyle = css`
  ${layoutMediaQueryMixin};
  margin: 0 auto;
  min-height: 500px;
  padding-block: 3rem 2rem;
  padding-inline: 9rem var(--av-space-lg);
`

const listStyle = css`
  margin-block-start: 1rem;
`

export function Playground() {
  return (
    <div css={layoutStyle}>
      <ScrollRestoration />
      <SkipLink />

      <div css={stickyParallaxHeaderStyle}>
        <header css={headerStyle}>
          <h1>Playground</h1>
          <p css={subtitleStyle} role="doc-subtitle">
            Used to test out code and experiment.
          </p>
        </header>
      </div>

      <div css={stickyNavStyle}>
        <NavSecondaryLinks />
      </div>

      <main css={mainStyle} id="main">
        <h2 css={heading2Style}>Demos and experiments</h2>
        <p>
          These are quick working examples to test concepts and may not be fully tested or
          accessible.
        </p>

        <p>
          If scrolling down to demos gets tedious, the skip to content link can be used to quickly
          jump to main. (Tab + Enter after clicking "Back to Playground")
        </p>

        <ul css={listStyle}>
          <li>
            <Anchor as={Link} to="/playground/demos/card-draw">
              Card Draw
            </Anchor>
            <p>
              Example demo that is outside the every day norm of filtering and mapping
              presentational data, so as not to "draw" a blank at critical times in life. Oddly
              specific, no?
            </p>
          </li>
          <li>
            <Anchor as={Link} to="/playground/demos/carousel">
              Carousel
            </Anchor>
            <p>An example carousel with images and dots to navigate through the images</p>
          </li>
          <li>
            <Anchor as={Link} to="/playground/demos/combofield">
              Combo Field
            </Anchor>
            <p>
              Setup a combo field from scratch using fade and positioning flipping based on the
              viewport
            </p>
          </li>
          <li>
            <Anchor as={Link} to="/playground/demos/modal">
              Modal
            </Anchor>
            <p>Create a modal that appears in the center of the screen with a background overlay</p>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
