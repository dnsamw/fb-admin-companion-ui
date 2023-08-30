import Image from "next/image";
import CustomTextArea from "./CustomTextArea";
import Button from "./Button";
import AutomationOptions from "./AutomationOptions";
export default function PhotoCreator() {
  return (
    <>
      <div className="flex flex-col gap-6 h-full p-6 rounded-xl">
        <div className="image-calendar flex justify-between gap-4">
          <Image
            className="rounded-xl border border-1 border-sky-500 shadow-md shadow-black/5"
            src="/assets/images/placeholder.jpg"
            alt="select image"
            width={250}
            height={250}
          />
          <AutomationOptions />
        </div>
        <div className="flex flex-col gap-4">
          <CustomTextArea rows={5} placeholder="Write your caption here.." />
        </div>
        <div className="flex items-center justify-center">
          <Button
            handleClick={() => {
              console.log("From : PhotoCreator.tsx");
            }}
            name="Create"
            tailwindColor="bg-sky-500"
            tailwindHoverColor="bg-sky-300"
          />
        </div>
      </div>
    </>
  );
}
