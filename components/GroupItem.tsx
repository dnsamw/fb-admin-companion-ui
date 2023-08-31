interface GroupItemProps {
  id: number;
  name: string;
  image: string;
}
import Image from "next/image";

export default function GroupItem({ id, name, image }: GroupItemProps) {
  return (
    <div
      id={id.toString()}
      className="flex items-center gap-3 bg-white w-full p-2 rounded-xl border border-zinc-100 shadow-md shadow-black/5 hover:bg-sky-200 hover:cursor-pointer"
    >
      <div className="w-[50px] h-[50px] shadow-md shadow-black/5">
      <div className="relative w-full h-full">
      <Image
        src={image}
        alt={name}
        layout="fill"
        className="object-cover rounded-full "
        objectFit="cover"
        objectPosition="center"
      />
      </div>
      </div>
      <span className="font-semibold">{name}</span>
    </div>
  );
}
