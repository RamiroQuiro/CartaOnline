import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
