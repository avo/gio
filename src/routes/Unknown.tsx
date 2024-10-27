import { Link } from 'react-router-dom';
import { Anchor } from '../core/Anchor';

export function Unknown() {
  return (
    <>
      <h1>Hmm...</h1>
      <p>
        Looks like you're requesting a page that doesn't exist. Please try heading back to the{' '}
        <Anchor as={Link} to="/">
          home page
        </Anchor>{' '}
        to start over. Thanks for understanding that the site is a work in progress.
      </p>
    </>
  );
}
