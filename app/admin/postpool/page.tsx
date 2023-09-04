"use client";
import BirthdayCreator from "@components/BirthdayCreator";
import PhotoAlbumCreator from "@components/PhotoAlbumCreator";
import PhotoCreator from "@components/PhotoCreator";
import SerchBar from "@components/SerchBar";
import VideoCreator from "@components/VideoCreator";
import React, { useEffect, useState } from "react";
import PostCardHorizontal from "@components/PostCardHorizontal";
import {
  collection,
  endAt,
  getCountFromServer,
  getDocs,
  limit,
  limitToLast,
  orderBy,
  query,
  startAfter,
  startAt,
  where,
} from "firebase/firestore";
import { database } from "@firebase";
import { ColorRing } from "react-loader-spinner";
import { Pagination } from "../components/Pagination";
import SelectComp from "@components/SelectComp";

interface GroupPost {
  groupId: string;
  postId: string;
}

interface History {
  lastPosted: {
    date: string;
    time: string;
    groups: GroupPost[];
  };
}

interface Card {
  id: number;
  name: string;
  message: string;
  image: string;
  type: string;
  day?: string;
  createdDate: string;
  history: History;
}

export default function PostPool() {
  const [loading, setLoading] = useState(true);
  const [postPoolData, setPostPoolData] = useState<Card[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectOption, setSelectOption] = useState(null);
  const [disabledPagi, setDisablePagi] = useState(false);
  const [search, setSearch] = useState("");
  const itemsPerPage = 6;
  const [contacts, setContacts] = useState<any>([]);

  const [postType, setPostType] = useState<string>("birthday");

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

  useEffect(() => {
    const getTotal = async () => {
      const dataRef = collection(database, "Post-Pool");
      const poolCount = query(dataRef);
      const totalCount = await getCountFromServer(poolCount);
      setTotal(totalCount.data().count);
    };

    getTotal();
  }, []);

  //handlefetch

  const handleFetch = async () => {
    setLoading(true);
    const dataRef = collection(database, "Post-Pool");
    // const pagination = loadOneMore ? [endAt(contacts[contacts.length-1])] : [];

    const filter = search
      ? [where("name", ">=", search), where("name", "<=", search + "\uf8ff")]
      : [];

    const order = search ? [orderBy("name", "asc")] : [orderBy("uuid", "desc")];
    const items = search ? [] : [limit(itemsPerPage)];

    const poolQuery = query(dataRef, ...items, ...order, ...filter);

    const docsSnapshot = await getDocs(poolQuery);
    const arr: any = [];

    docsSnapshot.forEach((doc) => arr.push({ ...doc.data(), id: doc.id }));
    setPostPoolData(arr);

    setLoading(false);
  };

  useEffect(() => {
    handleFetch();
  }, [search]);

  return (
    <>
      <div className="searchbar-container flex w-screen p-4">
        <SerchBar search={search} setSearch={setSearch} />
      </div>
      <div className="grid-container flex w-screen px-4 pb-4">
        <div className="grid grid-cols-9 grid-rows-5 gap-4 w-screen">
          <div className="col-span-3 row-span-5 bg-white p-2 shadow-md shadow-black/5 rounded-xl flex flex-col gap-4 h-[75vh]">
            <div className="post-type-picker">
              <div className="w-[300px]">
                <SelectComp
                  id={"select-one"}
                  selectedOption={selectOption}
                  setSelectOption={setSelectOption}
                  catagory={[
                    { value: "Birthday", label: "Birthday", color: "#FF8B00" },
                    { value: "Photo", label: "Photo", color: "#5243AA" },
                    {
                      value: "Photo-Album",
                      label: "Photo Album",
                      color: "#00B8D9",
                    },
                    { value: "Video", label: "Video", color: "#666666" },
                  ]}
                />
              </div>
            </div>

            {postType === "birthday" ? (
              <BirthdayCreator
                selectedOption={selectOption}
                setPostPoolData={setPostPoolData}
                loading={loading}
              />
            ) : postType === "photo" ? (
              <PhotoCreator />
            ) : postType === "photo-album" ? (
              <PhotoAlbumCreator />
            ) : postType === "video" ? (
              <VideoCreator />
            ) : (
              <p>Plese select a post type.</p>
            )}
          </div>
          <div className="flex flex-col gap-2 col-span-6 row-span-5 col-start-4 bg-sky-50 p-2 shadow-md shadow-black/5 rounded-xl h-[75vh] overflow-y-scroll">
            {loading ? (
              <ColorRing
                visible={loading}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            ) : (
              postPoolData.map((card) => (
                <PostCardHorizontal
                  id={card.id}
                  title={card.name}
                  type={card.type}
                  description={card.message}
                  media={card.image}
                  createdDate={card.createdDate}
                  key={card.id}
                />
              ))
            )}

            <div className="flex flex-col pb-20` ">
              <footer className="mt-auto flex justify-center items-center">
                {!loading && itemsPerPage < total && !search && !disabledPagi ? (
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
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                )}
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
