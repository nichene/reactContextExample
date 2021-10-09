import React, { createContext, FC, useContext, useState } from "react";

type ContextData = {
  userName?: string;
};

type ContextFunctions = {
  setUserName: (userName: string) => void;
};

export type ContextValue = ContextData & ContextFunctions;

const UserContext = createContext<ContextValue>({} as any);

export const UserContextProvider: FC<ContextData> = (props) => {
  const [data, setData] = useState<ContextData>(props);

  const setUserName = (userName?: string) =>
    setData((prev) => ({ ...prev, userName }));

  return <UserContext.Provider value={{ ...data, setUserName }} {...props} />;
};

export const useUserContext = (): ContextValue => {
  return useContext(UserContext);
};
