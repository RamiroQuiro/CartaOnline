import { createContext,useContext} from 'react'

const AuthContexto=createContext()

export const Auth =()=>{
    const context = useContext(AuthContexto)
    return context
}

export default function AuthContext({children}) {

    const login=(mail,password)=>{
        console.log(mail,password)
    }

const register=(userName,mail,password)=>{

}

const loginGoogle=()=>{

}

  return (
    
    // eslint-disable-next-line react/jsx-pascal-case
    <AuthContexto.Provider value={{login}}>
        {children}
    </AuthContexto.Provider>
    
  )
}
