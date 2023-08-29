interface CustomInputProps {
  placeholder: string;
}

export default function CustomInput({ placeholder }: CustomInputProps) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        name="search"
        id="search"
        className="border w-full border-gray-300 rounded-2xl px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500 shadow-md shadow-black/5"
      />
    </>
  );
}
