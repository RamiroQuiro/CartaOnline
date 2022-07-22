import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../contexto/AuthContext";
import toast, { Toaster } from 'react-hot-toast'

import "./login.css";

export default function Login() {

  const navigate=useNavigate()
  const {register,login}=Auth()
const [user,setUser]=useState(null)
const [active,setActive]=useState(false)



// const active=false
const activar=(e)=>{
  e.preventDefault()
 setActive(!active)

}

const handleChange =(e)=>{
  e.preventDefault()
  setUser({
    ...user,
    [e.target.name]:e.target.value
  })
}

const handleRegister =async(e)=>{
  e.preventDefault()
  register(user.email,user.password,user.userName,user.businessName)
 
}

const handleLogin = async(e)=>{
  e.preventDefault()
  login(user.email,user.password).then((result) => {
    // setUser(result.user)
    const user = result.user;
    toast.success('Sesion iniciada correctamente',{
      style: {
        marginTop:'10px',
      }
    })
    navigate('/account')
  })
  .catch((error) => {
    const errorCode = error.code
     switch (errorCode) {
        case 'auth/user-not-found':
          toast.error('El email no es valido',{
            style: {
              background: '#ffaa32',
              padding:'15px'
            },
          });
          break;
        case 'auth/user-disabled':
          toast.error('El usuario esta deshabilitado');
          break
     }
    // toast(errorCode)  
  });
}


  return (
    <div className="w-full relative containerLogin h-screen  bg-red-200 flex items-center justify-center  bg-gray-200">
       <Toaster/>
      <div className="shape"></div>
      <div className="shape"></div>
        <div className="userSignIn  relative shadow-lg border-2 border-gray-100 rounded-lg">
          <div className="userBox  absolute top-0 left-0 w-full h-full flex justify-center items-center ">
            <div className="imgBox relative w-1/2 h-full duration-500">
              <img
                src="https://source.unsplash.com/random/800x800/?img=1"
                // src="https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg"
                alt=""
                className=" absolute object-cover w-full h-full duration-300"
              />
            </div>
            <div className="formBox  relative w-1/2 h-full flex justify-center items-center px-8 py-8 duration-500 " >
              <form action="" onSubmit={handleLogin}>
                <h2 className="font-bold text-2xl uppercase text-center tracking-wider w-full mb-8 text-gray-600">Sign In</h2>
       
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="UserName"
                  className="w-full px-3 py-2 rounded border-none outline-none tracking-wide text-gray-800 bg-gray-100 my-2 font-medium"
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="**********"
                  className="w-full px-3 py-2 rounded border-none outline-none tracking-wide text-gray-800 bg-gray-100 my-2 font-medium"
                />
                <input type="submit" name="submit"  value="login" id="" 
                className="w-1/3  px-3 py-2 rounded border-none outline-none tracking-wide uppercase text-gray-100 bg-blue-400 my-2 mx-auto font-bold cursor-pointer duration-500"/>
                <p className="relative mt-5 text-xs uppercase tracking-wide text-gray-800">
                  No tienes una cuenta? <button  onClick={activar } className="uppercase cursor-pointer text-blue-600 font-bold">Registrate</button>
                </p>
              </form>
            </div>
          </div>
          <div className="userBoxUp   duration-500 top-0 left-0 w-full h-full flex justify-center items-center ">
        
            <div className={active? 'active formBoxUp  relative w-1/2 h-full flex justify-center items-center bg-white px-8 py-8 duration-500  ': 'formBoxUp opacity-0  relative w-1/2 h-full flex justify-center items-center bg-white px-8 py-8 duration-500 ' }>
              <form action="" onSubmit={handleRegister}>
                <h2 className="font-bold text-2xl uppercase text-center tracking-wider w-full mb-8 text-gray-600">Sign Up</h2>
                <input
                  type="text"
                  name="businessName"
                  onChange={handleChange}
                  placeholder="businessName"
                  className="w-full px-3 py-2 rounded border-none outline-none tracking-wide text-gray-800 bg-gray-100 my-2 font-medium"
                />
                <input
                  type="text"
                  name="userName"
                  onChange={handleChange}
                  id=""
                  placeholder="UserName"
                  className="w-full px-3 py-2 rounded border-none outline-none tracking-wide text-gray-800 bg-gray-100 my-2 font-medium"
                />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  id=""
                  placeholder="email@email.com"
                  className="w-full px-3 py-2 rounded border-none outline-none tracking-wide text-gray-800 bg-gray-100 my-2 font-medium"
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  id=""
                  placeholder="create password"
                  className="w-full px-3 py-2 rounded border-none outline-none tracking-wide text-gray-800 bg-gray-100 my-2 font-medium"
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  id=""
                  placeholder="confirm password"
                  className="w-full px-3 py-2 rounded border-none outline-none tracking-wide text-gray-800 bg-gray-100 my-2 font-medium"
                />
                <input type="submit" name="submit" value="SignUp" id="" 
                className="w-1/3  px-3 py-2 right-0 rounded border-none outline-none tracking-wide uppercase text-gray-100 bg-blue-400 my-2 mx-auto font-bold cursor-pointer duration-500"/>
                <p className="relative mt-5 text-right text-xs uppercase tracking-wide text-gray-800">
                 Ya tienes una cuenta? <button  onClick={activar }  className=" uppercase text-blue-600 font-bold">Entrar</button>
                </p>
              </form>
            </div>
            <div className={active?"active imgBoxUp imgBox duration-500  relative w-1/2 h-full ": " imgBoxUp  duration-500 relative w-1/2 h-full "}>
              <img
                src="https://source.unsplash.com/random/800x800/?img=2"
                alt=""
                className="bg-white absolute object-cover h-full duration-300"
              />
            </div>
          </div>
        </div> 
     
    </div>
  );
}
