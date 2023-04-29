/* eslint-disable prettier/prettier */
import React from "react";
import { Link, NavLink } from "react-router-dom";
function HeadAndSearch() {
  return (
    <>
      <div className="mt-24 ml-24 mr-24 mobile:ml-0 mobile:mr-0 ">
        <div className="flex justify-between items-center mb-8 mr-8">
          <a
            className={
              location.pathname === "/member"
                ? "text-orange px-4 py-2 mr-20 border-b border-orange font-bold"
                : "text-orange px-4 py-2 mr-20 border-b border-orange font-bold"
            }
          >
            <Link to={"/members"}>Members</Link>
          </a>
          {/* <button className="bg-orange text-white px-4 py-2 ml-4"> */}
            <NavLink to={"/individual-CreateMember"} className="bg-orange text-white px-4 py-2 ml-4">Add User</NavLink> 
          {/* </button>{" "} */}
        </div>
        <div className="relative mb-6 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className="rounded-2xl relative m-0 block w-[1px] min-w-0 flex-auto  border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <span
            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
            id="basic-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                // fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                // clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}
export default HeadAndSearch;
