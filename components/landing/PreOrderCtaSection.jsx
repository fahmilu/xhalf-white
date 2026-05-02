import Image from "next/image";
import Link from "next/link";
import { LANDING_IMAGES } from "./imageUrls";

export default function PreOrderCtaSection() {
  return (
    <section id="preorder" className="py-16 sm:py-20">
      <div className="container max-w-[1280px] mx-auto px-6 sm:px-12">
        <div className="overflow-hidden rounded-[32px] bg-[#f6f1eb]">
          <div className="grid md:grid-cols-[minmax(0,0.45fr)_1fr]">
            <div className="relative min-h-[280px] md:min-h-[548px]">
              <Image
                src={LANDING_IMAGES.footerCta}
                alt="X-Half White lifestyle"
                fill
                className="object-cover md:rounded-l-[32px]"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 px-8 py-12 text-center md:px-12 md:text-left">
              <h2 className="font-heading text-4xl tracking-[-0.05em] sm:text-5xl lg:text-[60px]">
                Your aesthetic, realized.
              </h2>
              <p className="mx-auto max-w-xl text-lg text-[#1f2933]/90 md:mx-0">
                Be among the first to own the new standard of minimalist imaging.
              </p>
              <div className="flex flex-col items-stretch justify-center gap-4 pt-4 sm:flex-row sm:flex-wrap md:justify-start">
                <Link
                  href="/pre-order"
                  className="rounded-full bg-[#1f2933] px-8 py-3 text-center text-lg font-semibold tracking-tight text-[#f6f1eb] transition hover:bg-[#2d3a47]"
                >
                  Pre-order Now
                </Link>
                <Link
                  href="/#product"
                  className="rounded-full border-2 border-[#1f2933] px-8 py-3 text-center text-lg font-semibold tracking-tight text-[#1f2933] transition hover:bg-[#1f2933]/5"
                >
                  Explore Product Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
