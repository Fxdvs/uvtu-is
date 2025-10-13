const layout = [
  { id: 1, className: "row-span-2 col-span-1" },
  { id: 2, className: "row-span-1 col-span-2" },
  { id: 3, className: "row-span-1 col-span-1" },
  { id: 4, className: "row-span-1 col-span-1" },
  { id: 5, className: "row-span-1 col-span-2" },
  { id: 6, className: "row-span-1 col-span-1" },
  { id: 7, className: "row-span-1 col-span-2" },
  { id: 8, className: "row-span-1 col-span-1" },
];

export default function ModulesGrid() {
  return (
    <div className="h-full w-[calc(100%-4rem)] grid grid-cols-4 grid-rows-3 gap-5">
      {layout.map((item, index) => (
        <div
          key={index}
          className={`${item.className} rounded-3xl bg-neutral-200/25 bg-backdrop-blur-sm border-neutral-100`}
        >

        </div>
      ))}
    </div>
  );
}
