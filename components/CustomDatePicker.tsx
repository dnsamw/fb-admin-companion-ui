'use client'
import React, { useState } from "react";
import DatePicker from "tailwind-datepicker-react";

export default function CustomDatePicker() {
  const options = {
    title: "Birthday",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-white dark:bg-white",
      todayBtn: "",
      clearBtn: "bg-sky-500 dark:bg-sky-500",
      icons: "",
      text: "text-black dark:text-black",
      disabledText: "bg-gray-200",
      input: "",
      inputIcon: "",
      selected: "bg-sky-500 dark:bg-sky-500 text-white dark:text-white",
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
