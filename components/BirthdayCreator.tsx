"use client";
import Image from "next/image";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";
import Button from "./Button";
import CustomCalendarDatePicker from "./CustomCalendarDatePicker";
import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { database } from "@firebase";
import { CldUploadButton } from "next-cloudinary";
import { ColorRing } from "react-loader-spinner";
// import CustomCalendarDatePicker from "./CustomCalendarDatePicker";

export default function BirthdayCreator({
  selectedOption,
  setPostPoolData,
  loading
}: {
  selectedOption: any;
  setPostPoolData: any;
  loading:boolean
}) {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState(null);
  const [loadingAdd, setLoadingAdd] = useState(false);

  const handleUpload = (result: any) => {
    console.log(result?.info?.secure_url);

    setUrl(result?.info?.secure_url);
  };

  const addClick = async () => {
    setLoadingAdd(true);
    const dataRef = collection(database, "Post-Pool");
    try {
      if (!name || !url || !selectedOption.value || !message) {
        toast.error("fill All field");
      } else {
        const q = query(dataRef, orderBy("uuid", "desc"), limit(1));
        let arr: any = [];
        let uuid: number;
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          arr.push(doc.data());
        });
        uuid = arr[0]?.uuid;
        if (uuid) {
          const res = await addDoc(
            dataRef,

            {
              name: name,
              uuid: uuid + 1,
              message: message,
              image: url,
              day: "SEP 13",
              type: selectedOption?.value,
              createdDate: "2020-02-02",
              history: {
                lastPosted: {
                  date: "",
                  time: "",
                  groups: [],
                },
              },
            }
          );

        

          setPostPoolData((pre: any) => {
             pre.pop();
           
            
            return [
              ...pre,
              {id:res.id,
                name: name,
                uuid: uuid + 1,
                message: message,
                image: url,
                day: "SEP 13",
                type: selectedOption?.value,
                createdDate: "2020-02-02",
                history: {
                  lastPosted: {
                    date: "",
                    time: "",
                    groups: [],
                  },
                },
              },
            ];
          });
        }

        toast.success("Success");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    setLoadingAdd(false);
  };

  return (
    <>
      <div className="flex flex-col gap-6 h-full p-6 rounded-xl">
        <div className="image-calendar flex justify-between gap-4">
          <CldUploadButton
            options={{ maxFiles: 1 }}
            onUpload={handleUpload}
            uploadPreset="ckq2avqm"
          >
            {url ? (
              <Image
                className="rounded-xl border border-1 border-sky-500 shadow-md shadow-black/5"
                src={url}
                alt="select image"
                width={250}
                height={250}
              />
            ) : (
              <Image
                className="rounded-xl border border-1 border-sky-500 shadow-md shadow-black/5"
                src={"/images/avatar.jpg"}
                alt="select image"
                width={250}
                height={250}
              />
            )}
          </CldUploadButton>
          <CustomCalendarDatePicker />
        </div>
        <div className="flex flex-col gap-4">
          <CustomInput placeholder="Name" setName={setName} name={name} />
          <CustomTextArea
            rows={4}
            placeholder="Write your caption here.."
            setMessage={setMessage}
            message={message}
          />
        </div>
        <div className="flex items-center justify-center">
          {loadingAdd ? (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          ) : (
            <Button
              handleClick={addClick}
              name="Create"
              tailwindColor="bg-sky-500"
              tailwindHoverColor="bg-sky-300"
            />
          )}
        </div>
      </div>
    </>
  );
}
