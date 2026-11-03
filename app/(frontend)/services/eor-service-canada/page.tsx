import type { Metadata } from "next";
import Link from "next/link";
import ContactUs from "@/components/sections/contact-us";
import { SERVICES } from "@/constants/SERVICES";

export const metadata: Metadata = {
  title: "EOR Service in Canada | Employer of Record | Invisor CPA",
  description:
    "Employer of Record (EOR) support in Canada for employee onboarding, payroll coordination, and ongoing employment administration.",
  alternates: {
    canonical: "https://www.invisorcpa.ca/services/eor-service-canada",
  },
};

export default function Page() {
  const service = SERVICES.find((item) => item.slug === "eor-service-canada")!;
  return (
    <main>
      <section className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
        <Link href="/services" className="text-secondary font-medium">
          All Services
        </Link>
        <h1 className="text-primary mt-6 text-4xl font-bold sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-gray-600">
          {service.description}
        </p>
        <h2 className="text-primary mt-12 text-3xl font-bold">
          Build your team with Employer of Record support
        </h2>
        <p className="mt-4 max-w-3xl text-gray-600">
          An Employer of Record arrangement helps businesses manage the
          employment administration involved in hiring a team in Canada. Talk to
          us about your hiring plans so we can confirm the right service scope
          and responsibilities for your business.
        </p>
        <Link
          href="/contact-us"
          className="bg-primary mt-8 inline-block rounded-full px-6 py-3 font-semibold text-white"
        >
          Discuss Your Hiring Needs
        </Link>
      </section>
      {[
        { title: "Why Choose Our EOR Support?", items: service.why },
        { title: "What Our EOR Service Includes", items: service.includes },
        { title: "How to Get Started", items: service.our_process },
      ].map((section) => (
        <section
          key={section.title}
          className="px-4 py-12 even:bg-[#E5F2F8] sm:px-8 lg:px-16 xl:px-24"
        >
          <h2 className="text-primary mb-8 text-3xl font-bold">
            {section.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item) => (
              <article
                key={item.caption}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <h3 className="text-primary text-xl font-semibold">
                  {item.caption}
                </h3>
                <p className="mt-3 text-gray-600">{item.content}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
      <ContactUs />
    </main>
  );
}
