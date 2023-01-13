import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import { navigationItems } from "../../constants/NavBar";

const HamburgerBar = () => {
  const router = useRouter();
  const currentPage = router.pathname;

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between md:hidden">
      <nav>
        <section className="flex">
          <div className="space-y-2" onClick={() => setIsNavOpen(!isNavOpen)}>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] bg-bckgrnd-light">
              {navigationItems.map(({ label, path }) => (
                <Link href={path} key={label} passHref>
                  <li
                    key={label}
                    className={`font-bold text-lg px-5 py-2 rounded-md whitespace-nowrap hover:bg-bckgrnd-dark hover:bg-opacity-50 hover:text-black cursor-pointer ${
                      currentPage === path
                        ? " bg-bckgrnd-dark bg-opacity-60"
                        : ""
                    }`}
                  >
                    {label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 60%;
        height: 100vh;
        top: 0;
        right: 0;
        background: #efefef;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default HamburgerBar;