import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { PGliteProvider } from '@electric-sql/pglite-react'
import { router } from './router.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PGliteProvider>
      <RouterProvider router={router} />
    </PGliteProvider>
  </StrictMode>,
)
