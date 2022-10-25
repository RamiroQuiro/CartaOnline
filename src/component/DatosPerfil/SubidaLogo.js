import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FcUpload } from "react-icons/fc";
import { db, storage } from "../Firebase";

export default function SubidaLogo({ perfilUserLogin }) {
  const [previewURL, setPreviewURL] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [logo, setLogo] = useState(null);
  const [habilitarFormulario, setHabilitarFormulario] = useState(false);
  const docRef = doc(db, `listado/empresas`);
  const businessName = perfilUserLogin?.perfilUser?.businessName + "."+"images";

  const imagen = perfilUserLogin?.images;
  console.log(logo," imagen:", imagen," bussinessName:",businessName)
  useEffect(() => {
    const cargarLogo = async () => {
      imagen
        ? setLogo(imagen?.find((imagen) => imagen.posicion === "logo"))
        : setLogo(null);
    };
    cargarLogo();
  }, [logo, file]);

  useEffect(() => {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  }, [file]);

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fileName = e.target.nombre.value;
    const fileRef = ref(
      storage,
      `imagenes/${perfilUserLogin.businessName}/${file.name}`
    );
    await uploadBytes(fileRef, file).then(async (uploadTask) => {
      await getDownloadURL(fileRef).then(async (url) => {
        !logo?.posicion?
        updateDoc(docRef, {
          [businessName]:arrayUnion({
            nombre: fileName, 
            url: url, 
            posicion: "logo",
        })
      })
        :
        await updateDoc(docRef, {
          [businessName]: imagen?.map((img) =>
          img.posicion == "logo"
            ? { ...img, url: url, nombre: fileName }
            : img
          ),
        }).then(() => {
            toast.success("Imagen subida correctamente");
            setFile(null);
            setPreviewURL(null);
            setFileURL(null);
            setLoading(false);
          })
          .catch((error) => {
            alert("Error al subir imagen, intente de nuevo");
            console.log(error);
          });
      });
    });
  };

  const handleUpSelect = async (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const habilitarForm = () => {
    setHabilitarFormulario(!habilitarFormulario);
  };

  return (
    <div className="font-bold flex flex-col mt-4 items-centar gap-2 text-center mb-2 text-gray-700 text-2xl">
      <h2 className="font-bold text-center mb-2">Logo</h2>
      {logo && !habilitarFormulario ? (
        <div>
          <img className="w-44 mx-auto mb-4 h-auto" src={logo.url} alt="" />
          <button
            onClick={habilitarForm}
            className={`uppercase font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none `}
          >
            Cambiar Logo
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmitFile}
          className=" flex flex-col w-3/5 mx-auto justify-around gap-3 items-left"
        >
          <label
            htmlFor="nombre"
            className="block mx-auto text-sm font-medium text-gray-900  dark:text-gray-800"
          >
            Nombre del archivo:
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="bg-gray-50 inline-block border border-gray-300 text-gray-900 text-sm rounded  ml-3 w-1/2 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white "
            />
          </label>

          <div className="flex flex-col justify-center items-center  bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            {previewURL && (
              <img
                src={previewURL}
                alt="preview"
                className="block object-cover object-center w-auto h-full rounded-lg"
              />
            )}
            {!previewURL && (
              <label htmlFor="subirArchivo">
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <div className="py-3 animate-bounce duration-300">
                    <FcUpload className="text-4xl" />
                  </div>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">
                      Click para seleccionar archivo
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG (MAX. 800x400px)
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
              </label>
            )}
          </div>
          <button
            type="submit"
            disabled={!file && true}
            className={`uppercase font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none `}
          >
            {loading ? (
              <>
                <svg
                  role="status"
                  className="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="animate-pulse uppercase font-medium text-xs ">
                  Subiendo...
                </span>
              </>
            ) : (
              "Subir imagen"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
