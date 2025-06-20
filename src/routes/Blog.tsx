import { lazy } from 'react'
import { meta as starDate20250108 } from '../blog/2025-01-08/meta'
import { MdxComponents } from '../layout/MdxComponents'
import { RouteList, RoutePath } from '../layout/RouteList'

const StarDate20250108 = lazy(() => import('../blog/2025-01-08/index.mdx'))

// eslint-disable-next-line react-refresh/only-export-components
export const blogRoutes: RoutePath[] = [
  {
    element: <Blog />,
    exact: true,
    index: true,
  },
  {
    dateUpdated: starDate20250108.dateUpdated,
    description: starDate20250108.description,
    element: <StarDate20250108 components={MdxComponents}></StarDate20250108>,
    exact: true,
    path: '/blog/2025-01-08',
    title: starDate20250108.title,
  },
]

export function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <p>Collection of thoughts on any given day.</p>

      <RouteList routes={blogRoutes} />
    </>
  )
}
