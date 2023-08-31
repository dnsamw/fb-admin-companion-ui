
interface Card {
  id: number;
  name: string;
  message: string;
  image: string;
  day: string;
  type: string; // You might want to use a more specific type here
  createdDate: string;
  history: [
    {
      id: number;
      date: string;
      time: string;
      groups: { groupId: string; postId: string }[];
    }
  ];
}

export const cards: Card[] = [
  {
    id: 1,
    name: "Nayomi Thakshila",
    message: "Happy Birthday Nayomi Thakshila 🍰❤️",
    image: "/assets/images/nayomi-thakshila.jpg",
    day: "Sep-14",
    type: "birthday",
    createdDate: "2020-Aug-01",
    history: [
      {
        id: 1,
        date: "2023-Jul-23",
        time: "13:20",
        groups: [
          { groupId: "11111", postId: "1524341" },
          { groupId: "22222", postId: "5785676" },
          { groupId: "22222", postId: "5897999" },
          { groupId: "222w22", postId: "5897999" },
          { groupId: "2223322", postId: "5897999" },
        ],
      },
      {
        id: 2,
        date: "2023-may-20",
        time: "21:32",
        groups: [
          { groupId: "11111", postId: "1524341" },
          { groupId: "2223322", postId: "5897999" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Piumi Boteju",
    message: "Happy Birthday Piumi Boteju 🍰❤️",
    image: "/assets/images/piumi-boteju.jpg",
    day: "Feb-25",
    type: "birthday",
    createdDate: "2020-May-01",
    history: [
      {
        id: 1,
        date: "2023-Jul-23",
        time: "13:20",
        groups: [
          { groupId: "11111", postId: "1524341" },
          { groupId: "22222", postId: "5785676" },
          { groupId: "22222", postId: "5897999" },
          { groupId: "223222", postId: "5897999" },
          { groupId: "2224222", postId: "5897999" },
          { groupId: "222522", postId: "5897999" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Nimmy Manohari",
    message: "Happy Birthday Nayomi Thakshila 🍰❤️",
    image: "/assets/images/nimy-manohari.jpg",
    day: "Aug-03",
    type: "birthday",
    createdDate: "2020-May-01",
    history: [
      {
        id: 1,
        date: "2023-Jul-23",
        time: "13:20",
        groups: [
          { groupId: "11111", postId: "1524341" },
          { groupId: "22222", postId: "5785676" },
          { groupId: "22222", postId: "5897999" },
          { groupId: "222w22", postId: "5897999" },
          { groupId: "2223322", postId: "5897999" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Sandani Fernando",
    message: "Happy Birthday Sandani Fernando 🍰❤️",
    image: "/assets/images/sandani-fernando.jpg",
    day: "Jul-23",
    type: "birthday",
    createdDate: "2020-May-01",
    history: [
      {
        id: 1,
        date: "2023-Jul-23",
        time: "13:20",
        groups: [
          { groupId: "11111", postId: "1524341" },
          { groupId: "22222", postId: "5785676" },
          { groupId: "22222", postId: "5897999" },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Shalani Tharaka",
    message: "Happy Birthday Shalani Tharaka 🍰❤️",
    image: "/assets/images/shalani-tharaka.jpg",
    day: "Jul-23",
    type: "birthday",
    createdDate: "2020-May-01",
    history: [
      {
        id: 1,
        date: "2023-Jul-23",
        time: "13:20",
        groups: [
          { groupId: "11111", postId: "1524341" },
          { groupId: "22222", postId: "5785676" },
          { groupId: "22222", postId: "5897999" },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Shenaya Vanhoff",
    message: "Happy Birthday Shenaya Vanhoff 🍰❤️",
    image: "/assets/images/shenaya-vanhoff.jpg",
    day: "Jul-13",
    type: "birthday",
    createdDate: "2020-May-01",
    history: [
      {
        id: 1,
        date: "2023-Jul-23",
        time: "13:20",
        groups: [
          { groupId: "11111", postId: "1524341" },
          { groupId: "22222", postId: "5785676" },
          { groupId: "22222", postId: "5897999" },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Yashodha Wimaladharma",
    message: "Happy Birthday Yashodha Wimaladharma 🍰❤️",
    image: "/assets/images/yashodha-vimaldharma.jpg",
    day: "Dec-17",
    type: "birthday",
    createdDate: "2020-May-11",
    history: [
      {
        id: 1,
        date: "2023-Jul-23",
        time: "13:20",
        groups: [
          { groupId: "11111", postId: "1524341" },
          { groupId: "22222", postId: "5785676" },
          { groupId: "22222", postId: "5897999" },
        ],
      },
    ],
  },
];
