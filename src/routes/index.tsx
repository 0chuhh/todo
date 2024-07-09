import { MainPage } from "pages/main";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    }
]);
