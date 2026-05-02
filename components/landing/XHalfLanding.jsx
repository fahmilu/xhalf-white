import SiteFooter from "../layout/SiteFooter";
import SiteHeader from "../layout/SiteHeader";
import AnnouncementGridSection from "./AnnouncementGridSection";
import HeroSection from "./HeroSection";
import PreOrderCtaSection from "./PreOrderCtaSection";
import ProductDetailSection from "./ProductDetailSection";

export default function XHalfLanding() {
  return (
    <div className="bg-white text-[#1f2933]">
      <SiteHeader />
      <div className="sticky top-0 z-10 border-y border-[#b0b2b0]/10 bg-[#1f2933]/95 py-3 backdrop-blur-[10px]">
          <div className="flex items-center justify-center gap-3 px-6 sm:px-12">
            <span className="text-[#f6f1eb]">
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 18 18" fill="currentColor" aria-hidden>
                <path d="M9 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm.75 3.75a.75.75 0 10-1.5 0v4.5a.75.75 0 001.5 0v-4.5zM9 12a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            </span>
            <p className="text-center font-manrope text-sm font-medium tracking-tight text-[#f6f1eb] sm:text-base">
              Limited Release: Only 50 units remaining for the First Edition launch.
            </p>
          </div>
      </div>
      <HeroSection />
      <AnnouncementGridSection />
      <ProductDetailSection />
      <PreOrderCtaSection />
      <SiteFooter />
    </div>
  );
}
