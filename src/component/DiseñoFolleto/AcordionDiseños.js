import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AcordionDiseños({ handleUpSelect, styles, setStyles }) {
  const handlePaletaColors = (e) => {
    e.preventDefault();
    setStyles({ ...styles, [e.target.name]: e.target.value });
  };

  const bgArriba=styles?.color1
  return (
    <div className="flex md:flex-col z-40   justify-around items-center mb-2 w-full ">
      <label
        htmlFor="acordionDiseños"
        className="text-gray-700  w-full hover:bg-paleta-600/70 group group-checked:bg-paleta-600 font-medium flex flex-col gap-2  border-t-2 border-b-2 pt-1 justify-center items-center cursor-pointer h-full md:max-h-full duration-150"
      >
        <input
          id="acordionDiseños"
          className=" peer group z-50 absolute hidden pb-1 w-full opacity-0"
          type="checkbox"
        />
        <p
          htmlFor="acordionDiseños"
          className="peer-checked:text-paleta-600 peer-checked:font-bold w-full block rounded-lg z-50 whitespace-nowrap text-center cursor-pointer  px-1"
        >
          Paleta de colores{" "}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 peer-checked:rotate-180 duration-200 mb-1 peer-checked:text-paleta-600  "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>
        <div className="hidden flex-col md:bg-gray-200/50 bg-gray-200/90  w-full peer-checked:bg- max-h-0 peer-checked:flex md:bottom-0 left-0 -bottom-28 absolute md:relative duration-150 md:-translate-y-8 peer-checked:translate-y-0 peer-checked:max-h-max z-50  ">
        <div className="flex md:flex-col justify-around items-center">
            <div className=" flex flex-col py-2 gap-1 justify-center items-center">
              <input
                name="color1"
                type="color"
                onChange={handlePaletaColors}
                value={styles?.color1}
                className={"bg-transparent rounded-full h-8 w-8  p-0.5"}
              />
              <label
                for="default-range"
                className=" mb-1 text-sm font-medium uppercase text-center text-gray-900 :text-gray-300"
              >
                <input
                  name="porcentaje"
                  type="range"
                  min="0"
                  max="100"
                  className="w-10/12 h-2 py-1 bg-gray-50 rounded-lg appearance-none cursor-pointer :bg-gray-50"
                  value={styles?.porcentaje}
                  onChange={handlePaletaColors}
                />
                <div>
                  <input
                    name="porcentaje"
                    type="number"
                    className="w-1/4 text-right bg-transparent mx-0 px-0 text-sm font-medium uppercase text-gray-900 :text-gray-300
              focus:outline-none focus:ring-2 focus:ring-paleta-600 rounded-lg focus:border-transparent
              "
                    value={styles?.porcentaje}
                    onChange={handlePaletaColors}
                  />
                  <span className="text-xs">% de Color</span>
                </div>
              </label>
            </div>
            <div className=" flex flex-col  gap-1 justify-center items-center">
              <input
                name="color2"
                value={styles?.color2}
                type="color"
                onChange={handlePaletaColors}
                className={"bg-transparent rounded-full h-8 w-8  p-0.5"}
              />
              <label
                for="default-range"
                className=" mb-1 text-xs font-medium uppercase text-center text-gray-900 :text-gray-300"
              >
                <input
                  name="porcentaje2"
                  type="range"
                  min="0"
                  max="100"
                  className="w-10/12 h-2 py-1 bg-50-200 rounded-lg appearance-none cursor-pointer :bg-gray-50"
                  value={styles?.porcentaje2}
                  onChange={handlePaletaColors}
                />
                <div className="flex ">
                  <input
                    name="porcentaje2"
                    type="number"
                    className="w-1/4 bg-transparent text-right  text-xs font-medium uppercase text-gray-900 :text-gray-300  focus:outline-none focus:ring-2 focus:ring-paleta-600 rounded-lg focus:border-transparent
              "
                    value={styles?.porcentaje2}
                    onChange={handlePaletaColors}
                  />
                  <span className="text-xs">% de Color</span>
                </div>
              </label>
            </div>
            <div className="flex flex-col gap-3  border-b-2 py-2 px-1 justify-center items-center">
              <label className="text-center font-medium text-xs w-full">
                Angulo de Degradado
              </label>
              <div className="flex flex-col  gap-1 justify-center items-center  ">
                <input
                  name="SelectionRange"
                  type="range"
                  min="5"
                  max="360"
                  className="w-10/12 h-2 py-1 bg-gray-50 rounded-lg appearance-none cursor-pointer "
                  onChange={handlePaletaColors}
                />
                <div className="flex justify-center items-center">
                  <input
                    name="SelectionRange"
                    type="number"
                    className="w-1/6  text-right bg-transparent mx-0 px-0 text-sm font-medium uppercase  text-gray-900 :text-gray-300  focus:outline-none focus:ring-2 focus:ring-paleta-600 rounded-lg focus:border-transparent"
                    value={styles?.SelectionRange}
                    onChange={handlePaletaColors}
                  />{' '}
                  <span className="text-xl font-bold"> °</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </label>
      <label
        htmlFor="acordionDiseñosTexto"
        className="text-gray-700  w-full hover:bg-paleta-600/70 group group-checked:bg-paleta-600 font-medium flex flex-col gap-2  border-t-2 border-b-2 pt-1 justify-center items-center cursor-pointer h-full md:max-h-full  duration-150 ">
        <input
          id="acordionDiseñosTexto"
          className=" peer group z-50 absolute hidden w-full opacity-0"
          type="checkbox"
        />
        <p
          htmlFor="acordionDiseñosTexto"
          className="peer-checked:text-paleta-600 peer-checked:font-bold w-full block rounded-lg z-50 whitespace-wrap text-center cursor-pointer  px-1"
        >
          Formato de los Textos
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6  peer-checked:rotate-180 duration-200 mb-1 peer-checked:text-paleta-600  "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>
        <div className="hidden flex-col md:bg-gray-200/50 bg-gray-200/90  w-full peer-checked:bg- max-h-0 peer-checked:flex md:bottom-0 left-0 -bottom-20 absolute md:relative duration-150 md:-translate-y-8 peer-checked:translate-y-0 peer-checked:max-h-max z-50  ">
        <div className="flex md:flex-col justify-around items-center">
        <div className=" flex flex-col py-2 gap-1 justify-center items-center">
            <input
              name="textColor1"
              type="color"
              onChange={handlePaletaColors}
              value={styles?.textColor1}
              className={"bg-transparent rounded-full h-8 w-8  p-0.5"}
            />
            <label className="text-center  text-paleta-100 :text-gray-50 break-all text-xs font-bold w-full">
              Color de los Titulos
            </label>
          </div>
          <div className=" flex flex-col py-2 gap-1 justify-center items-center">
            <input
              name="textColor2"
              value={styles?.textColor2}
              type="color"
              onChange={handlePaletaColors}
              className={"bg-transparent rounded-full h-8 w-8  p-0.5"}
            />
            <label
              for="default-range"
              className="text-center text-paleta-100 :text-gray-50 break-all text-xs font-bold pb-2  w-full"
            >
              Color de Textos
            </label>
          </div>
          </div>
        </div>
      </label>
      {/* <label
        htmlFor="acordionImagenes"
        className="text-gray-700  w-full hover:bg-paleta-600/70 group group-checked:bg-paleta-600 font-medium flex flex-col gap-2  border-t-2 border-b-2 py-1 justify-center items-center cursor-pointer max-h-full duration-150 ">
        <input
          id="acordionImagenes"
          className=" peer group z-50 absolute opacity-0"
          type="checkbox"
        />
        <p
          htmlFor="acordionImagenes"
          className="peer-checked:text-paleta-600 peer-checked:font-bold w-full block rounded-lg z-50 whitespace-wrap text-center cursor-pointer p px-1"
        >
          Imagenes
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6  peer-checked:rotate-180 duration-200 peer-checked:text-paleta-600  "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>
        <div className="hidden flex-col bg-gray-100 w-full peer-checked:bg- max-h-0 peer-checked:flex  duration-150 -translate-y-8 peer-checked:translate-y-0 peer-checked:max-h-max z-50  ">
          <form
            onSubmit={'handleSubida'}
            className={"z-50"}
            >
             <label htmlFor="subirArchivo"
             className="flex flex-col gap-3 w-full items-center py-5 justify-center"
             >
                <div className="flex flex-col bg-gray-700 rounded-lg h-16 w-16  justify-center items-center p-2 ">
                  <div className="py-1 animate-pulse duration-500">
                  <img 
                  className="object-contain"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFS0lEQVRoge2ZX4hUVRzHv7/rzGxb7p8SVswtshp8WHF39t4VnYzAMkJJQkJyoccCq4fQB0sQ11BJEaJge5B6iE2oKENEKUHXXmTbc2ZchAvZxkTmHyowZ9rdGffO3F8PO2t3zpxx7t297dN83u73/s6539+eM7/zZ4EGDRo0aLCQCCGek1J+Pzw8fF9YfY6PjzdJKc9KKTcHbWv4DWRmQ0p5lIjOAni+paXlQL02QogBIcRAvbhsNnsQwEYAp4QQR5jZty/yE2TbdqxQKHzGzK94ZJeINpqmeV7XRggxQET7yo+HLct6RxeXSqWeZuYL8PwxmflEe3t7fzwev1PPW91MmdnI5/NfKOYBwHVdt9uHeQDYXWskXNe1ALhejYi25nK5435Gou4ISCmPAtilyDcAbLUs60cf5u/CzPv7+vqqEkmn0+tc1/0GwLIKc0RHTNPcPecEpJQvAfhWkX8yDOOF3t7e34KYn6VWEpcuXXqsVCp9B2BlhUGiLaZpngqcgJSyDYANYLlHvgFgnWVZV+di3oP2NzE2Nra8WCyOAOj0yDdjsVjX6tWr/9Z1VHOOMfOAYt4hoi0hmAdq/CZ6enquu667FYDjkZc5jrO3VkfaBEZGRpYS0euKfMA0zZQaOwfzAAAi2ielfF/V16xZI5j5kFdj5h1SymVqLFBjCgkhDhLRHo/0e1tbW9xPWZtFSsneZ8uyfJVsYGZhy2azv6ByKh2wLKtqJKpGgJmJiLYr8qEg5udLPB6/Q0Tq6KieAGgSEEJYAFZ4pKnm5ubPQ/TnC8dxhgDkPdIT6XTaUuOqEjAM4xlFOt3V1TURsr+6rF27NkdEZ7ya67qqN+0UUrO8ELI33zDzD4pkqjFVCRDRKqUTGbIv3xCRUKRVaoyujC7xPjBzVd1fKIhI/fYSNUaXQLv3YXJy8naYpoKQzWZvKdJDaowugQqto6PD1cQsCJ2dnaxIVWuJLoGKipPP51vDNBWEqampNkX6R43RJXDT+8DMj4dpKgjFYlH99k01RldGr1QEGIb20LIQaA5MV9QYXRlVy+aGME0FgYieVaSqkq6bQhVnXGbeLKW8P0xjfrBtezGATV7NMIxzalxEFUzTFKlU6hr+2wm2AOgH8EkQA0F2nzoKhUI/gAc80tVEIpFW43RTyAUwpMi7pZTR+RgKwvj4eBMzV5zYiGio7K0C7YEmEokMAvBun58EsDNUl/cgl8vtQuWOuEBEH+titQn09PRcB/CpIu8fHR1NhmOxNlLK9cysnvCO9fb23tDF1zwTT09P7wXwl0dqMgzjhJTy0RB8ain3/TWAmEf+MxaL1bzdq5lAMpm8RURvKfJSAKf/jyTKfZ4pf+MuRLSj1o0EUOdmzjTNr5h5UJFXARgVQjw1V7MqUsr1AASALuXVh6ZpnrhX27pXdxMTE28zs3qxtJSIzkkp37VtO6Zt6APbtmOpVGoPgHMAOpTXJzOZjHojWIWvWn3x4sXmaDT6JRG9qHmdIaLDkUjkeHd396Sf/mzbXlwoFPrLpXKFJuTk9PT09mQymde8q8D3YjM8PBxpbW39gJnV38UsEwDOMPN5IhqLRqO/RiKR2wBQLBbbHcdZASCBma3JJlQuUl4+ymQyO7dt21by4yvwaimEeJmIBlE95PPlDyJ6o96cV5nTcn/58uUHHcd5j5lfA9A0lz48FAAcW7Ro0b5EIhH49Dev/Uo6nX64VCq9SUSvAngkYPOrRDTEzIOWZVXt8/0yrwRmKf/7ySKiDZi5+liJmYvhxeWQCQDXAPwMQLque76vry+l29s0aNAgGP8CECQIyaj4YAMAAAAASUVORK5CYII="/>
                  </div>
                
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                  </p>
                </div>
                <input
                  accept="image/*"
                  id="subirArchivo"
                  type="file"
                  name="subirArchivo"
                  className="hidden"
                  onChange={handleUpSelect}
                />
                <select
                className="w-10/12 rounded-md ring-1 ring-blue-600 text-xs font-medium text-left px-2 py-1"
                >
                  <option value={1}>posicion 1</option>
                  <option value={2}>posicion 2</option>
                  <option value={3}>posicion 3</option>
</select>
<button className=" font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 p-1.5 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none ">subir imagen</button>
              </label>
          </form>
        </div>
      </label> */}
     
    </div>
  );
}
