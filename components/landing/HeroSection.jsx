import Image from "next/image";
import Link from "next/link";
import { LANDING_IMAGES } from "./imageUrls";
import { IconArrowRight } from "./LandingIcons";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="grid min-h-[720px] gap-10 px-6 py-12 lg:grid-cols-2 lg:items-center lg:gap-4 lg:px-12 lg:py-16 container max-w-[1280px] mx-auto">
        <div className="order-2 flex max-w-xl flex-col gap-5 lg:order-1">
          <div>
            <h1 className="font-heading text-5xl leading-[1.1] tracking-[-0.08em] sm:text-6xl lg:text-[64px]">
              The New
            </h1>
            <h2 className="font-heading text-6xl leading-[1.05] tracking-tight sm:text-7xl lg:text-[80px]">
              <span className="text-gradient-title">X-Half White</span>
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-[#5d605e] sm:text-xl">
            Elegance meets performance. The highly anticipated X-HALF White has arrived, blending a
            minimalist aesthetic with Fujifilm&apos;s legendary imaging technology.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <Link
              href="/#product"
              className="rounded-full bg-[#1f2933] px-6 py-3 text-lg font-medium tracking-tight text-[#e5e7eb] transition hover:bg-[#2d3a47]"
            >
              Explore Product Page
            </Link>
            <Link
              href="/pre-order"
              className="inline-flex items-center gap-2 text-base font-semibold tracking-tight text-[#1f2933] transition hover:opacity-80"
            >
              Pre-order Now
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <div
            className="pointer-events-none absolute -inset-4 rounded-[48px] bg-[#f3e0c5]/20 blur-3xl"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
            <div className="relative aspect-[568/710] w-full">
              <Image
                src={LANDING_IMAGES.hero}
                alt="The Fujifilm X-Half White in a minimalist setting"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
