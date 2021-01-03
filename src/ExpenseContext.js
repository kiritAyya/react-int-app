import React, { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]); // [{ total, description, shareA, shareB }, ...];
  const [balances, setBalances] = useState({ balanceA: 0, balanceB: 0 });

  return (
    <ExpenseContext.Provider
      value={{
        expense: [expenses, setExpenses],
        balance: [balances, setBalances],
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
