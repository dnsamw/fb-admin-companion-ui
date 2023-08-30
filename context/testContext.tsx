'use client'

type PostType = "birthday" | "announcement" | "other"; // Define all possible types here

interface HistoryGroup {
  groupId: string;
  postId: string;
}

interface HistoryLastPosted {
  date: string;
  time: string;
  groups: HistoryGroup[];
}

interface Post {
  id: number;
  name: string;
  message: string;
  image: string;
  day: string;
  type: any;
  createdDate: string;
  history: {
    lastPosted: HistoryLastPosted;
  };
}

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