import { createContext } from "react"
import { Child } from "./ChildA"

export let contextData = createContext()

export const Parent = ()=>{
    let data = "This is DynamicData"
    return(
        <>
           <center>

        <contextData.Provider value={data}>

                 <h2>THis is Parent Component</h2>
                 <Child />
                 
                 </contextData.Provider>
           </center>

           


           {/* 
                createContext
                provider 
                    which provides data to the component
                useContext 
                    which helps u to access data directly

           
           */}
          

        </>
    )
}

  {/*
             Prop Drilling 

             useContext
                which complete replacement of prop drilling context hook helps to share data directly to the components 
            
            */}