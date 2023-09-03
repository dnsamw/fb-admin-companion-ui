interface SideBarProps {
  data: any;
  loadingState: boolean;
}

import { Oval } from "react-loader-spinner";
import GroupItem from "./GroupItem";

export default function SideBar({ data, loadingState }: SideBarProps) {
  return (
    <div className="h-[88vh] rounded-xl transition-transform -translate-x-full sm:translate-x-0 bg-white p-2 shadow-md shadow-black/5">
      {!loadingState ? (
        <>
          <h3 className="text-md font-semibold text-center py-2">
            Facebook Groups ({data.length})
          </h3>
          <div className="flex flex-col gap-2 rounded-xl bg-sky-50 h-[92%] p-2 overflow-y-scroll ">
            {data.map((group:any) => (
              <GroupItem
                key={group.id}
                id={group.id}
                name={group.name}
                image={group.image}
              />
            ))}
          </div>{" "}
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <Oval
            height={80}
            width={80}
            color="#0ea5e9"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#cecece"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
    </div>
  );
}
