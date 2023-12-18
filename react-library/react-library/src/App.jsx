import { useState } from "react";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import SignIn from "./components/auth/SignIn.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import ErrorPage from "./pages/error-page.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile.jsx";

export default function App() {
  const [authUser, setAuthUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signin",
      element: <SignIn />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <SignUp />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/profile",
      element: <Profile authUser={authUser} />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <Navbar authUser={authUser} setAuthUser={setAuthUser} />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
