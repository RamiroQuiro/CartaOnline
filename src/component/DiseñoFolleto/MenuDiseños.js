import React from "react";
import { NavLink } from "react-router-dom";


const ItemsMenu =({text,link})=>{
    return(
        <NavLink 
        to={link}
        style={({isActive})=>isActive? {color: "#D98014"}: {}}
        className={`duration-150 cursor-pointer hover:scale-105 break-words w-full m-auto hover:text-paleta-300`}>{text}</NavLink>
    )
}

export default function MenuDiseños() {




  return (
    <div className="flex justify-around items-center w-full flex-wrap  rounded text-xs px-1 z-40">
      <div className="w-full py-2  flex-auto rounded-lg duration-150 border-2 bg-gray-50/50 backdrop-blur-sm flex justify-around items-stretch lg:items-center gap-2 text-center font-medium text-base">
          <ItemsMenu 
      link={'disenios'}
          text={"Diseños"}
          />
       <ItemsMenu 
          link={"editorFolleto"}
       text={"Editor de Folleto"}
       />
       <ItemsMenu 
       link={'afiches'}
       text={"Diseño Afiches"}
       />
      </div>
    </div>
  );
}
