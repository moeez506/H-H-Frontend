/* eslint-disable prettier/prettier */
import React from "react";
import { useNavigate } from "react-router-dom";
// import { LogoutIcon } from '@heroicons/react/solid';

const LogoutButton = () => {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("auth-token");
    navigate("/home");
    console.log("Logged Out");
  }
  return (
    <button
      onClick={logout}
      className=" rounded-lg text-white bg-gradient-to-r from-orange to-yellow px-4 py-2 text-xl font-medium"
    >
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg> */}
      Logout
    </button>
  );
};

export default LogoutButton;
