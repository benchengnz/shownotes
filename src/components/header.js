import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FaTrashAlt, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

function Header(props) {
  const handleOnChange = (event) => {
    console.log(event.target.value.toString());
    props.setTextAction(event.target.value.toString());
  };

  const handleClearText = (e) => {
    props.setTextAction('');
  };

  return (
    <div className="row">
      <div className="col-8">
        <Form.Select onChange={handleOnChange}>
          {props.options.map((element) => {
            return (
              <option key={element.key} value={element.ctext}>
                {element.text}
              </option>
            );
          })}
        </Form.Select>
      </div>
      <div className="col-1">
        <button onClick={props.increaseFontSize} variant="outline-Info">
                  <FaPlusCircle size={24}/></button>
      </div>
      <div className="col-1">
              <button onClick={props.descreaseFontSize} variant="outline-Info">
                  <FaMinusCircle size={24} />
        </button>
      </div>
      <div className="col-1">
        <button onClick={handleClearText} variant="outline-danger">
          <FaTrashAlt size={24} />
        </button>
      </div>
    </div>
  );
}

export default Header;
