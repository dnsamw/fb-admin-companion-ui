import { log } from "console";

interface ButtonProps {
  name: string;
  tailwindColor: string;
  tailwindHoverColor: string;
}
export default function Button({
  name,
  tailwindColor,
  tailwindHoverColor,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={
        "py-[10px] px-8 rounded-full text-white shadow-md shadow-black/5 " +
        tailwindColor +
        " hover:" +
        tailwindHoverColor
      }
    >
      {name}
    </button>
  );
}
