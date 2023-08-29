interface DailyTimeRangeInputProps{
    day:string;
}

export default function DailyTimeRangeInput({day}:DailyTimeRangeInputProps) {
  return (
    <>
      <div className="input flex items-center justify-between px-10">
        <p className="font-light text-md">{day}</p>
        <input
          type="number"
          min="1"
          placeholder="Ex: 4"
          name="frequency"
          id="frequency"
          className="border border-gray-300 rounded-full px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500 block p-2.5 shadow-md shadow-black/5"
        />
        <input
          type="number"
          min="1"
          placeholder="Ex: 4"
          name="frequency"
          id="frequency"
          className="border border-gray-300 rounded-full px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500 block p-2.5 shadow-md shadow-black/5"
        />
      </div>
    </>
  );
}
