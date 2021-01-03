import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ExpenseContext } from "../ExpenseContext";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export const Dashboard = () => {
  const history = useHistory();
  const {
    expense: [expenses],
    balance: [balances],
  } = useContext(ExpenseContext);

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <h1>Balances</h1>
      <ListGroup>
        <ListGroup.Item>
          <div className="d-flex justify-content-around">
            <p className="m-0">A</p>
            <p className="m-0">{balances.balanceA}</p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex justify-content-around">
            <p className="m-0">B</p>
            <p className="m-0">{balances.balanceB}</p>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <Button className="align-self-end" onClick={() => history.push("/new")}>
        Add expense
      </Button>
    </div>
  );
};
