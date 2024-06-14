import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

function Body() {

  return (
    <div className="overflow-hidden">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default Body;
