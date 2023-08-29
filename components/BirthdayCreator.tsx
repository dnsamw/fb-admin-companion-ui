import Image from "next/image";
import CustomDatePicker from "./CustomDatePicker";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";
import Button from "./Button";

export default function BirthdayCreator() {
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
          <CustomDatePicker />
        </div>
        <div className="flex flex-col gap-4">
          <CustomInput placeholder="Name" />
          <CustomTextArea rows={4} placeholder="Write your caption here.." />
        </div>
        <div className="flex items-center justify-center">
          <Button name="Create" tailwindColor="bg-sky-500" />
        </div>
      </div>
    </>
  );
}
