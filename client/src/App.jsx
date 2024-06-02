import HomePage from "./pages/HomePage/HomePAge";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";
import Layout from "./pages/Layout/Layout";
import SinglePage from "./pages/SinglePage/SinglePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AgentsPage from "./pages/AgentsPage/AgentsPage";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
          <Layout/>,
          children:[
            {
              path: "/",
              element: <HomePage/>
            },
            {
              path: "/about",
              element: <AboutPage/>
            },
            {
              path: "/contact",
              element: <ContactPage/>
            },
            {
              path: "/agents",
              element: <AgentsPage/>
            },
            {
              path: "/list",
              element: <ListPage/>
            },
            {
              path: "/:id",
              element: <SinglePage/>
            },
            {
              path: "/profile",
              element: <ProfilePage/>
            },
            {
              path: "/dashboard",
              children: [
                {
                  path: "/dashboard",
                  element: <AdminDashboard/>
                },
                {
                  path: "/dashboard/agents",
                  element: <AdminDashboard/>
                },
                {
                  path: "/dashboard/listings",
                  element: <ListPage/>
                },
                {
                  path: "/dashboard/offices",
                  element: <AdminDashboard/>
                },
                {
                  path: "/dashboard/account",
                  element: <AdminDashboard/>
                },
                {
                  path: "/dashboard/settings",
                  element: <AdminDashboard/>
                }
              ]
            },
          ]
    },
    {
      path: "/list",
      element: <ListPage/>,
    },
  ]);

  return (
   <RouterProvider router={router} />
  );
}

export default App;
