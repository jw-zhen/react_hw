import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CustomerList from 'src/pages/CustomerList';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import Register1 from 'src/pages/Register1';
import Register2 from 'src/pages/Register2';
import Settings from 'src/pages/Settings';
import Detail from 'src/components/product/detail';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'register1', element: <Register1 /> },
      { path: 'register2', element: <Register2 /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: 'detail', element: <Detail to="/detail" /> }
    ]
  }
];

export default routes;
