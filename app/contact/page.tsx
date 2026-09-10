import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <img
            src="/logo.png"
            alt="Royal"
            className="mx-auto mb-8 h-32 w-auto"
          />

          <h1 className="text-4xl font-bold text-[#062B52]">
            Get In Touch
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Ready for a cleaner kitchen or a stronger team?
            Contact Royal today.
          </p>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <a
              href="tel:+17167919654"
              className="rounded-2xl bg-white p-8 shadow"
            >
              <h2 className="font-bold text-[#062B52]">
                Phone
              </h2>

              <p className="mt-3">
                (716) 791-9654
              </p>
            </a>


            <a
              href="tel:+17165770400"
              className="rounded-2xl bg-white p-8 shadow"
            >
              <h2 className="font-bold text-[#062B52]">
                Phone
              </h2>

              <p className="mt-3">
                (716) 577-0400
              </p>
            </a>


            <a
              href="mailto:royalcommercialstaffing@gmail.com"
              className="rounded-2xl bg-white p-8 shadow"
            >
              <h2 className="font-bold text-[#062B52]">
                Email
              </h2>

              <p className="mt-3 break-all">
                royalcommercialstaffing@gmail.com
              </p>
            </a>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}