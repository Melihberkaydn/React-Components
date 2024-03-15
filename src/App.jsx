import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home/Home.jsx";
import ButtonsPage from "./pages/Buttons";
import EditableField from "./pages/EditableFields/EditableFields";
import Tictactoe from "./pages/TicTacToe/GameHome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/buttons",
    element: <ButtonsPage />,
  },
  {
    path: "/editable-fields",
    element: <EditableField />,
  },
  {
    path: "/tictactoe",
    element: <Tictactoe />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
