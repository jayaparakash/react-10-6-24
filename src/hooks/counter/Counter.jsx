import { useCount } from "./useCount"

export const Counter = ()=>{

    let [count,INC,DEC] = useCount()

    return(
        <>
        <center>
            
            <h2>CountVlaue : {count}</h2>
        <button className="btn btn-primary" onClick={INC} >INC</button>
        <button className="btn btn-danger"  onClick={DEC} >DEC</button>
        </center>
        </>
    )
}