import { getFeatureByUrl, generateFeatureParams } from "@/lib/data/features";
import { notFound } from "next/navigation";

import Feature from "@/components/pages/feature";


export default function FeaturePage() {
  const feature = getFeatureByUrl(generateFeatureParams()[0].url);

  if (!feature) return notFound();

  return (
    <Feature title={feature.title} text={feature.text} url={feature.url}/>
  );
}
