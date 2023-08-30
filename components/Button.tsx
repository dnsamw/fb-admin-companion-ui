import { log } from "console";
import { MouseEventHandler } from "react";

interface ButtonProps {
  name: string;
  tailwindColor: string;
  tailwindHoverColor: string;
  handleClick: MouseEventHandler;
}
export default function Button({
  name,
  tailwindColor,
  tailwindHoverColor,
  handleClick,
}: ButtonProps) {
  return (
    <button
      onClick={handleClick}
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
