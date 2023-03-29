/* eslint-disable prettier/prettier */
import React from "react";
import donate from "../../assets/icons/Frame.png"
import death from "../../assets/icons/5.png"
import health from "../../assets/icons/6.png"
import community from "../../assets/icons/4.png"
import education from "../../assets/icons/7.png"
import first from "../../assets/1.png"
import second from "../../assets/2.png"
import third from "../../assets/3.png"
import Button from "../Button";
import Partner1 from "../../assets/Partner1.png"
import Partner2 from "../../assets/Partner2.png"
import Partner3 from "../../assets/Partner3.jpg"

// const member = {
//   path: 'Hello',
//   name: 'ACTIVE MEMBERS',
//   number: 90
// }

const Body = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-24 px-20 mobile:flex-wrap mobile:px-5 tabletOnly:flex-wrap">
        {/* <div className="w-full"> */}
          <img src={first} alt="not image found" className=""/>
        {/* </div> */}
        
        <div className="px-10 mobile:px-4 mt-4">
          <h1 className="text-[65px] font-semibold mobile:text-[38px]">Welcome to H & H</h1>
          <p className="text-2xl mobile:text-lg">
            What is H&H the full acronym is Holding Hands Community Network
            Organization .This is a Community Owned Organization with the Head
            Office located in Toronto ,Ontario , Canada .The goal of this
            Organization is to assist Communities ease financial stress to
            bereaved families, support members with Relief funding in times of
            critical illness and support its members with Educational Financial
            Support .This Organization is also aimed at fostering and connecting
            communities around the world through Connect the community
            initiative.
          </p>
          <Button text="Read More"/>
        </div>
      </div>
      <div className="mt-36">
        <div className="h-[450px] w-full bg-gradient-to-b from-orange to-yellow flex items-center justify-center">
          <div className="border-4 rounded-2xl border-white h-[550px] w-[450px] bg-white flex justify-center flex-col items-center shadow-black shadow-xl pb-[50px] mobile:m-8">
            <img src={donate}/>
            <h1 className="text-orange text-6xl font-semibold">Donation</h1>
            <p className="text-center text-3xl text-text-grey">
              Support a child’s education today!
            </p>
            <button className="border-4 rounded-3xl text-white border-white bg-gradient-to-r from-orange to-yellow px-8 py-2 text-xl font-medium">
              DONATE
            </button>
          </div>
        </div>
      </div>
      <div className="bg-rectangle3 bg-no-repeat bg-cover h-full w-full mt-44 mobile:bg-rectangle3-responsive tabletOnly:bg-rectangle3-responsive ">
        <br />
        <br />
        <p className="text-center text-3xl text-text-grey">What We Provide</p>
        <h1 className="text-orange text-6xl text-center font-semibold">
          Our Services
        </h1>
        <p className="text-text-grey text-xl text-center">
          We will therefore act as an pivotal engine to accelerate and assist
          members ,groups, association in the following domains.
        </p>
        <div className="flex flex-row mt-12 mobile:flex-col mobile:items-center tabletOnly:flex-col tabletOnly:items-center">
          <div className="border-4 rounded-2xl border-orange h-[510px] w-[75%] bg-white flex justify-center flex-col items-center mx-8 hover:text-white mobile:m-3 tabletOnly:m-3">
            <img src={death}/>
            <h1 className="text-orange text-2xl font-extrabold">
              Death Relief Fund
            </h1>
            <p className="text-orange text-center text-base px-4 mt-2">
              As an Organization, we do understand our community needs
              assistance. Death comes unannounced and neither is anyone prepared
              when death knocks.
            </p>
            <button className="border-4 rounded-3xl text-white border-white bg-gradient-to-r from-orange to-yellow px-6 py-1 text-lg mt-6 font-medium">
              VIEW DETAILS
            </button>
          </div>
          <div className="border-4 rounded-2xl border-orange h-[510px] w-[75%] bg-white flex justify-center flex-col items-center mx-8 hover:text-white mobile:m-3 tabletOnly:m-3">
            <img src={health}/>
            <h1 className="text-orange text-2xl font-extrabold text-center">
              Critical Health Relief Fund
            </h1>
            <p className="text-orange text-center text-base px-4 mt-2">
              Registered members will be able to benefit from our Critical
              Health Relief Fund. This Fund is aimed at assisting members who
              are critically sick, have been diagnosed with a terminal
            </p>
            <button className="border-4 rounded-3xl text-white border-white bg-gradient-to-r from-orange to-yellow px-6 py-1 text-lg mt-6 font-medium">
              VIEW DETAILS
            </button>
          </div>
          <div className="border-4 rounded-2xl border-orange h-[510px] w-[75%] bg-white flex justify-center flex-col items-center mx-8 hover:text-white mobile:m-3 tabletOnly:m-3">
            <img src={education}/>
            <h1 className="text-orange text-2xl font-extrabold text-center">
              Educational Support Fund
            </h1>
            <p className="text-orange text-center text-base px-4 mt-2">
              Education is Key that unlocks Endless potentials .Educational
              Support Fund is aim in assisting members or their family members
              achieve the educational goal. Not everyone in our communities
            </p>
            <button className="border-4 rounded-3xl text-white border-white bg-gradient-to-r from-orange to-yellow px-6 py-1 text-lg mt-6 font-medium">
              VIEW DETAILS
            </button>
          </div>
          <div className="border-4 rounded-2xl border-orange h-[510px] w-[75%] bg-white flex justify-center flex-col items-center mx-8 hover:text-white mobile:m-3 tabletOnly:m-3">
            <img src={community} />
            <h1 className="text-orange text-2xl font-extrabold text-center">
              Connect The Community Initiative
            </h1>
            <p className="text-orange text-center text-base px-4 mt-2">
              With H&H Connect The Community Initiative , member would be able
              to benefit from a wide range of exposure. One of the objective of
              H&H is to bring communities
            </p>
            <button className="border-4 rounded-3xl text-white border-white bg-gradient-to-r from-orange to-yellow px-6 py-1 text-lg mt-6 font-medium">
              VIEW DETAILS
            </button>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="flex items-center justify-center mt-24 px-20 mobile:flex-wrap mobile:px-0 tabletOnly:flex-wrap">
      {/* <div className="flex items-center justify-center"> */}
          <img src={second} alt="not image found" />
        {/* </div> */}
        <div className="px-10 mobile:px-4 mobile:pl-10 mt-4">
          <h1 className="text-[65px] font-semibold mobile:text-[38px]">Benefits of H & H</h1>
          <ul className="list-disc text-2xl mobile:text-lg">
            <li>
              Death Relief Fund disbursed amount goal will be $15,000 CAD
              approximately 6 million francs to help relieve financial stress to
              the bereaved family and to give a befitting burial to you’re their
              love one.
            </li>
            <li>
              Members will benefit from Critical Health Relief
              Funding(Conditions apply)
            </li>
            <li>
              Members will benefit from National and international Child
              Educational Relief Funding (Conditions apply)
            </li>
            <li>
              Members will benefit from Connect The Community Network Initiative
              with international partners in Canada, U.S.A & Europe.
            </li>
            <li>
              Groups and associations have 100% financial, membership control
            </li>
            <li>Less financial stress due to Crowd Funding</li>
            <li>
              No monthly contributions pay only when a death is announced.
            </li>
            <li>Little or no paperwork is required from individual members.</li>
            <li>
              All members are eligible to showcase their businesses and also
              take advantage of discounted services and offers within the
              community H&H partners.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center ">
      <div className=" bg-rectangle1 bg-no-repeat flex justify-center mt-12 h-[400px] w-[75%] mobile:flex-wrap mobile:bg-rectangle1-responsive mobile:w-full mobile:h-full tabletOnly:flex-col tabletOnly:bg-rectangle1-responsive tabletOnly:h-full">
        <div className="mt-20 mobile:pl-4">
          <h1 className="text-3xl text-orange font-semibold">
            H&H Relief Assistance
          </h1>
          <ul className="list-disc text-xl mobile:pl-7">
            <li>Access to more financial support</li>
            <li>National & International Support</li>
            <li>Little financial contribution (crowd funding)</li>
            <li>Access to other programs critical illness relief fund</li>
            <li>
              Access to educational relief funds to members and family members
            </li>
            <li>H&H can be assist in travel insurance</li>
            <li>Access to connect the community initiative program</li>
          </ul>
        </div>
        <div className="mt-20">
          <h1 className="text-3xl text-orange font-semibold">
            Your Group Sinking Funds
          </h1>
          <ul className="list-disc text-xl mobile:pl-4">
            <li>Less financial assistance</li>
            <li>Group members only</li>
            <li>More financial contribution</li>
          </ul>
        </div>
      </div>
      </div>
      <div className="flex items-center justify-center mt-24 px-20 mobile:flex-wrap mobile:px-5 tabletOnly:flex-wrap">
      {/* <div className="flex items-center justify-center"> */}
          <img src={third} alt="not image found" />
        {/* </div> */}
        <div className="px-10 mobile:px-4 mt-4">
          <h1 className="text-[65px] font-semibold mobile:text-5xl">Our Mission</h1>
          <p className="text-2xl mobile:text-lg">
            What is H&H the full acronym is Holding Hands Community Network
            Organization .This is a Community Owned Organization with the Head
            Office located in Toronto ,Ontario , Canada .The goal of this
            Organization is to assist Communities ease financial stress to
            bereaved families, support members with Relief funding in times of
            critical illness and support its members with Educational Financial
            Support .This Organization is also aimed at fostering and connecting
            communities around the world through Connect the community
            initiative.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-[65px] font-semibold text-center text-orange">
          OUR PARTNERS
        </h1>
        <div className="flex flex-row justify-center items-center mt-6 space-x-10 mr-32 mobile:flex-col mobile:m-0 mobile:space-x-0 tabletOnly:flex-col tabletOnly:m-0 tabletOnly:space-x-0">
        <img className="h-52 w-5h-56" src={Partner3} alt="Partner3" />          
        <img className="h-52 w-5h-56" src={Partner1} alt="Partner1" />
        <img className="h-52 w-5h-56" src={Partner2} alt="Partner2" />
        </div>
        <h1 className="text-orange font-semibold text-3xl text-center mt-6">
          PARTNER
        </h1>
        <p className="text-orange text-xl text-center">
          Lorem Ipsum is simply dummy text of the printing <br></br>and
          typesetting industry.
        </p>
      </div>
    </>
  );
};

export default Body;
