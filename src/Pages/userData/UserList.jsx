import axios from "axios"
import { useCallback, useEffect, useMemo, useState } from "react"

export const UserList = ()=>{

    let [user,setUser] = useState([])
    let [search,setSearch] = useState('') 

    useEffect(()=>{
        async function dataApi() {
            let {data} =  await axios.get('https://dummyjson.com/users')
            console.log(data.users);
            setUser(data.users)
        }
        dataApi()
    },[])

let fillData = useMemo(()=>{
    return user.filter(person => person.firstName.toLowerCase().includes(search))
},[user,search])


let handle = useCallback((e)=>{
    setSearch(e.target.value)
},[])

// edit

let [edit,setEdit] = useState({
    name:'',
    phone:'',
})

    let EditData = useCallback((e)=>{
        setEdit(
      {
        name:e.firstName,
        phone:e.phone
      }
        )
    })



//delete
let Delete = useCallback(async(Uid)=>{
    await axios.delete(`https://dummyjson.com/user/${Uid}`)
    return setUser(prev => prev.filter(user=> user.id !== Uid))
}) 


    return(
        <>

        <center>
            <h1>UserList</h1>
        </center>

        <div className="container">

            <div className="row">
                <div className="col-5">
                    <input type="text" className="form-control" onChange={handle}/>
                </div>
            </div>

            <div className="row my-5">

            <table className="table border">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Mobile.no</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                {
                    fillData.map(person=>
                        <tr>
                            <td>{person.id}</td>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.email}</td>
                            <td>{person.phone}</td>
                            <td>
<button class="btn btn-warning"

type="button"
 data-bs-toggle="offcanvas" 
 data-bs-target="#offcanvasScrolling"
  aria-controls="offcanvasScrolling"
  onClick={()=>EditData(person)}
  >Edit</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

    <div className="col-5">
        <input type="text" className="form-control" value={edit.name}/>
        </div>
    <div className="col-5">
        <input type="text" className="form-control" value={edit.phone}/>
        </div>

  </div>
</div>




                            </td>
                            <td><button className="btn btn-danger" onClick={()=>Delete(person.id)}>Delete</button></td>
                        </tr>
                    )
                }

                </tbody>
            </table>



                    {/* 
                        performance optimuization hooks
                            usememo and useCallBack
                          which helps to aviod the unnessary re-renders instead re-renders ,
                           it rembers the calculation function defition when ever component gets updated untill unless the dependency changes 


                           usememo 
                                it rememebers the final calcution result , and it stops the recalculation when ever component get updated
                                untill unless dependency changes 

                            useCallBack
                                it rememebers the function defition and it stops the refunction creations  when ever component get updated
                                untill unless dependency changes 

                    */}


                {/* useMemo(()=>{

                },[]) */}



            </div>



        </div>

        
        </>
    )
}