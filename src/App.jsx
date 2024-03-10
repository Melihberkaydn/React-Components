import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home";
import ButtonsPage from "./pages/Buttons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/buttons",
    element: <ButtonsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
