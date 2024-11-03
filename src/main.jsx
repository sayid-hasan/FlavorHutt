import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@material-tailwind/react";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        {" "}
        <ThemeProvider>
          {" "}
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>
);
