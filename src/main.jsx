import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import Movie from "./pages/Movie.jsx";
import Serie from "./pages/Serie.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout authentication={true}>
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/movies/:id",
        element: (
          <AuthLayout authentication={true}>
            <Movie />
          </AuthLayout>
        ),
      },
      {
        path: "/series/:id",
        element: (
          <AuthLayout authentication={true}>
            <Serie />
          </AuthLayout>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    </Provider>
  </StrictMode>
);
