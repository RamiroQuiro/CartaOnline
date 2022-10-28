import React from 'react'
import { FaFacebook,FaInstagram,FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function PerfilRedesSociales({habilitarEdicion,perfilUser,setPerfilUser,handleChange}) {


  return (
<div>
            <h2 className="font-bold text-center mb-2 text-gray-700 text-xl"> Redes Sociales</h2>
                <div className="text  text-gray-700  gap-2 justify-araound items-center flex-col rounded ">
                  <div className="flex flex-wrap font-medium items-center  rounded mb-2 bg-gray-50 :bg-gray-700 :text-gray-400">
                  <p className="inline-flex bg-gradient-to-r from-red-500 to-yellow-600 gap-2  py-1 pl-2  text-white "><FaInstagram/>www.instagram.com/</p>
                    {!habilitarEdicion ? (
                      <h1 className="text-lg outline-none text-paleta-100 w-1/5 ">
                        {" "}
                        {perfilUser?.instagram || "---"}
                      </h1>
                    ) : (
                      <input
                        className=" border focus:border-2 duration-300 border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-1 outline-none "
                        onChange={handleChange}
                        name="instagram"
                        value={perfilUser?.instagram}
                        type="text"
                      />
                    )}<Link 
                    className="right-0 absolute hover:animate-pulse cursor-pointer mr-6 md:mr-10"
                    to={"//www.instagram.com/"+perfilUser?.instagram}
                    target="_blank"
                    ><FaExternalLinkAlt className='fill-paleta-600 p-0.5'/></Link>
                  </div>{" "}
                  <div className="flex font-medium rounded items-center flex-wrap  bg-gray-50 :bg-gray-700 :text-gray-400">
                    <p className="inline-flex bg-paleta-facebook gap-2   py-1 pl-2  text-white "><FaFacebook/> www.facebook.com/</p>
                    {!habilitarEdicion ? (
                      <p className="text-lg  outline-none text-paleta-100  ">
                        {perfilUser?.facebook || "---"}
                       </p>
                    ) : (
                      <input
                        className=" border focus:border-2 duration-300 border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-1 outline-none "
                        onChange={handleChange}
                        name="facebook"
                        value={perfilUser?.facebook}
                        type="text"
                      />
                    )} <Link 
                    className="right-0 absolute hover:animate-pulse cursor-pointer mr-6 md:mr-10"
                    to={"//www.facebook.com/"+perfilUser?.facebook}
                    target="_blank"
                    ><FaExternalLinkAlt className='fill-paleta-600 p-0.5'/></Link>
                  </div>
                </div>

            </div>
  )
}
