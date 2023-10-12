import react from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Register from './Pages/Register/Register'
import PrivateRoute from './Pages/Private/PrivateRoute'
import ServiceDetail from './Pages/ServiceDetails/ServiceDetail'
import Footer from './Components/Footer'
import Reviews from './Pages/Private/Reviews'
import AboutUs from './Pages/Private/AboutUs'

const MyCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://api.jsonbin.io/v3/b/6527c84954105e766fc14958')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/serviceDetail/:id',
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
                loader: () => fetch('https://api.jsonbin.io/v3/b/6527c84954105e766fc14958')
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path: '/about',
                element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
            }
        ]
    }
])

export default MyCreatedRoute;