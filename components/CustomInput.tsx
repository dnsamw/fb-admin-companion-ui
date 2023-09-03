"use client";

import { useEffect, useState } from "react";

interface CustomInputProps {
  placeholder: string;
  defaultValue: string;
}

export default function CustomInput({
  placeholder,
  defaultValue,
}: CustomInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, []);

  return (
    <>
      <input
        onChange={handleChange}
        type="text"
        value={value}
        placeholder={placeholder}
        name="search"
        id="search"
        className="border w-full border-gray-300 rounded-2xl px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500 shadow-md shadow-black/5"
      />
    </>
  );
}
