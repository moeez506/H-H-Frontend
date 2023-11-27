/* eslint-disable prettier/prettier */
import React, { createContext, useState } from "react";

interface IndividualUserContextType {
  subscriptionPlan: object;
  cameroonian: object;
  individualAdmin: object;
  additionalMember: object;
  kinInformation: object;
  setSubscriptionPlan: React.Dispatch<React.SetStateAction<object>>;
  setCameroonian: React.Dispatch<React.SetStateAction<object>>;
  setIndividualAdmin: React.Dispatch<React.SetStateAction<object>>;
  setAdditionalMember: React.Dispatch<React.SetStateAction<object>>;
  setKinInformation: React.Dispatch<React.SetStateAction<object>>;
}

interface Props {
  children: React.ReactNode;
}

export const IndividualUserContext = createContext<IndividualUserContextType>({
  subscriptionPlan: {},
  cameroonian: {},
  individualAdmin: {},
  additionalMember: {},
  kinInformation: {},
  setSubscriptionPlan: () => { },
  setCameroonian: () => { },
  setIndividualAdmin: () => { },
  setAdditionalMember: () => { },
  setKinInformation: () => { },
});

export const UserProvider = ({ children }: Props) => {
  const [cameroonian, setCameroonian] = useState<object>({});
  const [subscriptionPlan, setSubscriptionPlan] = useState<object>({});
  const [individualAdmin, setIndividualAdmin] = useState<object>({});
  const [additionalMember, setAdditionalMember] = useState<object>({});
  const [kinInformation, setKinInformation] = useState<object>({});

  return (
    <IndividualUserContext.Provider
      value={{
        subscriptionPlan,
        cameroonian,
        individualAdmin,
        additionalMember,
        kinInformation,
        setIndividualAdmin,
        setSubscriptionPlan,
        setCameroonian,
        setAdditionalMember,
        setKinInformation,
      }}
    >
      {children}
    </IndividualUserContext.Provider>
  );
};
