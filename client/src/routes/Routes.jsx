
import About from "../pages/site/About/About";
import Attorney from "../pages/site/Attorney/Attorney";
import Blog from "../pages/site/Blog/Blog";
import CaseStudy from "../pages/site/CaseStudy/CaseStudy";
import Contact from "../pages/site/Contact/Contact";
import Detail from "../pages/site/Detail/Detail";
import Home from "../pages/site/Home/Home";
import Login from "../pages/site/Login/Login";
import Register from "../pages/site/Register/Register";
import Shop from "../pages/site/Shop/Shop";
import SiteRoot from "../pages/site/SiteRoot";
import Wishlist from "../pages/site/Wishlist/Wishlist";


const ROUTES = [
    {
        path: "/",
        element: <SiteRoot/>,
        children:[
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/detail/:id",
                element: <Detail/>
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/wishlist",
                element: <Wishlist/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/casestudy",
                element: <CaseStudy/>
            },
            {
                path: "/attorney",
                element: <Attorney/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    }
]
 
export default ROUTES