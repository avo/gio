import React from 'react'
import { Anchor } from '../core/Anchor'

export function RouteList({ routes }: { routes: RoutePath[] }) {
  return (
    <ul>
      {routes.map(({ description, path, title }) => {
        return path ? (
          <li key={path}>
            <Anchor css={{ marginInlineEnd: '0.5rem' }} href={path}>
              {title}
            </Anchor>
            {description}
          </li>
        ) : null
      })}
    </ul>
  )
}

export interface RoutePath {
  dateUpdated?: string
  description?: string
  element: React.JSX.Element
  exact?: boolean
  index?: boolean
  path?: string
  title?: string
}
