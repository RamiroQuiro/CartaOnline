import React from 'react'
import { NavLink,Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <nav className="flex font-bold text-sm w-full  justify-around items-center">
    <NavLink to={"producto"}>Producto</NavLink>
    <NavLink to={"producto"}>Planes</NavLink>
    <NavLink to={"producto"}>Contacto</NavLink>
  </nav>
  )
}
