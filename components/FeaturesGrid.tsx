import { getFeatures } from "@/lib/data/features";
import { GlowingEffect } from "./ui/GlowingEffect";
import Link from "next/link";

export default function FeaturesGrid() {
  return (
    <div className="h-4/6 w-[90%] grid grid-cols-5 grid-rows-3 gap-2">
      {getFeatures().map((f) => (
        <Link
          href={`features/${f.url}`}
          rel="noopener noreferrer"
          className={`size-full flex flex-col p-5 relative bg-neutral-950/50 backdrop-blur-lg rounded-xl col-span-${f.col} row-span-${f.row} cursor-default`}
          key={f.url}
        >
          <GlowingEffect
            spread={75}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={2.5}
          />
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-300 font-semibold">
            {f.title}
          </h1>
          <p className="text-lg text-neutral-300 mt-2 whitespace-pre-line text-ellipsis max-h-full overflow-hidden line-clamp-7">
            {f.text}
          </p>
        </Link>
      ))}
    </div>
  );
}
