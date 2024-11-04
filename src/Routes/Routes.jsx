import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import FoodItemDetails from "../Pages/FoodItemDetails/FoodItemDetails";

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
    ],
  },
]);
