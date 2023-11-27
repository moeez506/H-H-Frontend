/* eslint-disable prettier/prettier */
import React, { createContext, useState } from "react";

interface GroupContextType {
  cameroonian: object;
  createGroup: object;
  representativeOne: object;
  representativeTwo: object;
  representativeThree: object;
  setCameroonian: React.Dispatch<React.SetStateAction<object>>;
  setCreateGroup: React.Dispatch<React.SetStateAction<object>>;
  setRepresentativeOne: React.Dispatch<React.SetStateAction<object>>;
  setRepresentativeTwo: React.Dispatch<React.SetStateAction<object>>;
  setRepresentativeThree: React.Dispatch<React.SetStateAction<object>>;
}

interface Props {
  children: React.ReactNode;
}

export const GroupUserContext = createContext<GroupContextType>({
  cameroonian: {},
  createGroup: {},
  representativeOne: {},
  representativeTwo: {},
  representativeThree: {},
  setCreateGroup: () => {},
  setCameroonian: () => {},
  setRepresentativeOne: () => {},
  setRepresentativeTwo: () => {},
  setRepresentativeThree: () => {},
});

export const GroupProvider = ({ children }: Props) => {
  const [cameroonian, setCameroonian] = useState<object>({});
  const [createGroup, setCreateGroup] = useState<object>({});
  const [representativeOne, setRepresentativeOne] = useState<object>({});
  const [representativeTwo, setRepresentativeTwo] = useState<object>({});
  const [representativeThree, setRepresentativeThree] = useState<object>({});

  return (
    <GroupUserContext.Provider
      value={{
        createGroup,
        cameroonian,
        representativeOne,
        representativeTwo,
        representativeThree,
        setCreateGroup,
        setRepresentativeOne,
        setCameroonian,
        setRepresentativeTwo,
        setRepresentativeThree,
      }}
    >
      {children}
    </GroupUserContext.Provider>
  );
};
