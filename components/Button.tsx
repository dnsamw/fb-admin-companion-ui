import { log } from "console";

interface ButtonProps {
  name: string;
  tailwindColor: string;
}
export default function Button({ name, tailwindColor }: ButtonProps) {

  return (
    <button
      type="button"
      className={
        "py-[10px] px-8 rounded-full text-white shadow-md shadow-black/5 " +tailwindColor}
    >
      {name}
    </button>
  );
}
