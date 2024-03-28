import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../pages/Shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from '../dashboard/Dashboard';
import UploadBook from "../dashboard/UploadBook";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`) // Fixed interpolation issue here
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      { 
        path: "/admin/dashboard", 
        element:<Dashboard/>
      },
      { 
        path: "/admin/dashboard/upload", 
        element: <UploadBook /> 
      },
      // { path: "/admin/dashboard/manage", element: <ManageBooks /> },
      // { path: "/admin/dashboard/edit-books/:id", element: <EditBooks />,
    //   loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
    // },
    ],
  },
  
]);

export default router;
