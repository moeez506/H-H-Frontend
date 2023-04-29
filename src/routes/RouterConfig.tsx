/* eslint-disable prettier/prettier */

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { ThankYou } from "../components/MultiFormComponents/ThankYou";
import { GroupProvider } from "../contexts/groupOnboardingContext";
import { UserProvider } from "../contexts/individualOnboardingContext";
import {
  Login,
  Register,
  About,
  ContactUs,
  Home,
  Programs,
  MultiFormGroup,
  MultiFormIndividual,
  OnboardingType,
  VerificationScreen,
  MarketPlace,
  IndividualProfile,
  IndividualMembers,
  IndividualSetting,
  IndividualPayments,
  IndividualMemberDetail,
  IndividualPaymentDetail,
} from "../pages";
import ProtectedRoutes from "./ProtectedRoutes";
import PopUp from "../components/PopUp";
// import IndividualProfile from "../components/dashboard/IndividualPages/IndividualProfile";
import { SideNav } from "../components/dashboard";
// import IndividualInbox from "../components/dashboard/IndividualPages/IndividualInbox";

const RouterConfig = () => {
  const location = useLocation();
  const shouldRenderHeader = [
    "/home",
    "/about",
    "/contact",
    "/programs",
    "/market-place",
  ].includes(location.pathname);

  const shouldRenderIndividualDashboard = ["/individual-Profile", "/individual-Members", "/individual-Setting", "/individual-Payments", "/individual-Detail", "/individual-PaymentDetail" ].includes(
    location.pathname
  );

  console.log(shouldRenderHeader);

  return (
    <>
      {shouldRenderHeader && <Header />}
      {shouldRenderIndividualDashboard && (
        <SideNav className="">
          <Routes>
            <Route path="/individual-Profile" element={<IndividualProfile />} />
            <Route path="/individual-Members" element={<IndividualMembers />} />
            <Route path="/individual-Setting" element={<IndividualSetting />} />
            <Route path="/individual-Payments" element={<IndividualPayments />} />
            <Route path="/individual-Detail" element={<IndividualMemberDetail />} />
            <Route path="/individual-PaymentDetail" element={<IndividualPaymentDetail />} />
          </Routes>
        </SideNav>
      )}

      <Routes>
        <Route path="/" element={<PopUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/market-place" element={<MarketPlace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email/:token" element={<VerificationScreen />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/onboarding-type" element={<OnboardingType />} />
          <Route path="/thank-you" element={<ThankYou />} />

          <Route
            path="/individual-onboarding"
            element={
              <UserProvider>
                <MultiFormIndividual />
              </UserProvider>
            }
          />
          <Route
            path="/group-onboarding"
            element={
              <GroupProvider>
                <MultiFormGroup />
              </GroupProvider>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default RouterConfig;
