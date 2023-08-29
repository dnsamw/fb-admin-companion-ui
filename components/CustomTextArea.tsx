interface CustomTextAreaProps {
  placeholder: string;
  rows:number;
}

export default function CustomTextArea({ placeholder,rows }: CustomTextAreaProps) {
  return (
    <>
      <textarea
        placeholder={placeholder}
        rows={rows}
        name="search"
        id="search"
        className="border w-full border-gray-300 rounded-2xl px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500 shadow-md shadow-black/5"
      />
    </>
  );
}
