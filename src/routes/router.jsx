import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";
import Book from "../components/Book";
import Login from "../components/Login";
import Signup from "../components/Signup";
import RoomBook from "../components/RoomBook";
import PrivetRouter from "../components/PrivetRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/book',
                element: <Book></Book>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/book/room/:id',
                element: <PrivetRouter><RoomBook></RoomBook></PrivetRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/hotel-data/${params.id}`)
            }
        ]
    }
])

export default router;