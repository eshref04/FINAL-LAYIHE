
import AdminRoot from "../pages/admin/AdminRoot";
import About from "../pages/site/About/About";

import Blog from "../pages/site/Blog/Blog";
import Cart from "../pages/site/Cart/Cart";
import CaseStudy from "../pages/site/CaseStudy/CaseStudy";
import Contact from "../pages/site/Contact/Contact";
import Detail from "../pages/site/Detail/Detail";
import Home from "../pages/site/Home/Home";
import Login from "../pages/site/Login/Login";

import Shop from "../pages/site/Shop/Shop";
import SiteRoot from "../pages/site/SiteRoot";
import StudyDetail from "../pages/site/StudyDetail/StudyDetail";
import Wishlist from "../pages/site/Wishlist/Wishlist";
import Attorney from './../pages/site/Attorney/Attorney';
import AdminAttorney from "../pages/admin/AdminAttorney/AdminAttorney"
import AdminBlog from "../pages/admin/AdminBlog/AdminBlog"
import AdminStudy from "../pages/admin/AdminStudy/AdminStudy"
import AddAttorney from "../pages/admin/AddAttorney/AddAttorney"
import AddBlog from './../pages/admin/AddBlog/AddBlog';
import AddStudy from './../pages/admin/AddStudy/AddStudy';
import AdminShop from "../pages/admin/AdminShop/AdminShop";
import AddShop from "../pages/admin/AddShop/AddShop";
import AttorneyDetail from "../pages/site/AttorneyDetail/AttorneyDetail";
import BlogDetail from "../pages/site/BlogDetail/BlogDetail";



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
                path: "/studydetail/:id",
                element: <StudyDetail/>
            },
            {
                path: "/attorneydetail/:id",
                element: <AttorneyDetail/>
            },
            {
                path: "/blogdetail/:id",
                element: <BlogDetail/>
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
            ,
            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot/>,
        children:[
            {
                path: "",
                element: <AdminAttorney/>
            },
            {
                path: "/admin/addattorney",
                element: <AddAttorney/>
            },
            {
                path: "/admin/study",
                element: <AdminStudy/>
            },
            {
                path: "/admin/addstudy",
                element: <AddStudy/>
            },
            {
                path: "/admin/blog",
                element: <AdminBlog/>
            },
            {
                path: "/admin/addblog",
                element: <AddBlog/>
            },
            {
                path: "/admin/book",
                element: <AdminShop/>
            },
            {
                path: "/admin/addbook",
                element: <AddShop/>
            }  
            
        ]
    }
]
 
export default ROUTES