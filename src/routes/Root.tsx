import { Outlet, ScrollRestoration } from 'react-router-dom'
import { PageWrapper } from '../layout/PageWrapper'

export function Root() {
  return (
    <>
      <ScrollRestoration />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </>
  )
}
