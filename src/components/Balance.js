/** @format */

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Balance({ currentBalance, income, spended }) {
  return (
    <div>
      <Row>
        <Col style={{ backgroundColor: "#c3c3c3", height: "100px" }}>
          <div>
            <Col style={{ textAlign: "start", marginTop: "35px" }}>
              <label>
                <b>Balance: </b> Rs. {currentBalance}
              </label>
              <div>
                <Row>
                  <Col>
                    <label>Income: {income}</label>
                  </Col>
                  <Col>
                    <label>Spended: {spended}</label>
                  </Col>
                </Row>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Balance;
