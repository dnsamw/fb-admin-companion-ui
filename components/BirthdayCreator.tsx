"use client";
import Image from "next/image";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";
import Button from "./Button";
import CustomCalendarDatePicker from "./CustomCalendarDatePicker";
// import CustomCalendarDatePicker from "./CustomCalendarDatePicker";

export default function BirthdayCreator() {
  return (
    <>
      <div className="flex flex-col gap-6 h-full p-6 rounded-xl">
        <div className="image-calendar flex justify-between gap-4">
          <Image
            className="rounded-xl border border-1 border-gray-300 shadow-md shadow-black/5"
            src="/assets/images/placeholder.jpg"
            alt="select image"
            width={300}
            height={0}
            // layout="fill"
            style={{ width: "300px", height: "auto" }}
            // objectFit="contain"
          />
          {/* <CustomDatePicker /> */}
          <CustomCalendarDatePicker />
        </div>
        <div className="flex flex-col gap-4">
          <CustomInput placeholder="Name" />
          <CustomTextArea
            defaultValue=""
            rows={3}
            placeholder="Write your caption here.."
          />
        </div>
        <div className="flex items-center justify-center">
          <Button
            handleClick={() => {
              console.log("Create:BirthdayCreator.tsx");
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
