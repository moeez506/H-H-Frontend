/* eslint-disable prettier/prettier */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
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
} from "../pages";

const RouterConfig = () => {
    return (
        <>
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/market-place" element={<MarketPlace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/onboarding-type" element={<OnboardingType />} />
                <Route path="/verify-email/:token" element={<VerificationScreen />} />
                <Route path="/individual-onboarding" element={
                    <UserProvider>
                        <MultiFormIndividual />
                    </UserProvider>
                } />
                <Route path="/group-onboarding" element={
                    <GroupProvider>
                        <MultiFormGroup />
                    </GroupProvider>} />

            </Routes>
        </>
    );
};

export default RouterConfig;
