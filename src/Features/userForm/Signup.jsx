import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  let navigate = useNavigate()  
    let [form , setForm] = useState({
      name:'',
      email:'',
      password:'',
      mobile:'',
    })
    function handleData(e){
      let {name,value} = e.target
      setForm(prev=>{
        console.log({...prev,[name]:value});
      return  ({...prev,[name]:value})
      })
    }z

    let [err,setErr] = useState('')

    let pattren = {
      namePattren:/^[A-Z][a-z]{3,}$/,
      passPattren:/^[A-Z][a-z]{3,}$/,
      emailPattren:/^[A-Z][a-z]{3,}$/,
      mobilePattren:/^[A-Z][a-z]{3,}$/
    }




  function RegisterForm(e) {
    console.log(e.preventDefault());
    
    e.preventDefault()
    setErr('')

    let {name,email,password,mobile} = form 

    let {namePattren,passPattren,emailPattren,mobilePattren} = pattren

    if (!name || !password || !email || !mobile) {
        return setErr('Kindly the all Inputfeilds')
    }

    if(!namePattren.test(name)){
      return setErr(`Username ${name} is incorrect`)
    }

    if(!passPattren.test(password)){
      return setErr(`Password ${password} is incorrect`)
    }

    if(!emailPattren.test(email)){
      return setErr(`Email ${email} is invalid`)
    }

    if (!mobilePattren.test(mobile)) {
      return setErr(`Mobile number ${mobile} is invalid`)
    }
    
    setTimeout(()=>{
      navigate('/')
    },1000)
  }




  return (

    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
      <form className="mx-1 mx-md-4">
        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
          <div data-mdb-input-init className="form-outline flex-fill mb-0">
            <label className="form-label" for="form3Example1c">Your Name</label>
            <input type="text" id="form3Example1c" className="form-control" name='name' value={form.name} onChange={handleData} />
            <p className="text-danger"></p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
          <div data-mdb-input-init className="form-outline flex-fill mb-0">
            <label className="form-label" for="form3Example3c">Your Email</label>
            <input type="email" id="form3Example3c" className="form-control" name='email' value={form.email} onChange={handleData}  />
            <p className="text-danger">{}</p>

          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
          <div data-mdb-input-init className="form-outline flex-fill mb-0">
            <label className="form-label" for="form3Example4c" >Password</label>
            <input type="password" id="form3Example4c" className="form-control"  name='password' value={form.password} onChange={handleData} />
            <p className="text-danger">{}</p>

          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
          <div data-mdb-input-init className="form-outline flex-fill mb-0">
            <label className="form-label" for="form3Example4cd">Mobile</label>
            <input type="text" id="form3Example4cd" className="form-control" name='mobile' value={form.mobile} onChange={handleData}  />
            <p className="text-danger">{}</p>

          </div>
        </div>

        <div className="form-check d-flex justify-content-center mb-5">
          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
          <label className="form-check-label" for="form2Example3">
            I agree all statements in <a href="#!">Terms of service</a>
          </label>
        </div>

        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button onClick={(e)=>RegisterForm(e)}  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
        </div>

        <div className="alert alert-danger">
          {err}
        </div>

      </form>

    
    </div>



  )
}
