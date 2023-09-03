"use client";

interface PostCardHorizontalProps {
  id: number;
  title: string;
  description: string;
  media: string;
  createdDate: string;
  type: string;
}
import Image from "next/image";
import Button from "@components/Button";
import TypeIcon from "@components/TypeIcon";
import Link from "next/link";

export default function PostCardHorizontal({
  id,
  title,
  description,
  media,
  createdDate,
  type,
}: PostCardHorizontalProps) {
  return (
    <>
      <Link href={"/post/" + id}>
        <div className="card flex gap-4 items-center justify-between rounded-xl bg-white shadow-md shadow-black/5 min-w-[300px] w-full py-2 px-12 hover:bg-sky-200 hover:cursor-pointer">
          <div className="cont flex items-center gap-6 h-15 w-15">
            <Image
              src={media}
              alt={title}
              height={100}
              width={100}
              className="rounded-full object-cover h-15 w-15"
            />
            <div className="cont">
              <TypeIcon type={type} />
              <div className="title font-semibold text-2xl">{title}</div>
              <div className="description ">
                <p className="font-light">{description}</p>
                <p className="text-xs text-gray-400">
                  Created on : {createdDate}
                </p>
              </div>
            </div>
          </div>
          <div className="btn">
            <Button
              handleClick={() => {
                console.log("From:PostCardHorizontal.tsx");
              }}
              name="Edit"
              tailwindColor="bg-sky-500"
              tailwindHoverColor="bg-sky-300"
            />
          </div>
        </div>
      </Link>
    </>
  );
}
