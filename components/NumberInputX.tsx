'use client'

import { useEffect, useState } from "react";

interface NumberInputXProps {
  text: string;
  defaultValue: number;
}

export default function NumberInputX({
  text,
  defaultValue,
}: NumberInputXProps) {

const [value, setValue] = useState(0);

useEffect(() => {
setValue(defaultValue)
}, [defaultValue])

const handleValueChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setValue(Number(e.target.value))
}

  return (
    <>
      <div className="input flex items-center justify-between px-10">
        <p>{text}</p>
        <input
          value={value}
          onChange={handleValueChange}
          type="number"
          min="1"
          placeholder="Ex: 4"
          name="frequency"
          id="frequency"
          className="border border-gray-300 rounded-full px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500 block p-2.5 shadow-md shadow-black/5"
        />
      </div>
    </>
  );
}
