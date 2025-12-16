import Link from "next/link";

export default function PriceButton() {
  return (
    <Link href="pricing" className="h-5 w-full p-5 mt-5 rounded-full border border-neutral-50/10 relative flex items-center justify-center hover:border-white hover:bg-neutral-100 duration-300 transition-colors group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="size-5 text-neutral-50/15 group-hover:text-neutral-900 transition-colors duration-200"
        viewBox="0 0 16 16"
      >
        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
      </svg>
    </Link>
  );
}
