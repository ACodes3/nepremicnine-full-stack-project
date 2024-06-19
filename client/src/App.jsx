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
import EstateDashboard from "./AdminDashboard/EstateDashboard/EstateDashboard";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import InsertAgent from "./AdminDashboard/AgentsDashboard/InsertAgent/InsertAgent";
import AddManager from "./AdminDashboard/ManagersDashboard/AddManager/AddManager";

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
          path: "/sign-in",
          element: <LoginPage />,
        },
        {
          path: "/sign-up",
          element: <RegisterPage />,
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
              path: "/dashboard/estates",
              element: <EstateDashboard />,
            },
            {
              path: "/dashboard/account",
              element: <AccountDashboard />,
            },
            {
              path: "/dashboard/settings",
              element: <SettingsDashboard />,
            },
            {
              path: "/dashboard/add-agent",
              element: <InsertAgent />,
            },
            {
              path: "/dashboard/add-manager",
              element: <AddManager />,
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
