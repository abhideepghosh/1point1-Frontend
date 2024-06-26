import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import AppLayout from "./AppLayout";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <h1>Page Not Found</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
