export default function Footer() {
  return (
    <footer className="bg-[#062B52] px-6 py-12 text-white">

      <div className="mx-auto max-w-7xl text-center">

        <img
          src="/logo.png"
          alt="Royal Commercial Kitchen Cleaning and Staffing Group LLC"
          className="mx-auto mb-6 h-24 w-auto"
        />

        <h3 className="mb-4 text-2xl font-bold">
          Your Success is Our Priority!
        </h3>

        <p className="mb-2">
          Commercial Kitchen Cleaning & Staffing Services
        </p>

        <div className="mt-6 space-y-2">

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+17167919654">
              (716) 791-9654
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+17165770400">
              (716) 577-0400
            </a>
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:royalcommercialstaffing@gmail.com">
              royalcommercialstaffing@gmail.com
            </a>
          </p>

        </div>

        <div className="mt-8 border-t border-white/20 pt-6 text-sm">
          © {new Date().getFullYear()} Royal Commercial Kitchen Cleaning
          and Staffing Group LLC
        </div>

      </div>

    </footer>
  );
}