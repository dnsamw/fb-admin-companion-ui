"use client";
import PostCard from "@components/PostCard";
import SideBar from "@components/SideBar";
import TitleCard from "@components/TitleCard";
import { database } from "@firebase";
import {
  collection,
  endAt,
  getCountFromServer,
  getDocs,
  limit,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ColorRing, Oval } from "react-loader-spinner";

import { Pagination } from "./components/Pagination";

export default function Home() {
  const [fbGroups, setFbGroups] = useState(null);
  const [loadingFBG, setLoadingFBG] = useState(true);
  const [loading, setLoading] = useState(true);
  const [postPoolData, setPostPoolData] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [disabledPagi, setDisablePagi] = useState(false);

  const itemsPerPage = 5;

  useEffect(() => {
    fetch("http://localhost:3000/api/fb-groups")
      .then((res) => res.json())
      .then((data) => {
        setFbGroups(data);
      })
      .finally(() => {
        setLoadingFBG(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    const q = query(
      collection(database, "Post-Pool"),
      orderBy("uuid", "desc"),
      limit(itemsPerPage)
    );
    //  const contactCount =query(dataRef,...filter)
    //     const totalCount =await getCountFromServer(contactCount)

    const getData = async () => {
      try {
        const totalCount = await getCountFromServer(
          collection(database, "Post-Pool")
        );

        setTotal(totalCount.data().count);
        const unsub = onSnapshot(q, (snapShot) => {
          let post: any = [];
          snapShot.docs.forEach((doc) => {
            post.push({ ...doc.data(), id: doc.id });
          });
          setPostPoolData(post);
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  const nextPage = async (val: number) => {
    console.log(val);
    
    const postsRef = collection(database, "Post-Pool");
    const q = query(
      postsRef,
      orderBy("uuid", "desc"),
      startAfter(val), // Pass the reference
      limit(itemsPerPage)
    );
    const documents = await getDocs(q);
    updateState(documents);
  };

  const paginationPage = async (val: number) => {

    
    setDisablePagi(true);
    const postsRef = collection(database, "Post-Pool");
    const q = query(
      postsRef,
      orderBy("uuid", "asc"),
      endAt(val), // Use `endAt()` method and pass the reference
      limitToLast(itemsPerPage)
    );
    const documents = await getDocs(q);
    updateState(documents);
    setDisablePagi(false);
  };

  const updateState = (documents: any) => {
    const tempPosts: any = [];
    if (!documents.empty) {
      documents.forEach((document: any) => {
        tempPosts.push({
          id: document.id,
          ...document.data(),
        });
      });
      setPostPoolData(tempPosts);
    }

  };


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
              {postPoolData.length > 0 ? (
                postPoolData.map((card: any) => (
                  <PostCard
                    key={card.id}
                    type={card.type}
                    title={card.name}
                    description={card.message}
                    image={card.image}
                    uuid={card.uuid}
                    id={card.id}
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
        <div className="flex flex-col pb-20` ">
          <footer className="mt-auto flex justify-center items-center">
            {!disabledPagi ? (
              <Pagination
                itemsPerPage={itemsPerPage}
                data={postPoolData}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalItems={total}
                changePage={paginationPage}
              />
            ) : (
              <ColorRing
                visible={disabledPagi}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            )}
          </footer>
        </div>
      </div>
    </div>
  );
}
