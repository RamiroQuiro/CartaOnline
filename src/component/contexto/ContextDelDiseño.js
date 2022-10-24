import { useContext,useState,useEffect ,createContext } from "react";
import { db } from "../Firebase";
import {    doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const StyleContext=createContext()

export const ContextStyle= () => {
    const context = useContext(StyleContext)
    return context
}

export default function StyleContexto ({children}){




    return(
        <StyleContext.Provider >
            {children}
        </StyleContext.Provider>
    )
}