"use client";
import BirthdayCreator from "@components/BirthdayCreator";
import PhotoAlbumCreator from "@components/PhotoAlbumCreator";
import PhotoCreator from "@components/PhotoCreator";
import SerchBar from "@components/SerchBar";
import VideoCreator from "@components/VideoCreator";
import React, { useState } from "react";
import PostCardHorizontal from "@components/PostCardHorizontal";
import NavBar from "@components/NavBar";

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
  const cards: Card[] = [
    {
      id: 1,
      name: "Nayomi Thakshila",
      message: "Happy Birthday Nayomi Thakshila 🍰❤️",
      image: "/assets/images/nayomi-thakshila.jpg",
      day: "Sep-14",
      type: "birthday",
      createdDate: "2020-Aug-01",
      history: {
        lastPosted: {
          date: "2023-Jul-23",
          time: "13:20",
          groups: [
            { groupId: "11111", postId: "1524341" },
            { groupId: "22222", postId: "5785676" },
            { groupId: "22222", postId: "5897999" },
          ],
        },
      },
    },
    {
      id: 2,
      name: "Piumi Boteju",
      message: "Happy Birthday Piumi Boteju 🍰❤️",
      image: "/assets/images/piumi-boteju.jpg",
      day: "Feb-25",
      type: "birthday",
      createdDate: "2020-May-01",
      history: {
        lastPosted: {
          date: "2023-Jul-23",
          time: "13:20",
          groups: [
            { groupId: "11111", postId: "1524341" },
            { groupId: "22222", postId: "5785676" },
            { groupId: "22222", postId: "5897999" },
          ],
        },
      },
    },
    {
      id: 3,
      name: "Nimmy Manohari",
      message: "Happy Birthday Nayomi Thakshila 🍰❤️",
      image: "/assets/images/nimy-manohari.jpg",
      day: "Aug-03",
      type: "birthday",
      createdDate: "2020-May-01",
      history: {
        lastPosted: {
          date: "2023-Jul-23",
          time: "13:20",
          groups: [
            { groupId: "11111", postId: "1524341" },
            { groupId: "22222", postId: "5785676" },
            { groupId: "22222", postId: "5897999" },
          ],
        },
      },
    },
    {
      id: 4,
      name: "Sandani Fernando",
      message: "Happy Birthday Sandani Fernando 🍰❤️",
      image: "/assets/images/sandani-fernando.jpg",
      day: "Jul-23",
      type: "birthday",
      createdDate: "2020-May-01",
      history: {
        lastPosted: {
          date: "2023-Jul-23",
          time: "13:20",
          groups: [
            { groupId: "11111", postId: "1524341" },
            { groupId: "22222", postId: "5785676" },
            { groupId: "22222", postId: "5897999" },
          ],
        },
      },
    },
    {
      id: 5,
      name: "Shalani Tharaka",
      message: "Happy Birthday Shalani Tharaka 🍰❤️",
      image: "/assets/images/shalani-tharaka.jpg",
      day: "Jul-23",
      type: "birthday",
      createdDate: "2020-May-01",
      history: {
        lastPosted: {
          date: "2023-Jul-23",
          time: "13:20",
          groups: [
            { groupId: "11111", postId: "1524341" },
            { groupId: "22222", postId: "5785676" },
            { groupId: "22222", postId: "5897999" },
          ],
        },
      },
    },
    {
      id: 6,
      name: "Shenaya Vanhoff",
      message: "Happy Birthday Shenaya Vanhoff 🍰❤️",
      image: "/assets/images/shenaya-vanhoff.jpg",
      day: "Jul-13",
      type: "birthday",
      createdDate: "2020-May-01",
      history: {
        lastPosted: {
          date: "2023-Jul-23",
          time: "13:20",
          groups: [
            { groupId: "11111", postId: "1524341" },
            { groupId: "22222", postId: "5785676" },
            { groupId: "22222", postId: "5897999" },
          ],
        },
      },
    },
    {
      id: 7,
      name: "Yashodha Wimaladharma",
      message: "Happy Birthday Yashodha Wimaladharma 🍰❤️",
      image: "/assets/images/yashodha-vimaldharma.jpg",
      day: "Dec-17",
      type: "birthday",
      createdDate: "2020-May-11",
      history: {
        lastPosted: {
          date: "2023-Jul-23",
          time: "13:20",
          groups: [
            { groupId: "11111", postId: "1524341" },
            { groupId: "22222", postId: "5785676" },
            { groupId: "22222", postId: "5897999" },
          ],
        },
      },
    },
  ];

  const [postType, setPostType] = useState<string>("birthday");
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPostType(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="searchbar-container flex w-screen p-4">
        <SerchBar />
      </div>
      <div className="grid-container flex w-screen px-4 pb-4">
        <div className="grid grid-cols-9 grid-rows-5 gap-4 w-screen">
          <div className="col-span-3 row-span-5 bg-white p-2 shadow-md shadow-black/5 rounded-xl flex flex-col gap-4 h-[75vh]">
            <div className="post-type-picker">
              <label
                htmlFor="countries"
                className="block p-4 text-md font-medium text-gray-900"
              >
                Select an option
              </label>
              <select
                onChange={handleSelect}
                id="posttypes"
                className="border border-gray-300 rounded-full px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500 block w-[50%] p-2.5 shadow-md shadow-black/5"
              >
                <option selected value="birthday">
                  Birthday
                </option>
                <option value="photo">Photo</option>
                <option value="photo-album">Photo Album</option>
                <option value="video">Video</option>
              </select>
            </div>

            {postType === "birthday" ? (
              <BirthdayCreator />
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
            {cards.map((card) => (
              <PostCardHorizontal
                id={card.id}
                title={card.name}
                type={card.type}
                description={card.message}
                media={card.image}
                createdDate={card.createdDate}
                key={card.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
