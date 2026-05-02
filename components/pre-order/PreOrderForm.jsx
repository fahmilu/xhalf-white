"use client";

import { useState } from "react";

const labelClass =
  "mb-2 block text-[10px] font-medium uppercase tracking-[0.05em] text-[#5d605e]";
const inputClass =
  "w-full border-0 border-b border-[#1f2933] bg-transparent py-1.5 text-base text-[#1f2933] outline-none ring-0 placeholder:text-[#b0b2b0]/60 focus:border-[#1f2933]";

export default function PreOrderForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [instagram, setInstagram] = useState("");
  const [pickupStore, setPickupStore] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto flex w-full max-w-[672px] flex-col gap-12 px-6 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-10">
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="max-w-[640px] font-manrope text-4xl font-light leading-none tracking-[-0.025em] text-[#303331] sm:text-5xl lg:text-[48px]">
          Reserve Your X-Half White
        </h1>
        <p className="max-w-lg text-lg leading-relaxed text-[#5b6063]">
          The Limited Launch Edition features unique serial numbering and an artisan leather
          accessory suite.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="rounded-[32px] border border-[#b0b2b0]/5 bg-[#f6f1eb] p-8 shadow-[0_1px_4px_rgba(0,0,0,0.05)] sm:p-12"
      >
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3 border-b border-[#b0b2b0]/10 pb-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xl font-medium tracking-tight text-[#303331]">
                FUJIFILM X-Half White
              </p>
              <p className="mt-1 text-xs font-normal uppercase tracking-[0.12em] text-[#5b6063]">
                LAUNCH EDITION
              </p>
            </div>
            <p className="text-2xl text-[#1f2933]">IDR 12.000.000</p>
          </div>

          <fieldset className="flex flex-col gap-6 border-0 p-0">
            <legend className="sr-only">Personal information</legend>

            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Elias Thorne"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="08123XXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="alias@alias.alias"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="address" className={labelClass}>
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows={4}
                placeholder="Your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={`${inputClass} min-h-[117px] resize-y border-b py-2`}
                required
              />
            </div>

            <div>
              <label htmlFor="instagram" className={labelClass}>
                Social media (Instagram)
              </label>
              <input
                id="instagram"
                name="instagram"
                type="text"
                autoComplete="off"
                placeholder="@your_instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="pickupStore" className={labelClass}>
                In-store pickup
              </label>
              <select
                id="pickupStore"
                name="pickupStore"
                value={pickupStore}
                onChange={(e) => setPickupStore(e.target.value)}
                className={`${inputClass} cursor-pointer appearance-none bg-[length:1rem] bg-[right_0_top_50%] bg-no-repeat py-2 pr-8`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%231f2933'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                }}
                required
              >
                <option value="" disabled>
                  Select preferred store
                </option>
                <option value="jakarta-flagship">Jakarta — Flagship</option>
                <option value="bandung-gallery">Bandung — Gallery</option>
                <option value="surabaya-gallery">Surabaya — Gallery</option>
                <option value="bali-boutique">Bali — Boutique</option>
              </select>
            </div>
          </fieldset>

          <div className="border-t border-transparent pt-2">
            <button
              type="submit"
              className="relative w-full rounded-full bg-[#1f2933] px-12 py-5 text-center text-base font-medium text-[#fff8f2] shadow-[0_25px_44px_-12px_rgba(107,93,72,0.2)] transition hover:bg-[#2d3a47]"
            >
              Secure Pre-order
            </button>
          </div>

          {submitted && (
            <p className="text-center text-sm text-[#5d605e]" role="status">
              Thanks — this is a demo. Connect your checkout or CRM to complete the flow.
            </p>
          )}
        </div>
      </form>

      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
        <div className="flex flex-1 flex-col gap-1 rounded-lg bg-[#cfe8f7] px-4 py-4 text-center sm:max-w-[304px]">
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#1f2933]">
            Limited release
          </p>
          <p className="text-[11px] leading-relaxed text-[#1f2933]">
            500 numbered units worldwide.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-1 rounded-lg bg-[#facbd4] px-4 py-4 text-center sm:max-w-[304px]">
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#1f2933]">
            Estimated pickup
          </p>
          <p className="text-[11px] leading-relaxed text-[#1f2933]">Dispatching Fall 2026.</p>
        </div>
      </div>
    </div>
  );
}
