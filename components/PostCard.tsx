"use client";
interface PostCardProps {
  title: string;
  image: string;
  description: string;
  type: string;
}

import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import TypeIcon from "./TypeIcon";
import CustomTextArea from "./CustomTextArea";
import CustomInput from "./CustomInput";
import CustomCalendarDatePicker from "./CustomCalendarDatePicker";

export default function PostCard({
  title,
  image,
  description,
  type,
}: PostCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleEditButton = () => {
    console.log("PostCrd:Edit Button");
    setShowModal(true);
  };
  const handlePostButton = () => {
    console.log("PostCrd:Post Button");
  };

  return (
    <div
      className={
        "card relative flex flex-col gap-2 items-center justify-between rounded-xl bg-white shadow-md shadow-black/5 min-w-[300px] w-[22%] py-8 px-12 hover:bg-sky-200 hover:cursor-pointer "
      }
    >
      <div className="ico absolute right-4 top-4">
        <TypeIcon type={type} />
      </div>
      <div className="img">
        <Image
          src={image}
          alt={title}
          height={120}
          width={120}
          className="rounded-full h-full w-full object-cover"
        />
      </div>
      <div className="title font-semibold text-2xl w-[80%] text-center">
        {title}
      </div>
      <div className="description font-light w-[80%] text-center">
        {description}
      </div>
      <div className="btn flex gap-2">
        <Button
          handleClick={handleEditButton}
          name="Edit"
          tailwindColor="bg-indigo-500"
          tailwindHoverColor="bg-indigo-300"
        />
        <Button
          handleClick={handlePostButton}
          name="Post"
          tailwindColor="bg-sky-500"
          tailwindHoverColor="bg-sky-300"
        />
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[40vw]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="ico absolute right-4 top-4">
                    <TypeIcon type={type} />
                  </div>
                  <div className="w-full flex justify-center items-center p-6">
                    <Image
                      src={image}
                      alt={title}
                      height={120}
                      width={120}
                      className="rounded-full object-contain w-40 h-40"
                    />

                    <CustomCalendarDatePicker />
                  </div>

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="text-2xl font-semibold">
                  <CustomInput
                    placeholder="Enter post title here.."
                    defaultValue={title}
                  />
                  </p>
                  <p className="my-4 leading-relaxed">
                    <CustomTextArea
                      defaultValue={description}
                      rows={4}
                      placeholder="Write your description here.."
                    />
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-xl">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
