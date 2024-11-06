import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import FoodItemDetails from "../Pages/FoodItemDetails/FoodItemDetails";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      // Add your routes here
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allFoodItems/:id",
        element: <FoodItemDetails></FoodItemDetails>,
      },

      // Need to be in protected route withh Private route
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);
