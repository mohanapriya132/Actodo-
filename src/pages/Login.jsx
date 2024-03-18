import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props){
  const navigate=useNavigate()
  const [eusername,setEusername]=useState()
  const [epassword,setEpassword]=useState()
  const [ruser,setRuser]=useState(true)
  const users=props.users
  
  
  function handleUchange(event){
    setEusername(event.target.value)
  }
  function handlePchange(event){
       setEpassword(event.target.value)
  }
  function checkUser(){
    var userfound = false
    users.forEach(function(item){
      if(item.username === eusername && item.password === epassword)
      {
        console.log("Login sucessful")
        userfound = true
        navigate("/landing",{state:{user:eusername}})
      }
         })
         if(userfound ===false)
         {
          console.log("Login Failed")
          setRuser(false)
         }
       
  }
    return(
        <div className="bg-black p-16">
           <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {ruser?<p>I help you manage your activities after you login:)</p>:<p className="text-red-600">Please Sign Up Before You Login</p>}
            <div className="flex flex-col gap-2 my-2">
              <input type="text"
               className="w-52 border-black p-1 bg-transparent border rounded-md" 
               placeholder="username" onChange={handleUchange}></input>
              <input type="text" 
              className="w-52 border-black p-1 bg-transparent border rounded-md" 
              placeholder="password" onChange={handlePchange}></input>
              
              <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>
                Login
              </button>
              <p>Don't have an account?<Link to={"/signup"} className="underline">Signup</Link></p>
            </div>
           </div>
        </div>
    )
}
export default Login