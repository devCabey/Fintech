import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./layout/HomeLayout";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import News from "./pages/News";
import Impact from "./pages/Impact";
import Institute from "./pages/Institute";
import Investor from "./pages/Investor";
import Career from "./pages/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/impact",
        element: <Impact />,
      },
      {
        path: "/institute",
        element: <Institute />,
      },
      {
        path: "/investor",
        element: <Investor />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
