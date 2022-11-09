import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/services/:id',
                element: <ServiceDetails />
            },
            {
                path: '/myreviews',
                element: <PrivetRoute><MyReviews /></PrivetRoute>
            },
            {
                path: '/addservice',
                element: <PrivetRoute><AddService /></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    }
])

export default router;