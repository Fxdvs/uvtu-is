"use client"
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import Image from "next/image";
import Video from "./video";

export default function Device() {
  const { width } = useWindowSize();
  if (width < 768) return <>mobil</>;
  if (width < 1024) return <>tablet</>;
  if (width < 1440)
    return (
      <>
        <Image
          src="/assets/media/macbook-body.jpg"
          alt="Logo"
          width={1000}
          height={1000}
          className=""
        />
        
      </>
    );
  return (
    <>
      <Image
        src="/assets/media/desktop-body.png"
        alt="Logo"
        width={1000}
        height={1000}
        className=""
      />
      <Video />
    </>
  );
}
