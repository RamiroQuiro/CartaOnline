import { useState } from "react";
import "./login.css";

export default function Login() {

const [user,setUser]=useState(null)
const [active,setActive]=useState(false)



// const active=false
const activar=(e)=>{
  e.preventDefault()
 setActive(!active)
console.log(active)

}

const handleChange =(e)=>{
  e.preventDefault()
  setUser({
    ...user,
    [e.target.name]:e.target.value
  })
}


  return (
    <div className="w-full relative containerLogin h-screen  bg-red-200 flex items-center justify-center  bg-gray-200">
      <div className="shape"></div>
      <div className="shape"></div>
        <div className="userSignIn  relative shadow-lg border-2 border-gray-100 rounded-lg">
          <div className="userBox  absolute top-0 left-0 w-full h-full flex justify-center items-center ">
            <div className="imgBox relative w-1/2 h-full duration-500">
              <img
                // src="https://picsum.photos/200/300?random=1"
                src="https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg"
                alt=""
                className=" absolute object-cover w-full h-full duration-300"
              />
            </div>
            <div className="formBox  relative w-1/2 h-full flex justify-center items-center px-8 py-8 duration-500 " >
              <form action="" onSubmit={console.log("hola")}>
                <h2 className="font-bold text-2xl uppercase text-center tracking-wider w-full mb-8 text-gray-600">Sign In</h2>
                <input
                  type="text"
                  name="userName"
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
              <form action="" onSubmit={()=>console.log("hola")}>
                <h2 className="font-bold text-2xl uppercase text-center tracking-wider w-full mb-8 text-gray-600">Sign Up</h2>
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
                src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg"
                alt=""
                className="bg-white absolute object-cover h-full duration-300"
              />
            </div>
          </div>
        </div> 
     
    </div>
  );
}
