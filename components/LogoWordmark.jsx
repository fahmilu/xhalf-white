export default function LogoWordmark({ className = "", inverted }) {
  return (
    <div
      className={`font-heading text-xl tracking-tight sm:text-2xl ${inverted ? "text-[#e5e7eb]" : "text-[#1f2933]"} ${className}`}
    >
      X<span className="font-normal opacity-80">-</span>HALF
    </div>
  );
}
