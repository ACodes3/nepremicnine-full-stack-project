import HomePage from "./pages/HomePage/HomePAge";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";
import Layout from "./pages/Layout/Layout";
import SinglePage from "./pages/SinglePage/SinglePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AgentsPage from "./pages/AgentsPage/AgentsPage";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AgentsDashboard from "./AdminDashboard/AgentsDashboard/AgentsDashboard";
import ListingsDashboard from "./AdminDashboard/ListingsDashboard/ListingsDashboard";
import OfficeDashboard from "./AdminDashboard/OfficeDashboard/OfficeDashboard";
import AccountDashboard from "./AdminDashboard/AccountDashboard/AccountDashboard";
import SettingsDashboard from "./AdminDashboard/SettingsDashboard/SettingsDashboard";
import ManagersDashboard from "./AdminDashboard/ManagersDashboard/ManagersDashboard";
import OfficesPage from "./pages/OfficesPage/OfficesPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/agents",
          element: <AgentsPage />,
        },
        {
          path: "/offices",
          element: <OfficesPage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/dashboard",
          children: [
            {
              path: "/dashboard",
              element: <AdminDashboard />,
            },
            {
              path: "/dashboard/agents",
              element: <AgentsDashboard />,
            },
            {
              path: "/dashboard/managers",
              element: <ManagersDashboard />,
            },
            {
              path: "/dashboard/listings",
              element: <ListingsDashboard />,
            },
            {
              path: "/dashboard/offices",
              element: <OfficeDashboard />,
            },
            {
              path: "/dashboard/account",
              element: <AccountDashboard />,
            },
            {
              path: "/dashboard/settings",
              element: <SettingsDashboard />,
            },
          ],
        },
      ],
    },
    {
      path: "/list",
      element: <ListPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
