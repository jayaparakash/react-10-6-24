import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { ADD, REMOVE } from "../cart/CartSlice";
export const SingleProduct = ()=>{

    let dispatch = useDispatch()

    let {id} =useParams()
   
    let [singleProduct,setSingleProduct] = useState({})
    useEffect(()=>{
        async function dataApi() {
            let {data} = await axios.get(`https://dummyjson.com/products/${id}`)
            // console.log(data);
            setSingleProduct(data)
        }
dataApi()
    },[])
    return(
        <>
        <div className="container my-5">
            <div className="row">

                <div className="col-6">
                <img src={singleProduct.thumbnail} height={'200px'} class="card-img-top" alt="..." />

                </div>
                <div className="col-6">
                  <div class="card-body">
                    <h5 class="card-title">{singleProduct.title}</h5>
                    <p class="card-text">{singleProduct.description}</p>
                    <mark>{singleProduct.price}</mark>
                        <br />
                    <button className="btn btn-warning m-4" onClick={()=>dispatch(ADD({...singleProduct,quantity:1}))}>Add Product</button>
                    <button className="btn btn-danger" onClick={()=>dispatch(REMOVE(singleProduct.id))}>Remove</button>
                  </div>
</div>
            </div>
        </div>
          
        </>
    )
}