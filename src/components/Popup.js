/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Popup(props) {
  const {
    showPopup,
    title,
    handleFormSubmit,
    incomeType,
    handleInput,
    handleSubmit,
    handleClose,
  } = props;
  return (
    <div>
      <Modal show={showPopup}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <label>
              {incomeType} :{" "}
              <input name="addedMoney" type="number" onChange={handleInput} />
            </label>
            <label>
              Add Description:{" "}
              <input name="description" type="text" onChange={handleInput} />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Popup;
