import { Outlet, ScrollRestoration } from 'react-router-dom'
import { PageWrapper } from '../layout/PageWrapper'

export function Root({ pageWrapper = true }: RootProps) {
  return (
    <>
      <ScrollRestoration />
      {pageWrapper ? (
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      ) : (
        <Outlet />
      )}
    </>
  )
}

interface RootProps {
  /**
   * Whether to wrap the outlet in a page layout wrapper.
   * @default true
   */
  pageWrapper?: boolean
}
