import { Global } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About } from './routes/About';
import { AboutSite } from './routes/AboutSite';
import { Error } from './routes/Error';
import { Newness } from './routes/New';
import { Root } from './routes/Root';
import { Unknown } from './routes/Unknown';
import { baseStyle } from './styles/Base';
import { elementStyle } from './styles/Element';
import { themeStyle } from './styles/Theme';

const router = createBrowserRouter(
  [
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
          element: <Newness />,
          path: '/blog',
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
  ],
  { basename: import.meta.env.DEV ? '/' : '/' }
);

function App() {
  return (
    <>
      <Global styles={[baseStyle, themeStyle, elementStyle]} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
