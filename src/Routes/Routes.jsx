import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import FoodItemDetails from "../Pages/FoodItemDetails/FoodItemDetails";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import AllFoodPage from "../Pages/AllFoodPage/AllFoodPage/AllFoodPage";
import PurchasePage from "../Pages/PurchasePage/PurchasePage";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddItemPage from "../Pages/AddItemPage/AddItemPage";
import MyAddedFoods from "../Pages/MyAddedFoods/MyAddedFoods";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/allFoods",
        element: <AllFoodPage></AllFoodPage>,
      },
      {
        path: "/gallery",
        element: <GalleryPage></GalleryPage>,
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
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <PurchasePage></PurchasePage>
          </PrivateRoute>
        ),
      },
      // PROFILE PAGE
      {
        path: "/addItem",
        element: (
          <PrivateRoute>
            <AddItemPage></AddItemPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/myAddedFoods",
        element: (
          <PrivateRoute>
            <MyAddedFoods></MyAddedFoods>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
