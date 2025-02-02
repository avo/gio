import { css } from '@emotion/react'
import { useState } from 'react'
import { Button } from '../../../core/Button'

const carouselStyle = css`
  margin: auto;
  max-width: 50%;
  overflow: hidden;
  position: relative;
  width: 100%;

  @keyframes slideLeft {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideRight {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const carouselImagesStyle = css`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.5s ease;
  }
`

const carouselImageStyle = css`
  height: auto;
  max-height: 200px;
  object-fit: contain;
  width: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 0.5s ease-in-out;
  }
`

const slideRightStyle = css`
  animation-name: slideRight;
  animation-duration: 350ms;
`

const slideLeftStyle = css`
  animation-name: slideLeft;
  animation-duration: 350ms;
`

const carouselButtonStyle = css`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid transparent;
  color: white;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`

const prevButtonStyle = css`
  ${carouselButtonStyle};
  left: 10px;
`

const nextButtonStyle = css`
  ${carouselButtonStyle};
  right: 10px;
`

const carouselDotsStyle = css`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-block-start: 1rem;
`

const carouselDotStyle = css`
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid var(--av-color-primary-border);
  border-radius: 50%;
  cursor: pointer;
  height: 0.75rem;
  margin-inline: 0.5rem;
  padding: 0;
  width: 0.75rem;
`

const dotActiveStyle = css`
  background-color: white;
`

export function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const handleNext = () => {
    setDirection('next')
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setDirection('prev')
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 'next' : 'prev')
    setCurrentIndex(index)
  }

  return (
    <div css={carouselStyle}>
      <Button aria-label="Previous Image" css={prevButtonStyle} onClick={handlePrev}>
        &#8249;
      </Button>
      <div css={[carouselImagesStyle]}>
        {images.map((image, index) => (
          <img
            key={`image-${index}`}
            alt={`Slide ${index + 1}`}
            className={`${index === currentIndex ? 'active' : ''}`}
            css={[carouselImageStyle, direction === 'next' ? slideRightStyle : slideLeftStyle]}
            src={image}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
      <Button aria-label="Next Image" css={nextButtonStyle} onClick={handleNext}>
        &#8250;
      </Button>
      <div css={carouselDotsStyle}>
        {images.map((_, index) => (
          <button
            key={`button-dot-${index}`}
            aria-label={`Go to slide ${index + 1}`}
            className={`${index === currentIndex ? 'active' : ''}`}
            css={[carouselDotStyle, index === currentIndex && dotActiveStyle]}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}

interface CarouselProps {
  images: string[]
}
