"use client";

import { useEffect, useState } from "react";

interface TextInputProps {
  defaultValue: string;
}

export default function TextInput({defaultValue }: TextInputProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="input flex-col items-center justify-between">
        <input
          value={value}
          onChange={handleValueChange}
          type="text"
          min="1"
          placeholder="Ex: 4"
          name="frequency"
          id="frequency"
          className="border w-full border-gray-300 rounded-full px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500 block p-2.5 shadow-md shadow-black/5"
        />
      </div>
    </>
  );
}
