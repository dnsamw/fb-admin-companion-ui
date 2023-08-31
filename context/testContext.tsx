'use client'

import { ReactElement, createContext, useContext, useState } from "react"
const initialState:any = { 
  }

const Context = createContext(initialState);
type ChildrenType = {children?:ReactElement | ReactElement[] |undefined}

export default function ContextProvider({children}:ChildrenType):ReactElement {


const [postData,setPostData] = useState(1)


  return (<Context.Provider value={{postData,setPostData}} >{children}</Context.Provider>)
}


export const usePost =()=>{
  const {postData,setPostData} = useContext(Context)
  return {postData,setPostData}
}