import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-10 pt-14">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="flex justify-items-center items-center w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 max-w-[160px]">
                <h1 className="font-bold text-5xl">Aesthetica</h1>
              </Link>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-xl mb-10 font-bold">Help & Information</h4>
              <ul>
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer text-lg mb-2 inline-block leading-8"
                  >
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer text-lg mb-2 inline-block leading-8"
                  >
                    Payment Options
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer text-lg mb-2 inline-block leading-8"
                  >
                    Order Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer text-lg mb-2 inline-block leading-8"
                  >
                    Store Locations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-xl mb-10 font-bold">About Us</h4>
              <ul>
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer text-lg mb-2 inline-block leading-8"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer text-lg mb-2 inline-block leading-8"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer text-lg mb-2 inline-block leading-8"
                  >
                    Environment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer text-lg mb-2 inline-block leading-8"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-xl mb-10 font-bold">Newsletter</h4>
              <form class="w-9/12 max-w-sm">
                <div class="flex items-center border-b border-black py-2">
                  <input
                    class="appearance-none bg-transparent border-none w-9/12 text-{#949494} text-sm mr-3 py-1 px-2 leading-4 focus:outline-none"
                    type="text"
                    placeholder="Your email..."
                    aria-label="Email"
                  />
                  <Link href="/">
                    <BsArrowRight className="hidden h-6 w-6 sm:inline cursor-pointer" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="text-xl mb-10 font-bold">Follow Us</h4>
              <div className="mb-6 flex items-center">
                <Link
                  href="/"
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <FaFacebook className="hidden h-6 w-6 sm:inline cursor-pointer" />
                </Link>
                <Link
                  href="/"
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <FaInstagram className="hidden h-6 w-6 sm:inline cursor-pointer" />
                </Link>
                <Link
                  href="/"
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <FaYoutube className="hidden h-6 w-6 sm:inline cursor-pointer" />
                </Link>
                <Link
                  href="/"
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <FaTwitter className="hidden h-6 w-6 sm:inline cursor-pointer" />
                </Link>
              </div>
              <p className="text-body-color text-base">
                &copy; 2023 Aesthetica
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
