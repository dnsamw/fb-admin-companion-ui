"use client";
import PostCard from "@components/PostCard";
import SideBar from "@components/SideBar";
import TitleCard from "@components/TitleCard";
import { usePost } from "@context/testContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

export default function Home() {
  const [fbGroups, setFbGroups] = useState(null);
  const [loadingFBG, setLoadingFBG] = useState(true);

  const { postData, loading } = usePost();

  useEffect(() => {
    fetch("http://localhost:3000/api/fb-groups")
      .then((res) => res.json())
      .then((data) => {
        setFbGroups(data);
        setLoadingFBG(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-10 grid-rows-5 gap-[1px] w-screen">
      <div className="col-span-3 row-span-5 p-4">
        <SideBar data={fbGroups} loadingState={loadingFBG} />
      </div>
      <div className="flex flex-col gap-4 col-span-7 row-span-5 col-start-4 p-4">
        <TitleCard />
        <div className="body flex gap-4 flex-wrap w-full h-[75vh] rounded-xl bg-sky-50 p-2 shadow-md shadow-black/5 overflow-y-scroll">
          {!loading ? (
            <>
              {postData.length > 0 ? (
                postData.map((card: any) => (
                  <PostCard
                    key={card.id}
                    type={card.type}
                    title={card.name}
                    description={card.message}
                    image={card.image}
                  />
                ))
              ) : (
                <div className="flex justify-center items-center w-full">
                  <p className="w-[45%] text-center font-normal text-xl">
                    It seems like your post pool is empty! Go to the{" "}
                    <Link href="/postpool" className="text-sky-500">
                      Post Pool
                    </Link>{" "}
                    tab in the header section and start creating new posts..
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="flex justify-center items-center w-full">
              <Oval
                height={80}
                width={80}
                color="#0ea5e9"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#cecece"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
