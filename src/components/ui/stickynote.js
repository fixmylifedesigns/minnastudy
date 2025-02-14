import Link from "next/link";

export default function Stickynote() {
  return (
    <div className="w-full bg-yellow-400 text-black text-center py-2 font-semibold">
      🎉 Apply for our Creator Grant for a chance to get a free professional
      website!{" "}
      <Link href="/creatorgrant" className="underline">
        Learn more
      </Link>
    </div>
  );
}
