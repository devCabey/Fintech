import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./layout/HomeLayout";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import Bank from "./pages/Bank";
import Vault from "./pages/Vault";

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
        path: "user",
        element: <Dashboard />,
      },
      {
        path: "bank",
        element: <Bank />,
      },
      {
        path: "vault",
        element: <Vault />,
      },
      {
        path: "vault",
        element: <Vault />,
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
