import SiteFooter from "../../components/layout/SiteFooter";
import SiteHeader from "../../components/layout/SiteHeader";
import PreOrderForm from "../../components/pre-order/PreOrderForm";

export const metadata = {
  title: "Reserve Your X-Half White",
  description:
    "Secure your Limited Launch Edition of the Fujifilm X-Half White with unique serial numbering and artisan leather accessories.",
};

export default function PreOrderPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1f2933]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col">
        <SiteHeader />
        <main className="flex-1">
          <PreOrderForm />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
