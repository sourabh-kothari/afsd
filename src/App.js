import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginScreen from "./components/LoginScreen";
import FindRecipe from "./components/FindRecipe";
import Foundation from "./components/Foundation";



export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Foundation />,
      children: [
        {
          path: "/findrecipe",
          element: <FindRecipe />,
        },
        {
          path: "/loginpage",
          element: <LoginScreen />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
}