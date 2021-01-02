import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ExpenseContext } from "../ExpenseContext";

export const Dashboard = () => {
  const history = useHistory();
  const {
    expense: [expenses],
    balance: [balances],
  } = useContext(ExpenseContext);

  return (
    <div>
      {JSON.stringify(balances)}
      <button onClick={() => history.push("/new")}>Add expense</button>
      {JSON.stringify(expenses)}
    </div>
  );
};
