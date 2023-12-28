import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Departures } from "./components/Departures";
import { NotFound } from "./components/NotFound";
import { SearchTravel } from "./components/SearchTravel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // detta är min startsida
        element: <Departures />,
      },
      {
        path: "searchTravel",
        element: <SearchTravel />,
      },
    ],
  },
]);
