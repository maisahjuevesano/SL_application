import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Departures } from "./components/Departures";
import { NotFound } from "./components/NotFound";
import TravelPlanner from "./components/TravelPlanner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Departures />,
      },
      {
        path: "travelPlanner",
        element: <TravelPlanner />,
      },
    ],
  },
]);
