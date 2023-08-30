"use client";
import PostCard from "@components/PostCard";
import SideBar from "@components/SideBar";
import TitleCard from "@components/TitleCard";
import Image from "next/image";
import Link from "next/link";

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

export default function Home() {
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

  return (
    <div className="grid grid-cols-10 grid-rows-5 gap-[1px] w-screen">
      <div className="col-span-3 row-span-5 p-4">
        <SideBar />
      </div>
      <div className="flex flex-col gap-4 col-span-7 row-span-5 col-start-4 p-4">
        <TitleCard postCount={cards.length} />
        <div className="body flex gap-4 flex-wrap w-full h-[75vh] rounded-xl bg-sky-50 p-2 shadow-md shadow-black/5 overflow-y-scroll">
          {cards.length > 0 ? (
            cards.map((card) => (
              <PostCard
                key={card.id}
                type={card.type}
                title={card.name}
                description={card.message}
                image={card.image}
              />
            ))
          ) : (
            <div className="justify-center items-center">
              <p className="w-[45%] text-center font-normal text-xl">
                It seems like your post pool is empty! Go to the{" "}
                <Link href="/postpool" className="text-sky-500">
                  Post Pool
                </Link>
                tab in the header section and start creating new posts..
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
