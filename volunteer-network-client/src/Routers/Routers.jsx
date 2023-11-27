import { createBrowserRouter } from "react-router-dom";
import AdminLayouts from "../Layouts/AdminLayouts/AdminLayouts";
import AddVolenteers from "../components/adminPages/AddProducts/AddProducts";
import ViewVolenteers from "./../components/adminPages/viewVolenteers/ViewVolenteers";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1 className="text-4xl font-bold text-center my-16">Hello Mamma</h1>
      </div>
    ),
  },
  {
    path: "/admin",
    element: <AdminLayouts />,
    children: [
      {
        path: "", // Set the path explicitly for the default child route
        element: <ViewVolenteers />,
      },
      {
        path: "add-volunteer",
        element: <AddVolenteers />,
      },
    ],
  },
]);
export default router;
