import { getFeatureByUrl, generateFeatureParams } from "@/lib/data/features";
import { notFound } from "next/navigation";

import Feature from "@/components/pages/feature";

type PageProps = {
  params: Promise<{
    url: string;
  }>;
};

export async function generateStaticParams() {
  return generateFeatureParams();
}

export default async function FeaturePage({ params }: PageProps) {
  const { url } = await params;
  const feature = getFeatureByUrl(url);

  if (!feature) return notFound();

  return (
    <Feature title={feature.title} text={feature.text} url={feature.url} />
  );
}
