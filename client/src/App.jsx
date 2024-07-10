import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Error,
  Register,
  Login,
  DashboardLayout,
} from './pages/index.js';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
