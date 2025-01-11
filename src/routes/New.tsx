import { Link } from 'react-router-dom'
import { Anchor } from '../core/Anchor'

export function Newness() {
  return (
    <>
      <h1>Apologies</h1>
      <p>
        I'm still working on content. Thanks for understanding. More to come soon! In the meantime,
        try heading back to the{' '}
        <Anchor as={Link} to="/">
          home page
        </Anchor>
        .
      </p>
    </>
  )
}
