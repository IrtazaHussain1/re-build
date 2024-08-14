// components/Header.tsx
import Link from "next/link";

export function Header() {
  return (
    <div className="flex">
      <MountainIcon className="h-6 w-6" />
      <span className="text-lg font-semibold">Smart Apply</span>
    </div>
  );
}



function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
