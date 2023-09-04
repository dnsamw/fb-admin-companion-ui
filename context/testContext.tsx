"use client";

import {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
const initialState: any = {};

const Context = createContext(initialState);
type ChildrenType = { children?: ReactElement | ReactElement[] | undefined };

export default function ContextProvider({
  children,
}: ChildrenType): ReactElement {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/posts");
        const data = await res.json();
        setPostData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    
  }, []);


  return (
    <Context.Provider value={{ postData, setPostData, loading }}>
      {children}
    </Context.Provider>
  );
}

export const usePost = () => {
  return useContext(Context);
};
