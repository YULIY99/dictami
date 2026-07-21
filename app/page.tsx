import Script from "next/script";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Speed } from "@/components/Speed";
import { Apps, Demo, Features, Languages, WhyPay } from "@/components/Sections";
import { Pricing } from "@/components/Pricing";
import { Savings } from "@/components/Savings";
import { Guide } from "@/components/Guide";
import { Faq } from "@/components/Faq";
import { Closing } from "@/components/Closing";
import { Support } from "@/components/Support";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Apps />
        <Speed />
        <Demo />
        <Features />
        <Languages />
        <WhyPay />
        <Savings />
        <Pricing />
        <Guide />
        <Faq />
      </main>
      <Closing />

      {/* The live chat the owner answers, behind the page's own launcher. */}
      <Support />

      {/* Gumroad's overlay checkout, loaded after the page is interactive. */}
      <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />
    </>
  );
}
