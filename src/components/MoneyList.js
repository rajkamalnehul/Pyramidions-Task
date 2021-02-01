/** @format */

import React from "react";
import { ListGroup } from "react-bootstrap";

function MoneyList(props) {
  const { index, btnType, date, description, moneyValue } = props;
  return (
    <div>
      <ListGroup.Item
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        key={index}
        variant={btnType ? "danger" : "success"}
      >
        <div>{date}</div>
        <div>{description}</div>
        <div>
          {"Rs."}
          {moneyValue}
        </div>
      </ListGroup.Item>
    </div>
  );
}

export default MoneyList;
