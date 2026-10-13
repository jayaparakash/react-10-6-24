
import { Carousel } from "../../components/Carousel/Carousel"
import { Highlights } from "./highlights/Highlights"
import Review from "./review/Review"



export const Home = () => {

    return (
        <>
            <div className="container">

                     {/* carousel */}
                          <Carousel />
                     {/* carousel */}

                {/* highlights */}

                <h2 className="bg-warning  text-center my-5">Highlights</h2>

                <Highlights />
                {/* highlights */}

                {/* Review */}
                <h2 className="bg-danger ">REVIEWS</h2>
                    {/* <Review /> */}
                        <div className="row">
                           <div className="col-4">
                            <Review />
                           </div>
                           <div className="col-4">
                            <Review />
                           </div>
                           <div className="col-4">
                            <Review />
                           </div>
                        </div>
                  {/* Review */}
            </div>
        </>
    )
}


{/* 


                props
                    props which is known properties (props) which is mechanism of sharing / traffering the data parent component to child component
                    props are immutable
                    one-waydata-binding
                        
                    props drilling 
                useContext

                redux







        
        
        */}

{/* 
        REAL DOM

        virtual DOm
        which is lightweight/copy of realDom 

        vitrual Dom

        oldvirtualDom

        newVirtualDom

        diffing algorithem
        reconciliation
    
    */}

