'use client'
import React, { useState } from "react";
import DatePicker from "tailwind-datepicker-react";

export default function CustomDatePicker() {
  const options = {
    title: "Birthday",
    autoHide: true,
    todayBtn: false,
    clearBtn: false,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-white dark:bg-white",
      todayBtn: "text-black dark:text-black",
      clearBtn: "bg-sky-500 dark:bg-sky-500",
      icons: "bg-white dark:bg-white text-md font-light text-black dark:text-black hover:bg-sky-200",
      text: "border border-gray-300 rounded-xl font-light text-black dark:text-black",
      disabledText: "bg-gray-200",
      input: "bg-white text-md font-light dark:bg-white text-black dark:text-black shadow-md shadow-black/5 dark:border dark:border-gray-300",
      inputIcon: "",
      selected: "bg-sky-500 dark:bg-sky-500 text-white",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date("2022-01-01"),
    language: "en",
  };

  const [show, setShow] = useState(false);
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <div>
      <DatePicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
}
