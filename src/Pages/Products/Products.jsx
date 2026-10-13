// import { ProductsData } from "../../Features/products/ProductsData"

import React, { Suspense } from "react"
import Loader from "../../components/Loader/Loader"

let ProductsData = React.lazy(()=> import('../../Features/products/ProductsData'))

export const Products = ()=>{
    return(
        <>
        <Suspense fallback={<center><Loader /></center>}>
            <ProductsData />
        </Suspense>


        </>
    )
}

// lazyLoading 
            // instead of loading all the components at one time  , using lazyloading it load when ever it requireds
                // suspense  
                // when u r ui code gets delays it provide a fallback to load
                // named exports will not works

            // framer-motion 
    //framer-motion

// useParams (dynamic routing)
    // useParams is used to access dynamic parameter formthe url

//useNavigate

