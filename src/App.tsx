import { Global } from '@emotion/react'
import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Playground } from './playground'
import CarouselDemo from './playground/demos/carousel'
import ComboFieldDemo from './playground/demos/combofield'
import ModalDemo from './playground/demos/modal'
import { About } from './routes/About'
import { AboutSite } from './routes/AboutSite'
import { articleRoutes } from './routes/Articles'
import { blogRoutes } from './routes/Blog'
import { Error } from './routes/Error'
import { Root } from './routes/Root'
import { Unknown } from './routes/Unknown'
import { baseStyle } from './styles/Base'
import { elementStyle } from './styles/Element'
import { themeStyle } from './styles/Theme'

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Playground />,
        index: true,
      },
      {
        element: <CarouselDemo />,
        path: '/playground/demos/carousel',
      },
      {
        element: <ComboFieldDemo />,
        path: '/playground/demos/combofield',
      },
      {
        element: <ModalDemo />,
        path: '/playground/demos/modal',
      },
    ],
    path: '/playground',
  },
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
