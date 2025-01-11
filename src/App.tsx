import { Global } from '@emotion/react'
import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './routes/About'
import { AboutSite } from './routes/AboutSite'
import { articleRoutes } from './routes/Articles'
import { Error } from './routes/Error'
import { Root } from './routes/Root'
import { Unknown } from './routes/Unknown'
import { baseStyle } from './styles/Base'
import { elementStyle } from './styles/Element'
import { themeStyle } from './styles/Theme'
import { blogRoutes } from './routes/Blog'

const router = createBrowserRouter([
  {
    children: [
      {
        element: <About />,
        index: true,
      },
      {
        element: <About />,
        path: '/about',
      },
      {
        element: <AboutSite />,
        path: '/about/site',
      },
      {
        children: blogRoutes,
        path: '/blog',
      },
      {
        children: articleRoutes,
        path: '/articles',
      },

      {
        element: <Error />,
        path: '/error',
      },
      {
        element: <Unknown />,
        path: '*',
      },
    ],
    element: <Root />,
    errorElement: <Error />,
    path: '/',
  },
])

function App() {
  return (
    <>
      <Global styles={[baseStyle, themeStyle, elementStyle]} />
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App
