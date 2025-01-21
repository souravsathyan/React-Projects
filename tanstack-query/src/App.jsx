import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import FetchOld from "./pages/FetchOld";
import MainLayout from "./components/layout/MainLayout";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FetchRQ from "./pages/FetchRQ";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "trad",
        element: <FetchOld />,
      },
      {
        path: "rq",
        element: <FetchRQ />,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
