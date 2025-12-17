import { getFeatureByUrl, generateFeatureParams } from "@/lib/data/features";
import { notFound } from "next/navigation";

import Feature from "@/components/pages/feature";

type PageProps = {
  params: {
    url: string;
  };
};

export async function generateStaticParams() {
  return generateFeatureParams();
}

export default function FeaturePage({ params }: PageProps) {
  const feature = getFeatureByUrl(params.url);

  if (!feature) return notFound();

  return (
    <Feature
      title={feature.title}
      text={feature.text}
      url={feature.url}
    />
  );
}
