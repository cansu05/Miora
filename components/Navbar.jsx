"use client";
import Image from "next/image";
import profileDefault from "@/assets/images/profile.png";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { GiLotus } from "react-icons/gi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="bg-[#EA5255] border-b border-[#F1EDE4]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#BAB456] hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <Link className="flex flex-shrink-0 items-center" href="/">
              <GiLotus className="text-white h-6 w-6" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Miora
              </span>
            </Link>
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-2">
                <Link
                  href="/"
                  className={`${
                    pathname === "/"
                      ? "bg-[#F1EDE4] text-[#BAB456]"
                      : "text-white"
                  } hover:bg-[#F1EDE4] hover:text-[#BAB456] rounded-md px-3 py-2`}
                >
                  Home
                </Link>
                <Link
                  href="/properties"
                  className={`${
                    pathname === "/properties"
                      ? "bg-[#F1EDE4] text-[#BAB456]"
                      : "text-white"
                  } hover:bg-[#F1EDE4] hover:text-[#BAB456] rounded-md px-3 py-2`}
                >
                  Properties
                </Link>
                {isLoggedIn && (
                  <Link
                    href="/properties/add"
                    className={`${
                      pathname === "/properties/add"
                        ? "bg-[#F1EDE4] text-[#BAB456]"
                        : "text-white"
                    } hover:bg-[#F1EDE4] hover:text-[#BAB456] rounded-md px-3 py-2`}
                  >
                    Add Property
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged Out) --> */}
          {!isLoggedIn && (
            <div className="hidden md:block md:ml-6">
              <div className="flex items-center">
                <button className="flex items-center text-white bg-[#BAB456] hover:bg-[#F1EDE4] hover:text-[#BAB456] rounded-md px-3 py-2">
                  <FaGoogle className=" hover:text-[#BAB456] mr-2" />
                  <span>Login or Register</span>
                </button>
              </div>
            </div>
          )}

          {/* <!-- Right Side Menu (Logged In) --> */}
          {isLoggedIn && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <Link href="/messages" className="relative group">
                <button
                  type="button"
                  className="relative rounded-full bg-[#F1EDE4] p-1 text-[#BAB456] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-[#BAB456]"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-[#BAB456] rounded-full">
                  2
                  {/* <!-- Replace with the actual number of notifications --> */}
                </span>
              </Link>
              {/* <!-- Profile dropdown button --> */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-[#F1EDE4] text-sm "
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="h-8 w-8 rounded-full"
                      src={profileDefault}
                      alt=""
                    />
                  </button>
                </div>

                {/* <!-- Profile dropdown --> */}
                {isProfileMenuOpen && (
                  <div
                    id="user-menu"
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#F1EDE4] py-1 shadow-lg "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-[#BAB456]"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </Link>
                    <Link
                      href="/properties/saved"
                      className="block px-4 py-2 text-sm text-[#BAB456]"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      Saved Properties
                    </Link>
                    <button
                      className="block px-4 py-2 text-sm text-[#BAB456]"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMobileMenuOpen && (
        <div id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "bg-[#F1EDE4] text-[#BAB456]" : "text-white"
              } block rounded-md px-3 py-2 text-base font-medium`}
            >
              Home
            </Link>
            <Link
              href="/properties"
              className={`${
                pathname === "/properties"
                  ? "bg-[#F1EDE4] text-[#BAB456]"
                  : "text-white"
              } block rounded-md px-3 py-2 text-base font-medium`}
            >
              Properties
            </Link>
            {isLoggedIn && (
              <Link
                href="/properties/add"
                className={`${
                  pathname === "/properties/add"
                    ? "bg-[#F1EDE4] text-[#BAB456]"
                    : "text-white"
                } block rounded-md px-3 py-2 text-base font-medium`}
              >
                Add Property
              </Link>
            )}
            {!isLoggedIn && (
              <button className="flex items-center text-white bg-[#BAB456] hover:bg-[#F1EDE4] hover:text-[#BAB456] rounded-md px-3 py-2 my-4">
                <i className="fa-brands fa-google mr-2"></i>
                <span>Login or Register</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
