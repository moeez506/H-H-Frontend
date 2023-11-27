/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState } from "react";

interface MemberDataContextType {
  memberData: any;
  setMemberData: (data: any) => void;
}

export const MemberDataContext = createContext<MemberDataContextType>({
  memberData: {},
  setMemberData: () => {},
});

export const MemberDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [memberData, setMemberData] = useState<any>([]);

  return (
    <MemberDataContext.Provider value={{ memberData, setMemberData }}>
      {children}
    </MemberDataContext.Provider>
  );
};

export const useMemberData = () => useContext(MemberDataContext);
