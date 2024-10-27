import { Outlet } from 'react-router-dom';
import { PageWrapper } from '../layout/PageWrapper';

export function Root() {
  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  );
}
