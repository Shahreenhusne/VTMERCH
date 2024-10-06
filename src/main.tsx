import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createRoutesFromElements, RouteObject, RouterProvider, Route, createBrowserRouter } from 'react-router-dom'

const routes : RouteObject [] =  createRoutesFromElements(
  <Route path='/' element={<App/>}>
  </Route>
)

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
