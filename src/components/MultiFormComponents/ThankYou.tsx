/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { GroupUserContext } from "../../contexts/groupOnboardingContext";
import { IndividualUserContext } from "../../contexts/individualOnboardingContext";
export const ThankYou = () => {
	// const context = useContext(IndividualUserContext)
	const context = useContext(GroupUserContext)
	console.log("🚀 ~ file: step8.tsx:36 ~ Step8 ~ context:", context);
	return (
		<section className="flex flex-col justify-center items-center w-full gap-4 py-[36px]">
			<figure className="w-[60px] h-[60px]">
				<img
					src="./assets/images/icon-thank-you.svg"
					alt="Form compleated, thank you!"
				/>
			</figure>
			<h2>Thank you</h2>
			<span className="text-center">
				<p>Thanks for confirming your subscription!</p>
				<p>
					We hope you have using our platform. If you ever need
					support, please feel free to email us at
					support@loregaming.com
				</p>
			</span>
		</section>
	);
};
