import Image from "next/image";
import Link from "next/link";
import { LANDING_IMAGES } from "./imageUrls";

export default function ProductDetailSection() {
  return (
    <section id="product" className="bg-[#faf9f7] py-16 sm:py-20">
      <div className="relative mx-auto max-w-[1184px] px-6 sm:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_25px_44px_-12px_rgba(0,0,0,0.25)]">
              <div className="relative aspect-[555/741] w-full max-w-xl">
                <Image
                  src={LANDING_IMAGES.productTop}
                  alt="Fujifilm X-Half White top view"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
            </div>
            <p className="font-heading pointer-events-none absolute bottom-8 left-4 max-w-[90%] text-5xl leading-[0.95] tracking-[-0.06em] text-[#1f2933] drop-shadow-sm sm:bottom-6 sm:left-8 sm:text-6xl lg:text-[96px]">
              Half the frame
              <br />
              <span className="text-white">all the feeling</span>
            </p>
          </div>
          <div className="flex flex-col gap-8 pb-4 lg:pb-12">
            <p className="text-lg leading-relaxed text-[#5d605e]">
              Every dial, every button, and every curve has been reconsidered for the digital age.
              The X-HALF White isn&apos;t just a camera—it&apos;s an extension of your creative vision,
              ready to capture life&apos;s most beautiful moments the second they happen.
            </p>
            <Link
              href="/pre-order"
              className="inline-flex w-fit rounded-full bg-[#1f2933] px-6 py-4 text-lg font-semibold tracking-tight text-[#e5e7eb] transition hover:bg-[#2d3a47]"
            >
              Pre-order Now
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute top-[60px] right-0 flex-row w-fit flex-nowrap flex gap-4">
              <div className="relative aspect-[390/290] overflow-hidden rounded-lg shadow h-[300px]">
                <Image
                  src={LANDING_IMAGES.floatA}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="relative aspect-[390/290] overflow-hidden rounded-lg shadow h-[300px]">
                <Image
                  src={LANDING_IMAGES.floatB}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
      </div>
    </section>
  );
}
