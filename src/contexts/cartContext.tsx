import React, { createContext, FC, useContext, useState } from "react";

type ContextData = {
  productsTotalCount?: number;
};

type ContextFunctions = {
  setProductsTotalCount: (totalCount: number) => void;
};

export type ContextValue = ContextData & ContextFunctions;

const CartContext = createContext<ContextValue>({} as any);

export const CartContextProvider: FC<ContextData> = (props) => {
  const [data, setData] = useState<ContextData>(props);

  const setProductsTotalCount = (productsTotalCount?: number) =>
    setData((prev) => ({ ...prev, productsTotalCount }));

  return (
    <CartContext.Provider
      value={{ ...data, setProductsTotalCount }}
      {...props}
    />
  );
};

export const useCartContext = (): ContextValue => {
  return useContext(CartContext);
};
