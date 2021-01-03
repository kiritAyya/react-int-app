import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ExpenseContext } from "../ExpenseContext";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";

export const Dashboard = () => {
  const history = useHistory();
  const {
    expense: [expenses],
    balance: [balances],
  } = useContext(ExpenseContext);

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div>
        <h3 className="mb-3">Balances</h3>
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
      </div>
      {expenses.length > 0 && (
        <div>
          <h3 className="mb-3">All Expenses</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sr. no</th>
                <th>Total</th>
                <th>Description</th>
                <th>Paid by A</th>
                <th>Paid by B</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((e, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td className="m-0">{e.total}</td>
                  <td className="m-0">{e.description}</td>
                  <td className="m-0">{e.shareA}</td>
                  <td className="m-0">{e.shareB}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      <Button className="align-self-end" onClick={() => history.push("/new")}>
        Add expense
      </Button>
    </div>
  );
};
