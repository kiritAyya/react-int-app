import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ExpenseContext } from "../ExpenseContext";

export const NewExpense = () => {
  const history = useHistory();
  const {
    expense: [expenses, setExpenses],
    balance: [balances, setBalances],
  } = useContext(ExpenseContext);

  const [total, setTotal] = useState(0);
  const [description, setDescription] = useState("");
  const [shareA, setShareA] = useState(0);
  const [shareB, setShareB] = useState(0);

  const onSubmit = () => {
    if (total === 0 || description === "") {
      alert("Please add a total and description!");
      return;
    }

    if (shareA + shareB !== total) {
      alert("Users shares do not add up!");
      return;
    }

    // create expense
    setExpenses((prevExp) => [
      ...prevExp,
      { total, description, shareA, shareB },
    ]);
    setBalances((prevBal) => ({
      balanceA: prevBal.balanceA + (shareA - total / 2),
      balanceB: prevBal.balanceB + (shareB - total / 2),
    }));
    history.push("/");
  };

  return (
    <div>
      <label htmlFor="total">Total</label>
      <input
        type="text"
        name="total"
        onChange={(e) => setTotal(+e.target.value)}
        value={total}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Share</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>{total / 2}</td>
            <td>
              <input
                type="text"
                name="shareA"
                onChange={(e) => setShareA(+e.target.value)}
                value={shareA}
              />
            </td>
          </tr>
          <tr>
            <td>B</td>
            <td>{total / 2}</td>
            <td>
              <input
                type="text"
                name="shareB"
                onChange={(e) => setShareB(+e.target.value)}
                value={shareB}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={() => history.push("/")}>Cancel</button>
    </div>
  );
};
