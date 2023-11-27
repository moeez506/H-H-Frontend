/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
export default function BankDetails({ isOpen, setIsOpen }: any) {
  function openModal() {
    setIsOpen(!isOpen);
  }
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={openModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Bank Deposit Details
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <b>Bank Name: </b> Ecobank Cameroon <br /> <br />{" "}
                      <b>Account Name: </b> Holding Hand Community Network
                      Association <br />
                      <br /> <b>Account number: </b> 31415011488 <br /> <br />
                      <b>Reason/Purpose: </b> Membership Registration <br />{" "}
                      <br /> <b> Note: </b> Once you submit your application, we
                      will begin processing it only when we receive the
                      membership registration fee. If we do not receive proof of
                      payment within 5 business days, your application will be
                      closed <br />
                    </p>
                  </div>

                  {/* <div className="mt-4 flex justify-evenly items-center">
                    <button
                      type="button"
                      className=" rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={openModal}
                    >
                      I Agree!
                    </button>{" "}
                    <button
                      type="button"
                      className="rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={
                        isPayment === true
                          ? openModal // TODO: Change here if you want to naviagte somewhere else
                          : () => {
                              navigate("/home");
                            }
                      }
                    >
                      Deny!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
