import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO */}

        <section className="bg-[#062B52] px-6 py-20 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

            <div>

              <p className="mb-4 font-semibold uppercase tracking-widest text-[#E5A91A]">
                Royal Commercial Kitchen Cleaning & Staffing Group LLC
              </p>

              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Your Trusted Partner
                <span className="block text-[#E5A91A]">
                  For A Cleaner Kitchen
                </span>
                And A Stronger Team
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-200">
                Professional commercial kitchen cleaning and reliable
                restaurant staffing solutions designed to help your
                business run smoothly, safely and successfully.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  href="/request-service"
                  className="rounded-full bg-[#E5A91A] px-7 py-4 font-bold text-[#062B52]"
                >
                  Request Service
                </Link>

                <Link
                  href="/gallery"
                  className="rounded-full border border-white px-7 py-4 font-bold"
                >
                  View Our Work
                </Link>

              </div>

            </div>

            <div>
              <img
                src="/hero.jpg"
                alt="Professional commercial kitchen cleaning"
                className="rounded-3xl shadow-2xl"
              />
            </div>

          </div>
        </section>


        {/* SERVICES */}

        <section className="px-6 py-20">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">

              <p className="font-bold uppercase tracking-widest text-[#E5A91A]">
                What We Do
              </p>

              <h2 className="mt-2 text-4xl font-bold text-[#062B52]">
                Complete Restaurant Solutions
              </h2>

            </div>


            <div className="grid gap-8 md:grid-cols-2">

              <div className="rounded-3xl bg-[#062B52] p-8 text-white shadow-xl">

                <h3 className="text-3xl font-bold">
                  Commercial Kitchen Cleaning
                </h3>

                <p className="mt-4 text-gray-200">
                  A cleaner kitchen means a safer, healthier and more
                  professional restaurant.
                </p>

                <ul className="mt-8 space-y-4">

                  <li>✓ Deep Kitchen Cleaning</li>
                  <li>✓ Restaurant Cleaning</li>
                  <li>✓ Scheduled Maintenance</li>
                  <li>✓ Kitchen Equipment Cleaning</li>
                  <li>✓ Hood Cleaning</li>

                </ul>

              </div>


              <div className="rounded-3xl bg-[#E5A91A] p-8 text-[#062B52] shadow-xl">

                <h3 className="text-3xl font-bold">
                  Staffing Services
                </h3>

                <p className="mt-4">
                  Reliable people when your restaurant needs them.
                </p>

                <ul className="mt-8 space-y-4 font-semibold">

                  <li>✓ Cooks</li>
                  <li>✓ Servers</li>
                  <li>✓ Dishwashers</li>
                  <li>✓ Kitchen Assistants</li>
                  <li>✓ Cleaning Personnel</li>
                  <li>✓ Managers</li>

                </ul>

              </div>

            </div>

          </div>

        </section>

                {/* OTHER CLEANING SERVICES */}

        <section className="bg-[#F4F7FA] px-6 py-20">

          <div className="mx-auto max-w-7xl">

            {/* Section Header */}

            <div className="mx-auto mb-14 max-w-3xl text-center">

              <p className="font-bold uppercase tracking-widest text-[#E5A91A]">
                More Ways We Can Help
              </p>

              <h2 className="mt-2 text-4xl font-bold text-[#062B52]">
                Other Cleaning Services
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Royal provides professional cleaning solutions for more than
                restaurants. From commercial buildings and warehouses to
                post-construction sites, our team is prepared with the
                equipment and experience needed to handle demanding
                commercial cleaning projects.
              </p>

            </div>


            {/* Service Cards */}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {/* Carpet Cleaning */}

              <div className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5A91A] text-lg font-bold text-[#062B52]">
                  01
                </div>

                <h3 className="text-xl font-bold text-[#062B52]">
                  Carpet Cleaning
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Professional commercial carpet cleaning to remove dirt,
                  stains and buildup while helping maintain a cleaner and more
                  professional environment.
                </p>

              </div>


              {/* Tile & Grout */}

              <div className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5A91A] text-lg font-bold text-[#062B52]">
                  02
                </div>

                <h3 className="text-xl font-bold text-[#062B52]">
                  Tile & Grout Cleaning
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Deep cleaning for tile and grout to remove embedded dirt,
                  grease and buildup from high-traffic commercial areas.
                </p>

              </div>


              {/* Auto Scrubbing */}

              <div className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5A91A] text-lg font-bold text-[#062B52]">
                  03
                </div>

                <h3 className="text-xl font-bold text-[#062B52]">
                  Auto Scrubbing
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Machine floor scrubbing for large commercial spaces,
                  providing a deeper and more consistent clean than
                  traditional mopping.
                </p>

              </div>


              {/* Power Washing */}

              <div className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5A91A] text-lg font-bold text-[#062B52]">
                  04
                </div>

                <h3 className="text-xl font-bold text-[#062B52]">
                  Power Washing
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  High-pressure exterior cleaning for sidewalks, entrances,
                  loading areas, patios and other commercial surfaces.
                </p>

              </div>


              {/* Post Construction */}

              <div className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5A91A] text-lg font-bold text-[#062B52]">
                  05
                </div>

                <h3 className="text-xl font-bold text-[#062B52]">
                  Post-Construction Cleaning
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Detailed cleanup after construction or renovation,
                  including dust, debris and surface cleaning to prepare the
                  property for use.
                </p>

              </div>


              {/* Commercial Buildings */}

              <div className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5A91A] text-lg font-bold text-[#062B52]">
                  06
                </div>

                <h3 className="text-xl font-bold text-[#062B52]">
                  Commercial Building Cleaning
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Reliable cleaning services for offices, retail properties,
                  common areas and other commercial facilities.
                </p>

              </div>


              {/* Industrial / Warehouse */}

              <div className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-xl lg:col-span-1 lg:col-start-2 lg:max-w-none">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5A91A] text-lg font-bold text-[#062B52]">
                  07
                </div>

                <h3 className="text-xl font-bold text-[#062B52]">
                  Industrial Manufacturing Facility & Warehouse Cleaning
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Heavy-duty cleaning solutions for manufacturing facilities,
                  warehouses, distribution areas and other industrial environments.
                  Services can be customized based on the size, condition and
                  operational needs of the facility.
                </p>

              </div>

            </div>
            
            {/* Bottom CTA */}

            <div className="mt-12 text-center">

              <Link
                href="/request-service"
                className="inline-block rounded-full bg-[#062B52] px-8 py-4 font-bold text-white transition hover:bg-[#0b3b6d]"
              >
                Request a Cleaning Quote
              </Link>

            </div>

          </div>

        </section>


        {/* WHY ROYAL */}

        <section className="bg-gray-100 px-6 py-20">

          <div className="mx-auto max-w-7xl text-center">

            <h2 className="text-4xl font-bold text-[#062B52]">
              Why Restaurants Choose Royal
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-5">

              {[
                ["Reliable", "Dependable service and staffing."],
                ["Flexible", "Short-term or long-term solutions."],
                ["Save Time", "We handle the work so you can focus on business."],
                ["Food Safety", "Cleaner kitchens support safer operations."],
                ["Strong Teams", "Qualified people for your restaurant."]
              ].map(([title, description]) => (

                <div
                  key={title}
                  className="rounded-2xl bg-white p-6 shadow"
                >

                  <h3 className="text-xl font-bold text-[#062B52]">
                    {title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* CTA */}

        <section className="bg-[#062B52] px-6 py-20 text-center text-white">

          <h2 className="text-4xl font-bold">
            Ready to Partner With Royal?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            Tell us what your restaurant needs and our team will
            contact you to discuss the best solution.
          </p>

          <Link
            href="/request-service"
            className="mt-8 inline-block rounded-full bg-[#E5A91A] px-8 py-4 font-bold text-[#062B52]"
          >
            Request Service
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}