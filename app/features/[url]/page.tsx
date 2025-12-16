import { getFeatureByUrl, generateFeatureParams } from "@/lib/data/features";
import { notFound } from "next/navigation";

import Feature from "@/components/pages/feature";
export function generateStaticParams() {
  return generateFeatureParams();
}

export default function FeaturePage({ params }: { params: { url: string } }) {
  const feature = getFeatureByUrl(params.url);

  if (!feature) return notFound();

  return (
    <Feature title={feature.title} text={feature.text} url={feature.url}/>
  );
}
