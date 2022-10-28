import React from 'react'
import { FaEdit, FaTimes } from 'react-icons/fa'

export default function ImagenesFolleto2({className,classNameImg,imagen,name,width,figcaption,editFolleto,handleSubmitFile,handleDeleteImagen}) {
  return (
    <figure
    className={`${className} md:px-4 py-3 flex flex-col items-center relative w-full  mx-auto lg:w-[${width}%]  rounded-xl overflow-hidden`}
  >
    {editFolleto&&!imagen&&
    <img
      width={"300px"}
      height="150px"
      src={imagen}
      alt="imagen"
      className={`${classNameImg} object-contain object-center w-[${width}%] max-h-[300px] z-30 bg-gray-500  rounded-lg p-1 peer`}
    />
  }

  {
    imagen&&
    <img
      width={"300px"}
      height="150px"
      src={imagen}
      alt="imagen"
      className={`${classNameImg} object-contain object-center w-[${width}%] max-h-[300px] z-30  rounded-lg p-1 peer`}
    />
  }
{!editFolleto?
null:
<div className="peer-hover:flex hover:flex mx-auto group hidden md:left-5 top-5 absolute cursor-pointer z-50 bg-gray-700/80 p-1 rounded">
<label
  htmlFor={name}
  name={name}
  className="scale-75 group-hover:block block cursor-pointer"
>
  <FaEdit />
  <input
    // ref={filePickerRef}
    id={name}
    type="file"
    name={name}
    className="hidden"
    onChange={handleSubmitFile}
  />
</label>
<button
 onClick={()=>handleDeleteImagen(name)}
  className="scale-75 group-hover:block block cursor-pointer"
>
  <FaTimes />
</button>
</div>
}
    <figcaption className="font-bold text-sm px-5 text-center">
      {figcaption}
    </figcaption>
  </figure>
)
}
