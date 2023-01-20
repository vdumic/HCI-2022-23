import { useContext } from "react";
import Link from "next/link";

import AppContext from "../../store/app-context";

const DropDownMenu = () => {
  const appCtx = useContext(AppContext);
  const isLoggedIn = appCtx.userData.isLoggedIn;

  return (
    <div className="relative">
      <div className="absolute right-0 z-10 w-44 mt-4 origin-top-right bg-bckgrnd-dark border border-gray-100 rounded-md shadow-lg">
        <div className="p-2">
          {!isLoggedIn && (
            <>
              <Link
                href="/login"
                className="block px-4 py-2 text-m text-black rounded-lg hover:bg-bckgrnd hover:text-gray-700"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block px-4 py-2 text-m text-black rounded-lg hover:bg-bckgrnd hover:text-gray-700"
              >
                Signup
              </Link>
            </>
          )}
          {isLoggedIn && (
            <Link
              href="/login"
              className="block px-4 py-2 text-m text-black rounded-lg hover:bg-bckgrnd hover:text-gray-700"
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
