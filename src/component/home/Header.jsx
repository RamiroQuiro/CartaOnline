import { NavLink,Link } from "react-router-dom";

import loginImg from "../../img/empleado.png";
import '../../index.css';
import NavMenu from "./NavMenu";
import TituloandBackground from "./TituloandBackground";
import FeatureHome from "./FeatureHome";

export default function Header(){
    return(
       <>
        <div className="w-full mx-auto h-28  flex justify-between items-center">
          <div className="w-1/5 text-3xl font-bold-thin bg-gradient-to-tr  from-amber-300/20 to-orange-300/20">
            Carta-Online
          </div>
            <NavMenu/>
          <Link
            to={"login"}
            className="w-1/5 bg-gradient-to-tr from-orange-300/30 overflow-visible to-orange-300 flex justify-start gap-5 items-center mx-auto rounded-l-2xl pr-2 h-8"
          >
            <img alt="diseñoFacil" width="48px" height="48px" src={loginImg} />
            <div className="text-gray-50 font-bold">Ingresar</div>
          </Link>
        </div>
        <TituloandBackground/>
        <FeatureHome/>
      </>
    )
}