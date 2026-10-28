import { useReducer } from "react"

export const Reducer = ()=>{

    // let [count,disptach] = useReducer(reducerFun , 0)

    //     function reducerFun(state,action) {
    //         console.log(action);
    //         switch(action.value){
    //             case 'INC':
    //                 return state + action.payload
    //             case 'DEC':
    //                 return state - action.payload
    //             case 'RESET':
    //                 return 0
    //         }
    //     }


    let [setting,disptach] = useReducer(reducerFun,{
        sms:true,
        notification:false,
        push:true,
    })


    function reducerFun(state,action) {
            return {...state,[action]:!state[action]}
    }


    return(
        <>
            <center>

            <div className="container bg-dark m-5 p-5">

                <label htmlFor="" className="form-check-label text-light">sms :</label> 
                <input type="checkbox" className="form-check-input" checked={setting.sms} onClick={()=>disptach('sms')}/>
                <br /><br />
                <label htmlFor="" className="form-label text-light"  >notification :</label>
                <input type="checkbox" className="form-check-input" checked={setting.notification} onClick={()=>disptach('notification')}/>
                <br /><br />
                <label htmlFor="" className="form-label text-light" >push :</label>
                <input type="checkbox" className="form-check-input" checked={setting.push} onClick={()=>disptach('push')} />
                <br /><br />

            <h3 className="text-light">sms :     {setting.sms ? 'NO' : 'YES'}    </h3>
            <h3 className="text-light">notification:{setting.notification ? 'NO' : 'YES'} </h3>
            <h3 className="text-light">push:     {setting.push ? 'NO' : 'YES'}    </h3>


            </div>


                {/* <h1>Count : {count}</h1>
                <button className="btn btn-primary" onClick={()=>disptach({value:'INC'  ,payload:10} )} >INC  </button>
                <button className="btn btn-primary" onClick={()=>disptach({value:'DEC'  ,payload:5} )} >DEC  </button>
                <button className="btn btn-primary" onClick={()=>disptach({value:'RESET',payload:0} )} >RESET</button> */}
            </center>


        </>
    )
}


 {/* 
            useReducer which is state management hooks, it manages the state in a predicatable way
            using of state it relates to substates
            the state can only accessable locally with in the component 

            syntax
            let [state , disptach] = useReducer(reducerFunciton,stateValue)
                    state 
                        substate  
                        
                        
                        reducerFunciton(state,action){
                        
                        }
        */}
        