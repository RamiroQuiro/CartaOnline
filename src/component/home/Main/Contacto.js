import React from 'react'

export default function Contacto() {
  return (
    <section className="w-5/6 mx-auto flex flex-col my-20">
    <div className="flex justify-center">
      <div className="text-center lg:max-w-3xl md:max-w-xl">
        <h2 className="text-3xl font-bold mb-12 px-6">Contactanos</h2>
      </div>
    </div>

    <div className="flex flex-wrap">
      <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
        <form>
        <h2 className="text-xl font-medium mb-5">Escribenos al whatsApp desde aquí</h2>
          <div className="form-group mb-6">
            <input type="text" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none" id="exampleInput7"
              placeholder="Nombre"/>
          </div>
          <div className="form-group mb-6">
            <input type="email" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none" id="exampleInput8"
              placeholder="Dirección de Email"/>
          </div>
          <div className="form-group mb-6">
            <textarea className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none
          " id="exampleFormControlTextarea13" rows="3" placeholder="Mensaje"></textarea>
          </div>
         
          <button type="submit" className="
          w-full
          px-6
          py-2.5
          bg-green-500/60
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-green-500 hover:shadow-lg
          focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Envíar whatsApp</button>
        </form>
      </div>
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
        <div className="flex flex-wrap">
          <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="p-4 bg-orange-500/80 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" className="w-5 text-white"
                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                    </path>
                  </svg>
                </div>
              </div>
              <div className="grow ml-6">
                <p className="font-bold mb-1">Al Numero Fijo o Celular</p>
                <p className="text-gray-800">3856771992</p>
              </div>
            </div>
          </div>
          <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="p-4 bg-orange-500/80 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                 
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
            className="w-7" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="white"
              d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
            </path>
          </svg>
                </div>
              </div>
              <div className="grow ml-6">
                <p className="font-bold mb-1">Mandanos un mail</p>
                <p className="text-gray-800">rama.exe.13@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
            <div className="flex align-start">
              <div className="shrink-0">
                <div className="p-4 bg-orange-500/80 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper"
                    className="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor"
                      d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z">
                    </path>
                  </svg>
                </div>
              </div>
              <div className="grow ml-6">
                <p className="font-bold mb-1">Nuestro linkedin</p>
                <p className="text-gray-800">https://linkedin.com/ramiro--quiroga</p>
              </div>
            </div>
          </div>
          <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
            <div className="flex align-start">
              <div className="shrink-0">
                <div className="p-4 bg-orange-500/80 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
            className="w-7" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="white"
              d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
            </path>
          </svg>
                </div>
              </div>
              <div className="grow ml-6">
              <p className="font-bold mb-1">Mandanos un mail</p>
                <p className="text-gray-800">ramiryexe@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
