import { ROUTES } from '@src/common/constants/path.constant.ts'
import AuthPage from '@src/pages/Auth.page.tsx'
import HomePage from '@src/pages/Home.page.tsx'
import { createBrowserRouter, Navigate } from 'react-router-dom'

export const routerSetup = [
  {
    path: ROUTES.HOME,
    element: <HomePage/>,
    requiresAuth: false
  },
  {
    path: ROUTES.AUTH,
    element: <AuthPage/>,
    requiresAuth: false
  },
  // {
  //   path: '/inventories',
  //   element: <CustomInventoryPage/>,
  //   requiresAuth: true
  // },
  {
    path: '*',
    element: <Navigate to={ROUTES.HOME} replace/>
  }
]

export const browserRouter = createBrowserRouter(
  routerSetup.map(setup => ({
    path: setup.path,
    element: setup.element
  }))
)
