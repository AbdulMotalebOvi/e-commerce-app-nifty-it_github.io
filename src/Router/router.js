import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignIn from "../Components/Authintaction/LoginPage/SignIn";
import Home from "../Components/LandingPage/Home";
import AllProducts from "../Components/LandingPage/Products/AllProducts";
import Details from "../Components/ProductDetails/Details";
import YourCart from "../Components/YourCart/YourCart";
import Register from "../Components/Authintaction/RegisterPage/Register";
import DashBoard from "../DashBoard/pages/home/DashBoard";
import AddProducts from "../DashBoard/Addproducts/AddProducts";
import DataTable from "../DashBoard/DataTable/DataTable";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/Login',
                element: <SignIn />
            },
            {
                path: '/Register',
                element: <Register />
            },
            {
                path: '/AllProducts',
                element: <AllProducts />,

            },
            {
                path: '/Details/:id',
                element: <PrivateRoute><Details /></PrivateRoute>
            },
            {
                path: '/MyCart',
                element: <PrivateRoute><YourCart /></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard /></PrivateRoute>
    },

    {
        path: '/AddProduct',
        element: <AddProducts />
    },
    {
        path: '/addUser',
        element: <DataTable />
    }



])