import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#062B52] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Royal Commercial Kitchen Cleaning and Staffing Group LLC"
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="/" className="hover:text-[#E5A91A]">
            Home
          </Link>

          <Link href="/gallery" className="hover:text-[#E5A91A]">
            Our Work
          </Link>

          <Link href="/request-service" className="hover:text-[#E5A91A]">
            Request Service
          </Link>

          <Link href="/contact" className="hover:text-[#E5A91A]">
            Contact
          </Link>
        </nav>

        <a
          href="/request-service"
          className="rounded-full bg-[#E5A91A] px-5 py-3 font-bold text-[#062B52]"
        >
          Get a Quote
        </a>

      </div>
    </header>
  );
}