import { createBrowserRouter } from "react-router-dom";
import MainCompo from "../MainCompo";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainCompo />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);

export default router;