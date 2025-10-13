import Earth from "@/components/ui/globe";
export default function Iphone() {
  return (
    <div className="flex items-center justify-center absolute -bottom-50 right-5">
      {/* iPhone 15 Container */}
      <div className="relative w-72 h-[575px] rounded-[45px] shadow-[0_0_2px_2px_rgba(255,255,255,0.1)] border-8 border-neutral-100">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[90px] h-[22px] bg-zinc-900 rounded-full z-20"></div>

        <div className="absolute -inset-[1px] border-[3px] border-neutral-50 border-opacity-40 rounded-[37px] pointer-events-none"></div>

        {/* Screen Content */}
        <div className="relative w-full h-full rounded-[37px] overflow-hidden flex items-center justify-center bg-white">
          <Earth
            baseColor={[0.576, 0.773, 0.992]}
            markerColor={[1,1,1]}
            glowColor={[0.376, 0.647, 0.98]}
          />
        </div>

        {/* Left Side Buttons */}
        {/* Silent Switch */}
        <div className="absolute left-[-12px] top-20 w-[6px] h-8 bg-neutral-100 rounded-l-md shadow-md"></div>

        {/* Volume Up */}
        <div className="absolute left-[-12px] top-36 w-[6px] h-12 bg-neutral-100 rounded-l-md shadow-md"></div>

        {/* Volume Down */}
        <div className="absolute left-[-12px] top-52 w-[6px] h-12 bg-neutral-100 rounded-l-md shadow-md"></div>

        {/* Right Side Button (Power) */}
        <div className="absolute right-[-12px] top-36 w-[6px] h-16 bg-neutral-100 rounded-r-md shadow-md"></div>
      </div>
    </div>
  );
}
