import Image from "next/image";
import Link from "next/link";
import { LANDING_IMAGES } from "./imageUrls";
import { IconGift, IconPalette, IconSparkles } from "./LandingIcons";

export default function AnnouncementGridSection() {
  return (
    <section className="bg-[#f6f1eb] py-16 sm:py-20">
      <div className="container max-w-[1280px] mx-auto sm:px-12">
        <div className="mb-12 max-w-3xl space-y-4">
          <h2 className="font-heading text-4xl tracking-[-0.05em] sm:text-5xl lg:text-[60px]">
            Uncompromising Detail.
          </h2>
          <div className="h-1 w-24 bg-[#1f2933]" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-[auto_auto] md:gap-8">
          <article className="flex flex-col gap-6 rounded-[32px] bg-[#f1d296] p-8 md:col-span-2 md:min-h-[320px] md:flex-row md:items-stretch md:gap-10">
            <div className="flex flex-1 flex-col gap-6">
              <IconPalette className="h-8 w-8 shrink-0 text-[#1f2933]" />
              <h3 className="font-heading text-2xl sm:text-3xl">Pure Aesthetic</h3>
              <p className="text-lg leading-relaxed text-[#5d605e]">
                The new White Edition features a unique pearlescent finish and premium pebble-grain
                leatherette, designed to be a centerpiece of your creative kit.
              </p>
            </div>
            <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-2xl md:min-h-0">
              <Image
                src={LANDING_IMAGES.leather}
                alt="Close-up of the white leather texture on the Fujifilm X-Half White"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </article>

          <article className="flex flex-col justify-between gap-8 rounded-[32px] bg-[#ff8fb1]/40 p-8 md:col-span-1 md:min-h-[320px]">
            <div className="space-y-6">
              <IconGift className="h-8 w-8 text-[#1f2933]" />
              <h3 className="font-heading text-2xl">Launch Reward</h3>
              <p className="text-lg leading-relaxed text-[#1f2933]/90">
                Pre-order within the next 48 hours to receive an exclusive artisan leather strap and
                an additional 12-month extended warranty.
              </p>
            </div>
            <Link
              href="/pre-order"
              className="block w-full rounded-full bg-[#1f2933] py-3 text-center font-manrope text-sm font-semibold text-[#fff8f2] transition hover:bg-[#2d3a47]"
            >
              Secure Yours Now
            </Link>
          </article>

          <article className="rounded-[32px] bg-[#bec6bf] p-8 md:col-span-1 md:min-h-[360px]">
            <div className="flex h-full flex-col gap-6">
              <IconSparkles className="h-9 w-9 text-[#1f2933]" />
              <h3 className="font-heading text-2xl">Next-Gen Tech</h3>
              <p className="text-lg leading-relaxed text-[#1f2933]">
                Equipped with the latest X-Trans CMOS 4 sensor and a revolutionary compact lens design
                for the ultimate pocket-sized power.
              </p>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[32px] bg-white md:col-span-2 md:min-h-[360px]">
            <div className="relative aspect-[16/10] min-h-[280px] w-full md:absolute md:inset-0 md:aspect-auto md:min-h-[360px]">
              <Image
                src={LANDING_IMAGES.lifestyle}
                alt="The Fujifilm X-Half White in a lifestyle setting"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 66vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6b5d48]/40 via-transparent to-transparent" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
