import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import PrivateRoute from './routes/PrivateRoutes';
import "../src/App.css";
import Main from "./Views/main";
import ErrorPage from "./Views/ErrorPage";
import Obras from "./Views/Pages/Obras";
import Slime from "./Views/Pages/Slime";
import LeitorPDF from "./Views/Pages/leitorPDF";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/Obras",
      element: <Obras />,
    },
    {
      path: "/Slime",
      element: <Slime />,
    },
    {
      path: "/LeitorPDF",
      element: <LeitorPDF />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
