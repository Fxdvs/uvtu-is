import { getFeatures } from "@/lib/data/features";
import Link from "next/link";

export default function FeatureLinks() {
  return (
    <div className="h-min w-full flex flex-col z-0">
      {getFeatures().map((f) => (
        <Link
          className="w-full text-neutral-50/10 text-7xl text-center uppercase font-semibold hover:bg-neutral-100/10 hover:text-neutral-100   duration-200 transition-colors py-2"
          key={f.url}
          href={`/features/${f.url}`}
        >
          {f.title}
        </Link>
      ))}
    </div>
  );
}
