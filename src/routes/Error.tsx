import { Link, useRouteError } from 'react-router-dom'
import { Anchor } from '../core/Anchor'

export function Error() {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <h1>Yikes</h1>
      <p>
        Something appears to have gone wrong. Please try refreshing your page or heading back to the{' '}
        <Anchor as={Link} to="/">
          home page
        </Anchor>{' '}
        to start over. Thanks for understanding that the site is a work in progress.
      </p>
    </>
  )
}
