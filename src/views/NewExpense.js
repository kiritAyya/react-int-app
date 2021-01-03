import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ExpenseContext } from "../ExpenseContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

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

    //update balance
    setBalances((prevBal) => ({
      balanceA: prevBal.balanceA + (shareA - total / 2),
      balanceB: prevBal.balanceB + (shareB - total / 2),
    }));

    history.push("/");
  };

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <h1>Add a new expense</h1>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="total">Total</Form.Label>
          <Form.Control
            type="text"
            name="total"
            onChange={(e) => setTotal(+e.target.value)}
            value={total}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </Form.Group>
      </Form>
      <Form.Group>
        <Table striped bordered hover>
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
                <Form.Control
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
                <Form.Control
                  type="text"
                  name="shareB"
                  onChange={(e) => setShareB(+e.target.value)}
                  value={shareB}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </Form.Group>
      <div className="d-flex justify-content-end align-items-center">
        <Button className="mr-3" variant="success" onClick={onSubmit}>
          Submit
        </Button>
        <Button variant="danger" onClick={() => history.push("/")}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
