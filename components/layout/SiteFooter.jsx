import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="bg-[#1f2933] text-[#e5e7eb]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-6 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-12 sm:py-6">
        <div className="space-y-6">
          <Link href="/" className="inline-block transition hover:opacity-80">
            <Image src="/imgs/logo-white.png" alt="X-Half White" width={150} height={55} />
          </Link>
        </div>
        <p className="text-base text-[#e5e7eb]/60">
          © 2026 Fujifilm Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
