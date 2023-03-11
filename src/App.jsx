import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./layout/HomeLayout";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Signup from "./pages/Signup";
import DashboardLayout from "./layout/DashboardLayout";
import Bank from "./pages/Bank";
import Vault from "./pages/Vault";
import Transaction from "./pages/Transaction";
import Setting from "./pages/Setting";
import Support from "./pages/Support";

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
    ],
  },
  {
    path: "/user",
    element: <DashboardLayout />,
    children: [
      {
        path: "bank",
        element: <Bank />,
      },
      {
        path: "vault",
        element: <Vault />,
      },
      {
        path: "transaction",
        element: <Transaction />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },
  {
    path: "/join-us",
    element: <Signup />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
