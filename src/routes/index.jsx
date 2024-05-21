import {createBrowserRouter,} from "react-router-dom";
import Home from "~/pages/home";
import Discover from "~/pages/discover";
import Articles from "~/pages/articles";
import LectureRequest from "~/pages/lecture-request";
import Category from "~/pages/category";
import WebLayout from "~/layouts/web";
const routes = createBrowserRouter([
    {
        path:'/',
        element:<WebLayout/>,
        children:[
            {path:'/',index:true,element:<Home/>},
            {path:'/kesfet',element:<Discover/>},
            {path:'/makaleler',element:<Articles/>},
            {path:'/lecture-request',element:<LectureRequest/>},
            {path:'/category/:categorySlug',element:<Category/>},
        ]
    }
])

export default routes;