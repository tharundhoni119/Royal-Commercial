import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const photos = [
  {
    src: "/gallery/cleaning-1.jpg",
    title: "Commercial Kitchen Cleaning",
    description: "Professional kitchen cleaning and sanitation."
  },
  {
    src: "/gallery/cleaning-2.jpg",
    title: "Deep Kitchen Cleaning",
    description: "Detailed cleaning of kitchen equipment and surfaces."
  },
  {
    src: "/gallery/cleaning-3.jpg",
    title: "Restaurant Kitchen",
    description: "Keeping restaurant kitchens clean and organized."
  },
  {
    src: "/gallery/cleaning-4.jpg",
    title: "Scheduled Maintenance",
    description: "Regular cleaning and maintenance services."
  }
];

export default function Gallery() {

  return (
    <>
      <Navbar />

      <main className="px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="font-bold uppercase tracking-widest text-[#E5A91A]">
              Our Work
            </p>

            <h1 className="mt-2 text-4xl font-bold text-[#062B52]">
              Cleaning Work & Results
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Take a look at examples of the professional cleaning
              services provided by Royal.
            </p>

          </div>


          <div className="grid gap-8 md:grid-cols-2">

            {photos.map((photo) => (

              <div
                key={photo.src}
                className="overflow-hidden rounded-3xl bg-white shadow-lg"
              >

                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-80 w-full object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold text-[#062B52]">
                    {photo.title}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    {photo.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}