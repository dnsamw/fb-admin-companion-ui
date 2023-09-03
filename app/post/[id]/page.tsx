"use client";

import CustomTextArea from "@components/CustomTextArea";
import TextInput from "@components/TextInput";
import TypeIcon from "@components/TypeIcon";
import { usePost } from "@context/testContext";
import Image from "next/image";
import { useEffect, useState } from "react";

import { HiThumbUp, HiAnnotation, HiEye } from "react-icons/hi";
import { useRouter } from "next/navigation";
import NavBar from "@components/NavBar";
import Button from "@components/Button";

interface PostProps {
  params: {
    id: string;
  };
}

const Post = ({ params }: PostProps) => {
  const { postData, setPostData } = usePost();
  const [newThing, setNewThing] = useState<typeof postData>({});

  // console.log("STATE", postData);
  const router = useRouter();

  useEffect(() => {
    const cardData = postData.filter(
      (card: any) => card.id === parseInt(params.id, 10)
    )[0];
    setNewThing(cardData);
  }, [postData, params.id]);

  return (
    <>
      <NavBar />
      <div className="grid-container flex w-screen px-4 py-4">
        <div className="grid grid-cols-9 grid-rows-5 gap-4 w-screen">
          <div className="col-span-3 row-span-5 bg-white p-2 shadow-md shadow-black/5 rounded-xl flex flex-col gap-4 h-[88vh]">
            <div className="post-data flex flex-col">
              <div className="image flex flex-col items-center justify-center">
                <Image
                  src={newThing?.image}
                  alt={newThing?.name}
                  width={400}
                  height={400}
                  className="rounded-xl shadow-md shadow-black/5"
                />
                <span className="text-sm flex gap-8 justify-center items-center font-thin text-gray-500 p-4">
                  Posted created date : {newThing?.createdDate}
                  <TypeIcon type={newThing?.type} />
                </span>
              </div>
              <div className="flex flex-col gap-4 items-center p-4">
                <div className="w-full font-semibold text-xl">
                <TextInput defaultValue={newThing?.name} /> 
                </div>
                <CustomTextArea
                  defaultValue={newThing?.message}
                  placeholder="Enter your message here.."
                  rows={4}
                />
                <div className="w-3xl">
                  <Button
                    handleClick={() => {}}
                    name="SAVE"
                    tailwindColor="bg-sky-500"
                    tailwindHoverColor="bg-sky-300"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 col-span-6 row-span-5 col-start-4 bg-sky-50 p-2 shadow-md shadow-black/5 rounded-xl h-[88vh] overflow-y-scroll">
            <div className="flex justify-center items-center w-full h-20 rounded-xl bg-white p-2 shadow-md shadow-black/5">
              <h3 className="font-semibild text-xl">
                This has been posted {newThing?.history?.length} times in the
                past
              </h3>
            </div>

            {newThing?.history?.length > 0 ? (
              newThing?.history.map((item: any) => (
                <div
                  key={item.id} // You should add a unique key for each element in the map
                  className="flex flex-col gap-4 justify-center items-start w-full rounded-xl bg-white p-4 shadow-md shadow-black/5"
                >
                  <h3 className="font-normal text-md">
                    Posted date :
                    <span className="text-blsck text-md font-bold">
                      {" "}
                      {item.date}
                    </span>
                  </h3>
                  <h3 className="font-normal text-md">
                    Posted time :
                    <span className="text-blsck text-ms font-bold">
                      {" "}
                      {item.time}
                    </span>
                  </h3>
                  <div className="flex w-full gap-4 bg-gray-100 p-4 rounded-xl overflow-x-scroll">
                    {item.groups.map((group: any) => (
                      <div key={group.groupId} className="select-none">
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
                            <div className="metric flex gap-2 items-center">
                              <HiEye /> 67k
                            </div>
                            <div className="metric flex gap-2 items-center">
                              <HiThumbUp /> 3.2k
                            </div>
                            <div className="metric flex gap-2 items-center">
                              <HiAnnotation />
                              346
                            </div>
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
