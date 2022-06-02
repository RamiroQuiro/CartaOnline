import React from 'react'
import { FaFacebook,FaInstagram,FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function PerfilRedesSociales({habilitarEdicion,perfilUser,handleChange,handleChangeData,handleEditItems}) {
  return (
<div>
            <h2 className="font-bold text-center mb-2 text-gray-700 text-2xl"> Redes Sociales</h2>
                <div className="text  text-gray-700  gap-2 justify-araound items-center flex-col rounded ">
                  <div className="flex font-medium items-center  rounded mb-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <p className="inline-flex bg-gradient-to-r from-red-500 to-yellow-600 gap-2  py-2 pl-2  text-white "><FaInstagram/>www.instagram.com/</p>
                    {!habilitarEdicion ? (
                      <h1 className="text-lg outline-none text-white w-1/5 ">
                        {" "}
                        {perfilUser?.Instagram || "---"}
                      </h1>
                    ) : (
                      <input
                        className=" border focus:border-2 duration-300 border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-1 outline-none "
                        onChange={handleChange}
                        name="Instagram"
                        value={perfilUser?.Instagram}
                        type="text"
                      />
                    )}<Link 
                    className="right-0 absolute hover:animate-pulse cursor-pointer mr-6"
                    to={"//www.instagram.com/"+perfilUser?.Instagram}
                    target="_blank"
                    ><FaExternalLinkAlt/></Link>
                  </div>{" "}
                  <div className="flex font-medium rounded items-center  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <p className="inline-flex bg-paleta-facebook gap-2   py-2 pl-2  text-white "><FaFacebook/> www.facebook.com/</p>
                    {!habilitarEdicion ? (
                      <p className="text-lg  outline-none text-white  ">
                        {perfilUser?.Facebook || "---"}
                       </p>
                    ) : (
                      <input
                        className=" border focus:border-2 duration-300 border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-1 outline-none "
                        onChange={handleChange}
                        name="Facebook"
                        value={perfilUser?.Facebook}
                        type="text"
                      />
                    )} <Link 
                    className="right-0 absolute hover:animate-pulse cursor-pointer mr-6"
                    to={"//www.facebook.com/"+perfilUser?.Facebook}
                    target="_blank"
                    ><FaExternalLinkAlt/></Link>
                  </div>
                </div>

            </div>
  )
}
