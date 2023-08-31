import Image from "next/image";
import React from "react";
import GroupItem from "./GroupItem";

export default function SideBar() {
  const groups = [
    { id: 278420120505130, name: "ලංකාවේ නිළියෝ - Actresses Of SriLanka", image: "/assets/images/fbgroups/yoyan.jpg" },
    { id: 449989743123463, name: "සුරූපී නිළියන්ගේ ලෝකය", image: "/assets/images/fbgroups/surupi.jpg" },
    { id: 336716457994235, name: "ලංකාවේ නිළියන් Sri lanka Actress", image: "/assets/images/fbgroups/yoyan.jpg" },
    { id: 437203391308789, name: "Piyumi Boteju Fan Club", image: "/assets/images/fbgroups/boteju.jpg" },
    { id: 649451209528397, name: "තරු මංසල", image: "/assets/images/fbgroups/tharu.jpg" },
    { id: 416600880528629, name: "Nirosha Virajini Fan Club", image: "/assets/images/fbgroups/nirosha.jpg" },
    { id: 3176360885952489, name: "Himali Sayurangi Fan Club", image: "/assets/images/fbgroups/himali.jpg" },
    { id: 1725024901164576, name: "Dhanushka Jayarathna Fan club", image: "/assets/images/fbgroups/dhanushka.jpg" },
    { id: 1201803790611473, name: "Shalika Edirisingha Fan club", image: "/assets/images/fbgroups/shalika.jpg" },
    { id: 596438455172718, name: "Semini Iddamalgoda Fan Club", image: "/assets/images/fbgroups/semini.jpg" },
    { id: 368742622047897, name: "Piyumi Hansamali Fan Club", image: "/assets/images/fbgroups/hansamali.jpg" },
    { id: 396860688464149, name: "Sachinthani Kaushalya - (දිගැසී) Official Fanclub ❤️", image: "/assets/images/fbgroups/hansamali.jpg" },
    { id: 521373206718316, name: "Model Hub - Saragi niliyo", image: "/assets/images/fbgroups/hansamali.jpg" },
    { id: 493504969034073, name: "World of Celebrities", image: "/assets/images/fbgroups/hansamali.jpg" },
    { id: 500075024464049, name: "CRUSH", image: "/assets/images/fbgroups/hansamali.jpg" },
  ];

  return (
    <div className="h-[88vh] rounded-xl transition-transform -translate-x-full sm:translate-x-0 bg-white p-2 shadow-md shadow-black/5">
      <h3 className="text-md font-semibold text-center py-2">
        Facebook Groups ({groups.length})
      </h3>
      <div className="flex flex-col gap-2 rounded-xl bg-sky-50 h-[92%] p-2 overflow-y-scroll ">
        {groups.map((group) => (
          <GroupItem
            key={group.id}
            id={group.id}
            name={group.name}
            image={group.image}
          />
        ))}
      </div>
    </div>
  );
}
