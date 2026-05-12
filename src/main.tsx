import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from "react-router";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactsPage from "./pages/ContactsPage";
import LoginPage from "./pages/LoginPage";

function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/posluhy", element: <ServicesPage /> },
      { path: "/kontakty", element: <ContactsPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
], { basename: import.meta.env.BASE_URL });

declare global {
  interface Window { gtag: (...args: unknown[]) => void; }
}

router.subscribe((state) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: state.location.pathname,
    });
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
