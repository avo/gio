import { PlaygroundWrapper } from '../../layout/PlaygroundWrapper'
import { Carousel } from './Carousel'

const images = [
  'https://placehold.co/600x400/jpeg',
  'https://placehold.co/400x600/jpeg',
  'https://placehold.co/640x280/jpeg',
  'https://placehold.co/600x600/jpeg',
  'https://placehold.co/400x300/jpeg',
  'https://placehold.co/200x400/jpeg',
]

export default function Demo() {
  return (
    <PlaygroundWrapper title="Carousel Example">
      <Carousel images={images} />
    </PlaygroundWrapper>
  )
}
