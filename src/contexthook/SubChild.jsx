import { useContext } from "react"
import { contextData } from "./Parent"
export const SubChild = ()=>{
    let data = useContext(contextData)
    return(
        <>
        <h2>THis is SubCHild Component <mark>{data}</mark> </h2>
        </>
    )
}