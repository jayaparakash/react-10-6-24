import { useState } from "react"

export const useCount = ()=>{

    let [count,setCount] = useState(0)

   let INC = ()=>setCount(count+1)
   let DEC = ()=>setCount(count-1)

    return [count, INC,DEC]
}