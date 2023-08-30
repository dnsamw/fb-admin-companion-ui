"use client";
import DailyTimeRangeInput from "@components/DailyTimeRangeInput";
import NumberInputX from "@components/NumberInputX";
import PostCardHorizontal from "@components/PostCardHorizontal";
import ToggleInput from "@components/ToggleInput";

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

export default function automation() {
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
    <div>
      <div className="grid grid-cols-10 grid-rows-5 gap-4 w-screen p-4 h-[92vh]">
        <div className="col-span-5 row-span-5 bg-white p-6 shadow-md shadow-black/5 rounded-xl flex flex-col gap-4">
          <div className="birthday-posts">
            <h4 className="font-semibold text-md py-4">Birthday Posts</h4>
            <div className="flex flex-col gap-4">
              <ToggleInput text="Automate birthday posts" />
              <NumberInputX defaultValue={10} text="Time delay between birthday posts on the same day" />
            </div>
          </div>
          <div className="other-posts">
            <h4 className="font-semibold text-md py-4">Other Posts</h4>
            <div className="flex flex-col gap-4">
              <ToggleInput text="Automate other posts" />
              <ToggleInput text="Autopost within most effective times ranges" />
              <DailyTimeRangeInput day="Monday" />
              <DailyTimeRangeInput day="Tuesday" />
              <DailyTimeRangeInput day="Wednesday" />
              <DailyTimeRangeInput day="Thursday" />
              <DailyTimeRangeInput day="Friday" />
              <DailyTimeRangeInput day="Saturday" />
              <DailyTimeRangeInput day="Sunday" />
            </div>
          </div>
        </div>
        <div className="col-span-5 row-span-5 col-start-6  bg-sky-100 p-2 shadow-md shadow-black/5 rounded-xl flex flex-col overflow-y-scroll gap-4">
          {cards.map((card) => (
            <PostCardHorizontal
              id={card.id}
              key={card.id}
              media={card.image}
              type={card.type}
              title={card.name}
              description={card.message}
              createdDate={card.createdDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
