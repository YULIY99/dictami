import type { Metadata } from "next";
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
import { QUESTIONS } from "@/lib/faq";

// The canonical lives here rather than in the root layout: set there, it was
// inherited by the 404 page, which then declared the home page as its
// canonical URL.
export const metadata: Metadata = {
  alternates: { canonical: "https://dictami.com/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: QUESTIONS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
    </>
  );
}
