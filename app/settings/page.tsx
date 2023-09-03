"use client";
import Button from "@components/Button";
import NavBar from "@components/NavBar";
// import CustomTextArea from "@components/CustomTextArea";
import {signOut} from "next-auth/react";

export default function settings() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-10 grid-rows-5 gap-4 w-screen p-4 h-[92vh]">
        <div className="col-span-5 row-span-5  bg-white p-6 shadow-md shadow-black/5 rounded-xl flex flex-col">
          <div className="facebook">
            <h4 className="font-semibold text-xl py-4">Facebook Setings</h4>
            <div className="flex flex-col gap-4 w-[500px]">
              <Button
                handleClick={() => signOut()}
                tailwindColor="bg-red-500"
                tailwindHoverColor="bg-red-300"
                name="DISCONNECT FACEBOOK ACCOUNT"
              />
              <Button
                handleClick={() => {}}
                tailwindColor="bg-sky-500"
                tailwindHoverColor="bg-sky-300"
                name="ADD ANOTHER FACEBOOK ACCOUNT"
              />
            </div>
          </div>
          <div className="datsbases">
            <h4 className="font-semibold text-xl py-4">
              Data Sources Settings
            </h4>
            <div className="flex flex-col gap-4 w-[500px]"></div>
          </div>
        </div>
        <div className="col-span-5 row-span-5 col-start-6  bg-white p-6 shadow-md shadow-black/5 rounded-xl flex flex-col">
          <div className="facebook">
            <h4 className="font-semibold text-xl py-4">Facebook Setings</h4>
            <div className="flex flex-col gap-4 w-[500px]">
              <p>Your Long-lived Access Token</p>
              {/* <CustomTextArea
                placeholder="WERW3663GYGYGD984BDGI4DGI4DI4GD4DG48GO448GO4GO84GXO4GU4FD74GDO4VDI48794GD04D4VD94GD947FvvsvIYVIDYID749UO"
                rows={4}
              /> */}
              <h4 className="font-semibold text-xl py-4">
                Expiry Date :{" "}
                <span className="text-red-500">2023-December-12</span>
              </h4>
              <p>Your Short-lived Access Token</p>
              {/* <CustomTextArea

                placeholder="WERW3663GYGYGD984BDGI4DGI4DI4GD4DG48GO448GO4GO84GXO4GU4FD74GDO4VDI48794GD04D4VD94GD947FvvsvIYVIDYID749UO"
                rows={4}
              /> */}
              <Button
                handleClick={() => {
                  console.log("Settings");
                }}
                tailwindColor="bg-sky-500"
                tailwindHoverColor="bg-sky-300"
                name="EXTEND"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
