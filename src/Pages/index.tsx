import ProfilePage from '@/Pages/ProfilePage/ProfilePage';
import ErrorPage from '@/Pages/ErrorPage/ErrorPage';
import Step from '@/Pages/Step/Step';

import { createBrowserRouter } from 'react-router-dom';

export const PROFILE_ROUTE = '/';
export const CREATE_ROUTE = '/create';

export const router = createBrowserRouter([
  {
    path: PROFILE_ROUTE,
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: CREATE_ROUTE,
    element: <Step />,
  },
]);
