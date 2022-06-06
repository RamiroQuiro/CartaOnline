import { createContext,useContext, useEffect, useState} from 'react'
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { db, gAuth } from '../Firebase';
import { addDoc, arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';
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
        businessName:businessName,
        email:mail,
        nTel1:'',
        nTel2:'',
        facebook:'',
        instagram:'',
        direccion:'',
      items:[],
      styles:{
        color1: "#2e2e2e",
        color2: '#271717',
        SelectionRange: 19,
        porcentaje: 0,
        porcentaje2: 92,
        textColor: '#232323',
      },
      images:[{
        nombre: "",
        url: "",
        posicion: "", 
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
  console.log(data.data())
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
