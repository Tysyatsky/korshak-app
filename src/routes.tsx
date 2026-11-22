import type { RouteObject } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactsPage from './pages/ContactsPage';
import LoginPage from './pages/LoginPage';

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/posluhy', element: <ServicesPage /> },
      { path: '/kontakty', element: <ContactsPage /> },
      { path: '/login', element: <LoginPage /> },
    ],
  },
];
