import App from "@/App";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        //   path: "task",
        index: true,
        element: <Task />,
      },
      {
        path: "task",
        element: <Task />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
]);

export default router;
