import { lazy } from 'react'
import { meta as designFeedbackMeta } from '../articles/xfn/design-feedback/meta'
import { MdxComponents } from '../layout/MdxComponents'
import { RouteList, RoutePath } from '../layout/RouteList'

const DesignFeedback = lazy(() => import('../articles/xfn/design-feedback/index.mdx'))

const fallbackRoute: RoutePath = {
  element: <Articles />,
  exact: true,
  index: true,
}

const a11yRoutes: RoutePath[] = []

const feRoutes: RoutePath[] = []

const xfnRoutes: RoutePath[] = [
  {
    dateUpdated: designFeedbackMeta.dateUpdated,
    description: designFeedbackMeta.description,
    element: <DesignFeedback components={MdxComponents}></DesignFeedback>,
    exact: true,
    path: '/articles/xfn/design-feedback',
    title: designFeedbackMeta.title,
  },
]

export const articleRoutes: RoutePath[] = [fallbackRoute, ...a11yRoutes, ...feRoutes, ...xfnRoutes]

export function Articles() {
  return (
    <>
      <h1>Articles</h1>
      <p>
        A collection of articles on various topics, which will be updated periodically to stay
        relevant.
      </p>

      <RouteList routes={articleRoutes} />
    </>
  )
}
