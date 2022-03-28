import React from 'react'

export default function PerfilCuenta() {
  return (
    <section className="perfilCuenta">
    <form action="">
    <div className="head">
      <h2 className="font-bold text-gray-700 text-xl">Perfil de la Cuenta</h2>
      
    </div>
    <div className="flex w-full mb-5 py-2 ">
      <label htmlFor="nameEmpresa" className=" text-gray-700 text-lg font-medium"> Nombre de la Empresa:</label>
      <input type="text"className="inline-block p-2.5 w-full text-xl font-bold text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  outline-none" value="Pizzas a la Parrilla"/>
    </div>
    <div>
      <label htmlFor="nameEmpresa" className=" text-gray-700 text-lg font-medium"> Descripción bajo el titulo:</label>
      <textarea type="text"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" value="Pizzas a la Parrilla "/>
    </div>

    </form>
  </section>
  )
}
