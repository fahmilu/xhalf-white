import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="border-b border-[#b0b2b0]/10 bg-[#faf9f7]/80 backdrop-blur-[21px]">
      <div className="container max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between gap-6 px-6 py-6 sm:px-[49px]">
          <Link href="/" className="transition hover:opacity-80">
            <Image src="/imgs/logo.jpg" alt="X-Half White" width={150} height={55} />
          </Link>
          <Link
            href="/pre-order"
            className="rounded-full bg-[#1f2933] px-6 py-3 font-manrope text-sm font-bold tracking-tight text-[#e5e7eb] transition hover:bg-[#2d3a47]"
          >
            Pre-order Now
          </Link>
        </div>
      </div>
    </header>
  );
}
