import react from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import ErrorPage from './Pages/ErrorPage/ErrorPage'

const MyCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default MyCreatedRoute;