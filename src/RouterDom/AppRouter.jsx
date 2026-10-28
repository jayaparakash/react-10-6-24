import {  Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home/Home"
import { Products } from "../Pages/Products/Products"
import { Blog } from "../Pages/blog/Blog"
import { Cart } from "../Pages/cart/Cart"
import { Form } from "../Pages/form/Form"
import { SingleProduct } from "../Features/products/SiniglePageProducts"
import { UserList } from "../Pages/userData/UserList"
export const AppRouter = ()=>{
    return(
        <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<Products />} />
         <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route  path="/userform" element={<Form />} />
                <Route  path="/userlist" element={<UserList />} />

      </Routes>

        </>
    )
}


 {/* 
                RouterDom which is routing library which helps you to route page to another page without loading the full page
                external package
                npm i react-router-dom

                BrowserRouter   
                        which allows to  enables client side routing 
                Routes
                        which is container that holds individual route 
                Route
                        which allow to switch page to page using the path 

                    attributes path element

                Link 
                    attribute
                    to='' , {}
                        < a > => replacement of anchor tags

                    RouterHooks
                        useLocation()
                        UseParams
                        useNavigation
                        



            */}