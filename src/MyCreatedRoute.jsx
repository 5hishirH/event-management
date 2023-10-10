import react from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Register from './Pages/Register/Register'
import PrivateRoute from './Pages/Private/PrivateRoute'
import Test from './Components/test/Test'
import ServiceDetail from './Pages/ServiceDetails/ServiceDetail'
import Footer from './Components/Footer'

const MyCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('./socialEvents.json')
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
                loader: () => fetch('./socialEvents.json')
            }
        ]
    }
])

export default MyCreatedRoute;