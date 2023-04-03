/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo-2.png";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  function openClose() {
    setNavbar(!navbar);
  }
  return (
    <nav className="w-full bg-[#0C1214] shadow">
      <div className="justify-between px-4 mx-auto   laptop:items-center laptop:flex laptop:px-8">
        <div>
          <div className="flex items-center justify-between py-3 laptop:py-1.5 laptop:block desktop:block tablet:py-2">
            <a href="javascript:void(0)">
              <img
                className="h-20 w-24 tablet:h-14 tablet:w-18"
                src={logo}
                alt="Logo"
              />
            </a>
            <div className="desktop:hidden laptop:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => {
                  openClose();
                }}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 laptop:block laptop:pb-0 laptop:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center laptop:  space-y-8 laptop:flex laptop:space-x-8 laptop:space-y-0">
              <li
                className={
                  location.pathname === "/"
                    ? "active text-white hover:text-indigo-200"
                    : "text-white hover:text-indigo-200"
                }
              >
                <Link
                  to={"/"}
                  onClick={() => {
                    openClose();
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/about"
                    ? "active text-white hover:text-indigo-200"
                    : "text-white hover:text-indigo-200"
                }
              >
                <Link
                  to={"/about"}
                  onClick={() => {
                    openClose();
                  }}
                >
                  About Us
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/programs"
                    ? "active text-white hover:text-indigo-200"
                    : "text-white hover:text-indigo-200"
                }
              >
                <Link
                  to={"/programs"}
                  onClick={() => {
                    openClose();
                  }}
                >
                  Our Programs
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/contact"
                    ? "active text-white hover:text-indigo-200"
                    : "text-white hover:text-indigo-200"
                }
              >
                <Link
                  to={"/contact"}
                  onClick={() => {
                    openClose();
                  }}
                >
                  Contact Us
                </Link>
              </li>{" "}
              <li
                className={
                  location.pathname === "/#"
                    ? "active text-white hover:text-indigo-200"
                    : "text-white hover:text-indigo-200"
                }
              >
                <Link
                  to={"#"}
                  onClick={() => {
                    openClose();
                  }}
                >
                  Market Place
                </Link>
              </li>
            </ul>

            <div className="mt-3 space-y-2 desktop:hidden laptop:hidden">
              <Link
                to={"/login"}
                className="inline-block w-full px-4 py-2 text-center  text-white border border-solid border-orange rounded-md shadow hover:bg-gray-800"
                onClick={() => {
                  openClose();
                }}
              >
                Sign in
              </Link>

              <Link
                to={"/register"}
                className="inline-block w-full px-4 py-2 text-center  text-white border border-solid border-orange rounded-md shadow hover:bg-gray-800"
                onClick={() => {
                  openClose();
                }}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className=" space-x-2 desktop:inline-block laptop:inline-block setRight">
          <Link
            to={"/login"}
            className="px-4 py-2 text-white border border-solid border-orange rounded-md shadow hover:bg-gray-800"
            onClick={() => {
              openClose();
            }}
          >
            Sign in
          </Link>

          <Link
            to={"/register"}
            className="px-4 py-2 text-white border border-solid border-orange rounded-md shadow hover:bg-gray-800"
            onClick={() => {
              openClose();
            }}
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
