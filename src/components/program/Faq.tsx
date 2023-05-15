/* eslint-disable prettier/prettier */
import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

function Faq() {
  const [faqs] = useState<FaqItem[]>([
    {
      question: "Do I need to renew membership ?",
      answer: "No !  there is only a onetime membership registration ",
    },
    {
      question: "When can I benefit from the various programs?",
      answer:
        "Upon approval of your application, you will enter a 30-day probationary period. After successful completion of the probationary period, you will be eligible to participate in all of the programs offered by the organization.",
    },
    {
      question: "How long does it take to get support ?",
      answer:
        "72 hours after informing H&H and if no further information required",
    },
    {
      question: "Must I be in the country where H&H operates to be a member  ?",
      answer: "No matter where you are in the world , you can be a member.",
    },
    {
      question:
        "Do I need to pay to Advertise my business on H&H market place ?",
      answer:
        "As a member you do not need to pay to advertise . All you need is your registration number to put up your business profile.",
    },
    {
      question:
        "What is considered critical health and how many times can someone benefit from ?",
      answer:
        "Critical health refers to medical conditions that are life-threatening, require immediate medical attention, and have a significant impact on an individual's quality of life. Examples of critical health conditions include heart attack ,stroke ,cancer ,severe injuries , acute respiratory syndrome ,sepsis ,diabetes complications ,kidney failure",
    },
    {
      question: "Can I register Twice ? ",
      answer:
        "No ! you can only register once. A member should only register either individual or group membership . Registering twice will not give you any advantage for double benefit",
    },
    {
      question: "What Payment methods are accepted by H&H ",
      answer:
        "We accept the following payment methods : Paypal , Debit Card , Bank Transfer /Bank deposit , Credit /Debit Card , Mobile Money Transfer ,Interac etransfer ",
    },
    {
      question: "How can I register      ",
      answer:
        "You can register online or paper application .For online click at signup and for paper application contact info@holdinghandscommunitynetwork.org  ",
    },
    {
      question:
        "Can my application to be a member be refused and if yes will be registration fee be refunded ?",
      answer:
        "Yes ! if your application is declined your registration fee will be refunded back using the same payment method . H&H carries out background checks and to ensure members registered meets the eligibility criteria. ",
    },
    {
      question: "How can a member benefit from educational support program ?",
      answer:
        "H&H annually opens application for members who needs to get assistance for this program including non-members . To benefit members or non-members are subject to the terms and condition governing the program which will be outlined upon application openings .members will be notified when program is open ",
    },
    {
      question: "What happened if I do not pay contribution before dateline ?",
      answer:
        "You or your association loses its membership rights leading to the loss of protection for all of its members.. The association will also receive a letter from the RPN management committee advising them of their status ",
    },
    {
      question: " Can I cancel my membership ? ",
      answer:
        "Yes ! By sending a letter to the Management Committee indicating your intention to terminate the membership or  your association/group. You can also terminate your membership using your online account .",
    },
    {
      question: "Who can Notify a Death or Critical Health ? ",
      answer:
        "For individual membership a direct family member ,next of kin can inform the executive committee and for group membership Only the Executive bureau of the association or group where the deceased was a member can formally notify the H&H Management Committee of a death.  ",
    },
    {
      question: "Is there a dateline to notify when a member is death ?",
      answer:
        "It is recommended H&H is notified immediately a death occurs, even if for some reason the body is not yet available, for example because of a police investigation, difficulty finding the body (e.g death by drowning in a river) or for any other reason. By notifying H&H of the death, you give us an opportunity to take preliminary steps to prepare . ",
    },
    {
      question: "How much is the registration fee ? ",
      answer:
        "One time membership registration of 25,000frs ($40) with 3 members free and for group membership 55,000frs ($92) with free unlimited membersip add .",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div className="ml-64 md:w-2/3 py-5 mx-auto tabletOnly:ml-0 mobile:ml-0">
        <div className="p-4">
          {faqs.map((faq: FaqItem, index: number) => (
            <div
              className="item w-[80%] border-b-2 border-solid border-orange text-orange font-bold px-6 py-4 mobile:w-[100%] tabletOnly:w-[100%]"
              key={index}
            >
              <a
                href="#"
                className="flex items-center justify-between"
                onClick={(
                  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => {
                  e.preventDefault();
                  handleClick(index);
                }}
              >
                <h4
                  className={
                    activeIndex === index ? "text-orange text-xl" : "text-xl"
                  }
                >
                  {faq.question}
                </h4>
                <svg
                  className={`w-10 h-10 text-orange ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div
                className={`mt-3 text-gray-600 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
