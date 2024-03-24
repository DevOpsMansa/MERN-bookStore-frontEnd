//importations
import {createBrowserRouter,RouterProvider,} from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/book/:id",
          element: <SignleBook />,
          loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/blog",
          element: <Blog/>
        }
      ]
    },





    },
  ]);

 export default router;