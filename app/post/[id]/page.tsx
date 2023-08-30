"use client";

import CustomTextArea from "@components/CustomTextArea";
import TextInput from "@components/TextInput";
import TypeIcon from "@components/TypeIcon";
import { usePost } from "@context/testContext";
import Image from "next/image";
import { useEffect } from "react";

interface PostProps {
  params: {
    id: string;
  };
}

interface Card {
  id: number;
  name: string;
  message: string;
  image: string;
  day: string;
  type: string; // You might want to use a more specific type here
  createdDate: string;
  history: {
    lastPosted: {
      date: string;
      time: string;
      groups: { groupId: string; postId: string }[];
    };
  };
}
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

const Post = ({ params }: PostProps) => {
  const { postData, setPostData } = usePost();

  console.log(postData);

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
              <TextInput defaultValue={postData.name}/>
              <CustomTextArea defaultValue={postData.message} placeholder="Enter your message here.." rows={4} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 col-span-6 row-span-5 col-start-4 bg-sky-50 p-2 shadow-md shadow-black/5 rounded-xl h-[88vh] overflow-y-scroll">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
