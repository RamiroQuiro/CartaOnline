import { createContext,useContext, useEffect, useState} from 'react'
import {  createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { db, gAuth } from '../Firebase';
import {    doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import logo from "../../img/Logo.png"
 import imagen1 from "../../img/pizzas.webp"
 import imagen2 from "../../img/burguer.webp"
// import imagen3 from "../../img/"
import toast from 'react-hot-toast';


const AuthContexto=createContext()
export const Auth =()=>{
  const context = useContext(AuthContexto)
  return context
}

export default function AuthContext({children}) {
  const navigate=useNavigate()
  const [user,setUser]= useState()
  const [userPerfil,setUserPerfil]= useState(null)
  
  const docRef=doc(db,`usuarios/${user?.uid}`)
  const docRefItems = doc(db, `listado/${userPerfil?.businessName}`);
 const login= (mail,password)=>signInWithEmailAndPassword(gAuth,mail,password)

 
          
const register=async (mail,password,userName,businessName)=>{
   const infoUser=await createUserWithEmailAndPassword(gAuth, mail,password).then((currentUser)=>{
    setDoc(doc(db,`usuarios/${currentUser.user.uid}`),{
      perfilUser:{
      userName:userName,
      businessName:businessName,
      email:mail,
    }
  })
  updateDoc(doc(db, `listado/empresas`),{
    [`${businessName}`]:{
      perfilUser:{
        businessName:businessName,
        email:mail,
        nTel1:'',
        nTel2:'',
        facebook:'',
        instagram:'',
        direccion:'',}
        ,
      items:[],
      styles:{
        diseñoFolleto:1,
        color1: "#2e2e2e",
        color2: '#271717',
        SelectionRange: 19,
        porcentaje: 0,
        porcentaje2: 92,
        textColor: '#232323',
      },
      images:[{
        nombre: "",
        url: logo,
        posicion: "logo", 
      },{
        nombre: "",
        url: `https://firebasestorage.googleapis.com/v0/b/firestore-app-4200e.appspot.com/o/imagenes%2Fpinzasromanas%2Fimagen1?alt=media&token=ecc65560-1ea2-4cd2-936c-b3be33aee2e4`,
        posicion: "imagen1", 
      },{
        nombre: "",
        url: `https://firebasestorage.googleapis.com/v0/b/firestore-app-4200e.appspot.com/o/imagenes%2Fpinzasromanas%2Fimagen2?alt=media&token=7761e7e9-ed56-4345-9f9f-f53d5af508a2`,
        posicion: "imagen2", 
      },{
        nombre: "",
        url: "",
        posicion: "imagen3", 
      },]
      }
  })
    toast.success('Usuario creado correctamente',{
        style: {
          padding:'15px',
          marginTop:'10px',
        },
      });
      navigate('/account')
     return currentUser
    }).catch((error)=>{
      const errorCode = error.code;
      switch (errorCode) {
        case 'auth/email-already-in-use':
          toast.error('El email ya esta registrado',{
            style: {
              padding:'15px'
            },
          });
          break;
        case 'auth/invalid-email':
          toast.error('El email no es valido',{
            style: {
              padding:'15px'
            },
          });
          break;
        case 'auth/weak-password':
          toast.error('La contraseña es muy debil',{
            style: {
              padding:'15px'
            },
          });
          break;
      }
    })
}

const loginGoogle=()=>{

}

// traer perfiul de usuario
const traerDataProfile = async () => {
  const data = await getDoc(docRef);
  return data?.data() 
};

// escribir en el perfil

const editarPerfil = async(datos,businessName)=>{
  const data= (await getDoc(docRef))?.data()
 setDoc(docRef,{...data,[Object.keys(datos)]:Object.values(datos)[0]});
}

useEffect(()=>{
const unsuscribe=onAuthStateChanged(gAuth, (user) =>{
    setUser(user)
  });

},[gAuth])


useEffect(() => {
  if(user){
    traerDataProfile().then((data)=>{
      setUserPerfil(data.perfilUser)
    })
  }
}, [user]);

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <AuthContexto.Provider value={{ user, editarPerfil,traerDataProfile, userPerfil,register, login }}>
      {children}
    </AuthContexto.Provider>
  );
}
