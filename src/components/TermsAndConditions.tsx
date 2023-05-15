/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
export default function TermsAndConditions({
  isOpen,
  setIsOpen,
  isPayment = false,
}: any) {
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
                    Terms And Conditions
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <b>Introduction</b> Welcome to H&H and we are happy you
                      are on the way to becoming a member of this organization.
                      By registering as a member you, therefore, agree to be
                      bound by the following terms and conditions. If you
                      disagree with any part of these terms and conditions, you
                      must not use our services. By registering with Holding
                      Hands Community you agree to the following terms and
                      conditions. <br /> <b> Governing terms and conditions</b>{" "}
                      I have read membership terms and conditions, and internal
                      rules governing the organization <br />{" "}
                      <b>User Account</b> In order to use the Platform, you must
                      create a user account by providing accurate and complete
                      information about yourself or the organization you are
                      representing. You are responsible for maintaining the
                      confidentiality of your account and password, and for all
                      activities that occur under your account. <br />
                      <b>Eligibility</b> By registering for the Platform, you
                      represent and warrant that you are at least 18 years of
                      age and have the legal capacity to enter into and comply
                      with these Terms. <br /> <b>User Conduct</b> you agree to
                      comply with all applicable laws and regulations. You may
                      not use our services for any illegal or unauthorized
                      purpose, or in a manner that infringes on the rights of
                      others. <br /> <b>Privacy and Data Protection</b> You
                      agree to our privacy poilcy .We are committed to
                      protecting your privacy and personal information. We
                      collect and use personal information only for the purposes
                      of providing our services and fulfilling our legal
                      obligations. We do not share your personal information
                      with third parties, except as required by law or with your
                      consent for verification purposes. <br />{" "}
                      <b>Governing Law and Jurisdiction</b> These terms and
                      conditions shall be governed by and construed in
                      accordance with the laws of the state/province/country
                      where our company is based. Any disputes arising from
                      these terms and conditions shall be resolved exclusively
                      by the courts of that jurisdiction. We make every effort
                      to display and describe our our services on our website.
                      However, we cannot guarantee that all information, images,
                      and descriptions are error-free or complete. We reserve
                      the right to modify or update any information at any time
                      without prior notice. <br />
                      <b>Indemnification</b> You agree to indemnify and hold
                      harmless our company, its affiliates, officers, directors,
                      employees, and agents from any and all claims,
                      liabilities, damages, and expenses (including reasonable
                      attorney's fees) arising from your use of our services,
                      your violation of these terms and conditions, or your
                      infringement of any intellectual property or other rights
                      of any third party. <br />
                      <b>Severability</b> If any provision of these terms and
                      conditions is found to be invalid or unenforceable, the
                      remaining provisions shall remain in full force and
                      effect. <br />
                      <b>Waiver</b> Our failure to enforce any provision of
                      these terms and conditions shall not be deemed a waiver of
                      such provision or our right to enforce such provision in
                      the future. <br />
                      <b> Third-Party Links and Services</b> Our website may
                      contain links to third-party websites or services that are
                      not owned or controlled by us. We are not responsible for
                      the content, privacy policies, or practices of these
                      third-party websites or services. Your use of such
                      third-party websites or services is at your own risk.
                      <br /> <b> Entire Agreement</b> These terms and
                      conditions, together with our privacy policy and any other
                      agreements or policies referenced herein, constitute the
                      entire agreement between you and our company regarding
                      your use of our services.
                      <br /> <b> Modification of Terms and Conditions</b> We
                      reserve the right to modify or update these terms and
                      conditions at any time by informing members only. Your
                      continued use of our services after any changes to the
                      terms and conditions constitutes your acceptance of the
                      updated terms. Termination of Services We reserve the
                      right to terminate your access to our services at any time
                      without prior notice if we believe that you have violated
                      these terms and conditions or any applicable laws or
                      regulations.
                      <br /> <b> Third Party Sellers</b>  Thou H&H will ensure
                      to verify all the services ,products ,businesses
                      advertised on our platform by our members ,H&H cannot
                      guarantee members conduct be consistent .By using H&H
                      community Market place you agree to the following 1. You
                      understand and agree that the H&H does not assume any
                      responsibility or liability for the actions , services or
                      products of third party sellers. 2. You agree to perform
                      their own due diligence when interacting with third party
                      sellers and understand that the platform does not endorse
                      any particular seller. 3. We do not guarantee the quality,
                      safety, or legality of any products or services provided
                      by third party sellers, and users assume all risks
                      associated with interacting with them. 4. In the event of
                      a dispute with a third party seller, user should contact
                      the seller directly to attempt to resolve the issue. The
                      platform reserves the right to step in and mediate
                      disputes if necessary. 5. Our market place reserves the
                      right to terminate the relationship with any third party
                      seller who violates platform policies or engages in
                      unethical or illegal behaviour. 6. You understand that any
                      transactions or interactions with third party sellers are
                      solely between the user and the seller, and the platform
                      is not a party to such transactions or interactions. 7.
                      Users agree to indemnify and hold the platform harmless
                      from any and all claims, damages, or losses arising from
                      their interactions with third party sellers on the
                      platform. 8. Users agree to comply with all laws and
                      regulations governing their interactions with third party
                      sellers on the platform, including but not limited to laws
                      governing intellectual property, consumer protection, and
                      privacy. 9. The platform may collect and use data about
                      users' interactions with third party sellers, including
                      but not limited to transaction information and feedback,
                      to improve the platform's services and to monitor
                      compliance with platform policies. 10. Users may not use
                      the platform to engage in any activity that violates
                      applicable laws or infringes upon the rights of third
                      party sellers or other users. 11. The platform reserves
                      the right to modify, suspend, or terminate any third party
                      seller's access to the platform at any time for any
                      reason. 12. Users understand and agree that the platform
                      is not responsible for any taxes, fees, or other charges
                      that may be levied on transactions between users and third
                      party sellers. 13. Users agree not to engage in any
                      activity that could harm or disrupt the platform's
                      services or infrastructure, including but not limited to
                      hacking, spamming, or distributing malware. 14. Users
                      agree to provide accurate and up-to-date information about
                      themselves when interacting with third party sellers on
                      the platform, and to keep such information confidential
                      and secure. <br />
                      <b>Payment terms and condition </b> 1. Payment: By
                      registering for membership with our organization, you
                      agree to pay the registration fee as stated on our website
                      or other relevant communication channels. Payment is due
                      at the time of registration. 2. Non-Refundable: The
                      registration fee is non-refundable unless your
                       application was denied . Once you have submitted your
                      registration and paid the fee, you will not be entitled to
                      a refund under any circumstances. 3. Late Payment: If
                      payment is not received by the due date, a late fee may be
                      added to the outstanding balance. The amount of the late
                      fee will be communicated to members via email or other
                      relevant communication channels. 4. Termination: Our
                      organization reserves the right to terminate membership
                      for any reason, including but not limited to non-payment
                      of fees, violation of our code of conduct or other
                      policies, or any other behaviour deemed detrimental to the
                      organization. <br /> <b>Third Party Payment Processors</b>
                      : 1. We used third party processors such as PayPal,
                      Square, Mobile Money or any other, you acknowledge and
                      agree that the payment is being processed by the third
                      party payment processor and not by our organization. 2.
                      The third party payment processor may charge fees for
                      processing the payment. These fees will be communicated to
                      you by the third party payment processor at the time of
                      payment. 3. Refunds for payments made through a third
                      party payment processor will be subject to the refund
                      policies of the third party payment processor. 4.
                      Security: We have taken reasonable measures to ensure the
                      security of our third party payment processor and the
                      information provided during the payment process. However,
                      we cannot guarantee the security of the third party
                      payment processor or the information provided during the
                      payment process. 5. Liability: Our organization shall not
                      be liable for any damages or losses resulting from the use
                      of a third party payment processor. You agree to indemnify
                      and hold us harmless from any such damages or losses. 6.
                      Disputes: Any disputes regarding payments made through a
                      third party payment processor must be resolved with the
                      third party payment processor. 7. Changes: We reserve the
                      right to change our payment terms and conditions for use
                      of third party payment processors at any time. You will be
                      notified of any changes via email or other relevant
                      communication channels. By registering for membership with
                      our organization, you agree to these payment terms and
                      conditions. If you have any questions or concerns, please
                      contact us at info@holdinghandscommunitynetwork.org <br />{" "}
                      <b>Declaration:</b> By submitting this application form, I
                      certify that the information contained in this document is
                      complete, accurate, and factual. I also understand that
                      once this document has been completed and signed, it will
                      form a record of myself and my next of kin, and will be
                      used to confirm any communications between my association
                      or next of kin. Additionally, by signing this form, I
                      certify that I have read, been educated, and understand
                      how H&H organization programs and articles of association
                      work. I also understand that H&H will use the information
                      contained in this document only for verification purposes
                      and to keep a record of me or my association.
                    </p>
                  </div>

                  <div className="mt-4 flex justify-evenly items-center">
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
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
