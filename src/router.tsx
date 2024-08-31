import {
  createBrowserRouter,
} from 'react-router-dom'
import { Root } from './pages/root'
import { About } from './pages/about'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <div>Home</div>,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])
