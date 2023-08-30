"use client";
import { useEffect, useState } from "react";

interface CustomTextAreaProps {
  defaultValue: string;
  placeholder: string;
  rows: number;
}

export default function CustomTextArea({
  defaultValue,
  placeholder,
  rows,
}: CustomTextAreaProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <textarea
        placeholder={placeholder}
        onChange={handleValueChange}
        value={value}
        rows={rows}
        name="search"
        id="search"
        className="border w-full border-gray-300 rounded-2xl px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500 shadow-md shadow-black/5"
      />
    </>
  );
}
