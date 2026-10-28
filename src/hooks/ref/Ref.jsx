import { useEffect, useRef, useState } from "react"

export const Ref = ()=>{


    let [count,setCount] = useState(0)
    let refD = useRef()   

    let palyV = ()=>refD.current.play()
    let pausev =()=> refD.current.pause()
    
    

// console.log(refD);

        // useEffect(()=>{
        //     refD.current = count
        // },[count])

    return(
        <>
                <center>

                    {/* <h2>currentValue : {count}</h2> */}
                    <h2>previousValue : {refD.current}</h2>
                    <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Updated</button>
                        <br /><br />
            <div className="col-8">
                <video 
                ref={refD}
                src="https://w3schools.com/html/mov_bbb.mp4" controls>
                </video>
<br />
                    <button className="btn btn-primary" onClick={palyV} >Play</button>
                    <button className="btn btn-primary" onClick={pausev} >pause</button>
            </div>

                    

                {/* <div className="col-5">
                    <input type="text" ref={refD} className="form-control"/>
                </div>
                <div className="col-5">
                    <input type="text" className="form-control"/>
                </div> */}
                </center>
    
            {
            /* UseRef */
            
            // useRef which helps to store a mutable value between the renders when the element triggers , without rerendering 
            // when the value gets updated 
            // useRef as direct access(updated) to the DOM
            // button , input fields 
            
                // useref which contains an object , stores the value 


                // useRef(null ,string, boolean) => {current = value} 

            }


            {/*
             useReducer 
             Redux add to cart 
             curdoperation spread and rest
             callback and memo
             portfolio
             team project 
             major project 

            
            */}



    
    
        </>
    )
}