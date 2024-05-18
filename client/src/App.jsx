import HomePage from "./pages/HomePage/HomePAge";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";
import Layout from "./pages/Layout/Layout";
import SinglePage from "./pages/SinglePage/SinglePage";

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
              path: "/list",
              element: <ListPage/>
            },
            {
              path: "/:id",
              element: <SinglePage/>
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
