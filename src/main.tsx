import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/posluhy",
    element: <ServicesPage />,
  },
  {
    path: "/pro-mene",
    element: <AboutPage />,
  },
  {
    path: "/kontakty",
    element: <ContactsPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
