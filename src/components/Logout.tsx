/* eslint-disable prettier/prettier */
import React from 'react';
// import { LogoutIcon } from '@heroicons/react/solid';

const LogoutButton = () => {
    function logout() {
        localStorage.removeItem('authToken');
        console.log("Logged Out");

    }
    return (
        <button
            onClick={logout}
            className="inline-flex items-center justify-center px-4 h-10 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>

            Logout
        </button>
    );
};

export default LogoutButton;

