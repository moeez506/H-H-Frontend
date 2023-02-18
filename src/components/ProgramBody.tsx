/* eslint-disable prettier/prettier */
import React from "react";
import death1 from "../assets/Rectangle 64.png";
import death2 from "../assets/Rectangle 65.png";
import icon from "../assets/Rectangle 67.png"
import health from "../assets/Rectangle 41.png";
import community from "../assets/Rectangle 74.png"
import female from "../assets/female.png"
import Button from "./Button";

const ProgramBody = () => {
  return (
    <>
      <div className="bg-program-hero h-[500px] bg-no-repeat bg-cover mb-2"></div>
      <div className="bg-program h-full bg-cover bg-no-repeat grid grid-cols-2 tabletOnly:flex flex-col mobile:flex ">
        <div className="flex flex-col justify-center items-center mr-20 ml-72 tabletOnly:mx-5 mobile:mx-5 laptop:ml-20">
          <div className="flex mobile:flex-col">
            <div>
              <img src={icon} alt="no image found" />
              <p className="text-xl font-bold">COMMUNITY</p>
              <p className="text-xl">
                The more the members and association the less amount each member
                will contribute when a death occurs. We take any death in our
                community seriously.
              </p>
            </div>
            <img src={death1} alt="image not loaded" />
          </div>
          <div className="flex mt-10 mobile:flex-col">
            <img src={death2} alt="image not loaded" />
            <p className="text-xl pl-8 mobile:pl-0">
              H&H upon any death occurrence, will announce to all members
              association and contributions have to be done within 72 hours. The
              amount would be disburse to the deceased next of kin
            </p>
          </div>
        </div>
        <div className="mt-10 mobile:mx-5 tabletOnly:mx-5">
          <h1 className="text-4xl font-semibold">Death Relief Fund</h1>
          <p className="text-base pr-80 tabletOnly:pr-0 mobile:pr-0 laptop:pr-0">
            As an Organization we do understand our community needs assistance.
            Death comes unannounced and neither is anyone prepared when death
            knocks. This is the more reason why we have to be prepared at all
            times. Planning for such unforeseen circumstances is giving your
            family peace of mind to give you the last respect needed. The best
            gift we can give our love ones is to give them the opportunity to be
            able to celebrate us on earth and when we leave this world. In
            developed countries this is done through life insurance. We do
            understand everyone would like to have a life insurance but such
            privileges are not available for everyone. Death comes with so much
            pain ,stress to family members. We do understand health care is very
            expensive with expenditure before and after in puts the bereaved
            family in a difficult position. This is where H&H comes in ,We
            should not be mourning our loves ones and be financially
            stressedWith H&H community Crowd Funding System each association
            (members) will be able to contributions upon the death announcement
            of any of its members aimed at lessening the burden on the family of
            deceased members by assisting with funeral cost, arrangements, and
            repatriation to a final resting place. Members will only contribute
            when there is a death occurrence. H&H has a harmonious and organized
            approach based on the strength of numbers. We believe that each
            death is a death to the community and as such we call on each member
            to act with compassion and commitment.
          </p>
          <Button text="Contact Us"/>
        </div>
      </div>
      <div className="flex justify-center items-center">
      <div className="bg-rectangle3 flex flex-col justify-center items-center h-full bg-no-repeat bg-cover mt-10 px-20 w-[70%] tabletOnly:p-10 tabletOnly:w-full mobile:p-8 mobile:w-full">
        <br />
        <div>
          <h1 className="text-4xl font-semibold">
            Critical Health Relief Fund
          </h1>
          <p className="text-base">
            Registered members will be able to benefit from our Critical Health
            Relief Fund .This Fund is aimed at assisting members who are
            critically sick , have been diagnosed with a terminal or life
            threatening illness. This fund will assist in taking care of medical
            bills and reduce the financial burden of the member and it’s family.
            This Fund will be part of a members upfront part benefit of Death
            Relief Fund , Donation and Assistance from the H&H community. Health
            is Wealth and we strongly believe helping members in such times will
            be more beneficial rather than helping theming when they are no
            more. As a community we do understand there is lack of good health
            system in our communities . H&H and its international partners are
            dedicated in helping during such times . We have therefore ,put in
            place a mechanism to assist all H&H members financially when
            diagnosed with a terminal disease or when found in a critical health
            circumstance. This assistance will be available only for active
            members and conditions may apply .H&H is also working with community
            hospitals, clinics ,health specialist for its members to have access
            to discounted health services for non- critical health issues .H&H
            is working to with its international partners to make available
            health services available for its community members who would need
            international health care .Who is therefore eligible to get Critical
            Health Relief Funding?
          </p>
        </div>
        <br />
        <br />
        <div className="flex tabletOnly:flex-col mobile:flex-col">
          <div>
            <h1 className="text-3xl font-semibold">
              Eligibility Criteria For Critical Relief Fund
            </h1>
            <ul className="list-disc">
              <li>All Active member Members</li>
              <li>
                Members who are critically sick ,have been diagnosed with a life
                threatening disease
              </li>
              <li>Has proven medical Report</li>
            </ul>
            <p>
              All claims for Critical Health Relief Funding must be announced
              through the association executive team .Upon each announcement H&H
              would do its internal and external verifications and proceed with
              the claims if all eligibility and verifications have been done
              .Members do not need to contribute for Critical Health Relief Fund
            </p>
          </div>
          <img src={health} alt="image not loaded" />
        </div>
      </div>
      </div>
      <div className="mt-12">
        <h1 className="text-5xl font-semibold text-center">
          Educational Support Fund
        </h1>
        <div className="grid grid-cols-2 mt-10 tabletOnly:flex flex-col mobile:flex ">
          <div className="flex justify-center items-center pb-20">
          <img src={female} alt="no image found" />

          </div>
          
          <div className="mobile:px-5 tabletOnly:px-5">
            <p className="pr-72 tabletOnly:pr-0 mobile:pr-0">
              <strong>Education</strong> is Key that unlocks Endless potentials
              . Educational Support Fund aims in assisting members or their
              family members achieve their educational goals. Not everyone in
              our communities is privileged to afford or get a basic education.
              This support fund would therefore help members and their family
              members have access to quality education. H&H is devoted to
              assisting its member’s and family members’ educational goals. With
              H&H you are never alone ! .How would members benefit from
              Educational Support Funding? At the beginning of each academic
              year, H&H would open its National and International Educational
              Balloting Pool. Members who show interest in any of the pools
              would be randomly selected through a transparent live show ballot.
              The member groups that have been selected would then do their
              internal selection and send the list of selected members or their
              family members who would be benefiting from the educational
              support fund. The number of selected members will be determined by
              each pool . From time to time H&H international partners and
              donors might up to Support members or their family members, once
              such opportunities are available members will be notified to send
              in their applications for selection. These criteria of for
              selection is subject to change, H&H would communicate any changes
              ahead of time.<br></br> H&H through its international partners
              would also award scholarships, international exchange programs,
              and international study admissions to its members and family
              members who would like to study abroad in North American counties
              like Canada, the United States, Europe, and Asia.<br></br>
              <br></br> All members are eligible for Educational Support Fund
            </p>
            <br></br>
            <Button text="Contact Us"/>
          </div>
        </div>
      </div>
      <div className="bg-orange h-full mt-10 justify-center items-center flex flex-col">
        <br />
      <br />
        <h1 className="text-5xl font-bold text-white text-center">
          Connect The Community Initiative
        </h1>
        <div className="bg-white h-full rounded-2xl w-[80%] mt-8 grid grid-cols-2 justify-center items-center tabletOnly:flex flex-col mobile:flex">
          <p className="px-24 tabletOnly:px-5 mobile:px-5">
            With H&H Connect The Community Initiative, members would be able to
            benefit from a wide range of exposure. One of the objectives of H&H
            is to bring communities together Brining the diaspora community with
            home-based communities . With this initiative members would be able
            to connect with members from around the world in terms of social,
            economic, and business domains. Members who are professionals,
            businessmen through this initiative would be able to showcase their
            professions or business on H&H community websites which would
            attract more community members to their businesses, and in return,
            members would turn to get discounted services. These discounted
            services or products would therefore benefit both members at home
            and abroad. We strongly believe in Holding each other’s hands in
            times good and bad times … Each member is encouraged to use this
            platform as a point of contact to introduce his or her business to
            the community. All businesses are welcome. Also is working with its
            international partners to be able to connect the community with
            social activities like international Sports competitions, Trade
            fairs, Music competitions just to name a few. This would help in
            bringing our communities all over the world together would
            communicate any social trips for members to be able to prepare if
            they have to travel out of their jurisdiction or country.
          </p>
          <div className="ml-32 pt-6 tabletOnly:ml-0 mobile:ml-0">
            <img src={community} alt="image not loaded" />
            <br></br>
            <Button text="Contact Us"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramBody;
