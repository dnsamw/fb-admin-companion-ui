"use client";

import CustomTextArea from "@components/CustomTextArea";
import TextInput from "@components/TextInput";
import TypeIcon from "@components/TypeIcon";
import { usePost } from "@context/testContext";
import Image from "next/image";
import { useEffect } from "react";

import { HiThumbUp, HiAnnotation,HiEye } from "react-icons/hi";

import { cards } from "@lib/lib";

interface PostProps {
  params: {
    id: string;
  };
}

const Post = ({ params }: PostProps) => {
  const { postData, setPostData } = usePost();

  // console.log("STATE", postData);

  useEffect(() => {
    const x = cards.filter((card) => card.id === parseInt(params.id, 10))[0];
    setPostData(x);
  }, []);

  return (
    <>
      <div className="grid-container flex w-screen px-4 py-4">
        <div className="grid grid-cols-9 grid-rows-5 gap-4 w-screen">
          <div className="col-span-3 row-span-5 bg-white p-2 shadow-md shadow-black/5 rounded-xl flex flex-col gap-4 h-[88vh]">
            <div className="post-data flex flex-col">
              <div className="image flex flex-col items-center justify-center">
                <Image
                  src={postData.image}
                  alt={postData.name}
                  width={400}
                  height={400}
                  className="rounded-xl shadow-md shadow-black/5"
                />
                <span className="text-sm flex gap-8 justify-center items-center font-thin text-gray-500 p-4">
                  Posted created date : {postData.createdDate}
                  <TypeIcon type={postData.type} />
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <TextInput defaultValue={postData.name} />
                <CustomTextArea
                  defaultValue={postData.message}
                  placeholder="Enter your message here.."
                  rows={4}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 col-span-6 row-span-5 col-start-4 bg-sky-50 p-2 shadow-md shadow-black/5 rounded-xl h-[88vh] overflow-y-scroll">
            <div className="flex justify-center items-center w-full h-20 rounded-xl bg-white p-2 shadow-md shadow-black/5">
              <h3 className="font-semibild text-xl">
                This has been posted {postData.history?.length} times in the
                past
              </h3>
            </div>

            {postData.history?.length > 0 ? (
              postData.history.map((item) => (
                <div
                  key={item.id} // You should add a unique key for each element in the map
                  className="flex flex-col gap-4 justify-center items-start w-full rounded-xl bg-white p-4 shadow-md shadow-black/5"
                >
                  <h3 className="font-normal text-md">
                    Posted date :
                    <span className="text-blsck text-md font-bold"> {item.date}</span>
                  </h3>
                  <h3 className="font-normal text-md">
                    Posted time :
                    <span className="text-blsck text-ms font-bold"> {item.time}</span>
                  </h3>
                  <div className="flex w-full gap-4 bg-gray-100 p-4 rounded-xl overflow-x-scroll">
                    {item.groups.map((group) => (
                      <div key={group.groupId}>
                        <div className="flex flex-col gap-2 items-center min-w-40 min-h-40 rounded-xl bg-white p-4 shadow-md shadow-black/5 hover:bg-sky-100 hover:cursor-pointer">
                          <Image
                            src="/assets/images/fb-group.png"
                            alt="Group name"
                            width={70}
                            height={70}
                            className="rounded-full object-contain"
                          />
                          <p>Group name</p>
                          <div className="flex gap-4">
                            <div className="metric flex gap-2 items-center"><HiEye /> 67k</div>
                            <div className="metric flex gap-2 items-center"><HiThumbUp /> 3.2k</div>
                            <div className="metric flex gap-2 items-center"><HiAnnotation />346</div>
                           
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div>No history available.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
