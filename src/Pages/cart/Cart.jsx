import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'

import { AnimatePresence , motion } from 'framer-motion'
import { DEC, INC } from '../../Features/cart/CartSlice'
// import img1 from '../../assets/images.jpg'

// // require 

// let image1 = new URL('../../assets/images.jpg',import.meta.url).href

export const Cart = ()=>{

    
        let cartData = useSelector(state=>state.cart)

        let dispatch = useDispatch()

          let cardvarient = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }


    return(
        <>

         <div className="row gy-5 my-5 justify-content-evenly">
          <AnimatePresence>
            {
              cartData.map((pro, i) =>
                <motion.div
                  class="card"
                  style={{ width: '20rem', height: '300px' }}
                  key={pro.id}
                  variants={cardvarient}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 2, delay: i * 0.5 }}
                >
                  
                  <img src={pro.thumbnail} height={'100px'} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{pro.title}</h5>

                    <mark>quantity:{pro.quantity}</mark>
                    <br /><br />
                    <button className="btn btn-primary" onClick={()=>dispatch(INC(pro.id))}>INC</button>
                    <button className="btn btn-primary" onClick={()=>dispatch(DEC(pro.id))}>DEC</button>
                  </div>
                
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>
             </>
    )
}