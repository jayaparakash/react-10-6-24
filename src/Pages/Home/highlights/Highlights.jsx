import { Card } from "../../../components/card/Card"
import { ProductsData } from "../../../utils/data"

export const Highlights = ()=>{
    return(
        <>
          <div className="row justify-content-center">
              <div className="col-4"></div>
                     {
            ProductsData.map(item=>
                <Card 
                    id={item.id}
                    title={item.title}
                    img={item.image}
                    price={item.price}
                    desc={item.description}
                />
            )
        }
          </div>
     
       
 
        </>
    )
}
