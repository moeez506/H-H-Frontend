/* eslint-disable prettier/prettier */

import React from "react";
import { Route, Routes } from "react-router-dom";
import { GroupProvider } from "../contexts/groupOnboardingContext";
import { UserProvider } from "../contexts/individualOnboardingContext";
import {
    Login,
    Register,
    About,
    Contact,
    Home,
    Programs,
    MultiFormGroup,
    MultiFormIndividual,
} from "../pages";

const RouterConfig = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
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
