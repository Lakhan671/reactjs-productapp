import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import ErrorPage from './pages/Error';
import HomePage from './pages/Home.jsx';
import AddProductsPage from './pages/AddProducts';
import RootLayout from './pages/Root';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <AddProductsPage />  }
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
