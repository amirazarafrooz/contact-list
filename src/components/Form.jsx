import { useState } from "react";
import "../CSS/Form.css";
import Button from "./Button";

const Form = ({
  nameChangeHandler,
  value,
  phoneChangeHandler,
  phoneNum,
  submitFormHandler,
  emailChangeHandler,
  emailAdd,
  nameErrorMessage,
  phoneErrorMessage,
  emailErrorMessage
}) => {
  // const [buttonText,setButtonText] = useState('')

  // const buttonTextHandler = (e) => {
  //     setButtonText(e.target.value);
  //   }

  return (
    <div className="formContainer">
      <label className="input-label">
        <img src="./src/assets/images/new-contact.svg"></img>
        Add new contact
      </label>

      <form className="form">
        <div className="inputgroup-name">
          <label class="input-icon">
            <img src="./src/assets/images/name-icon.svg"></img>
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter name"
            value={value}
            onChange={nameChangeHandler}
          />
          <label className="name-error" >{nameErrorMessage}</label>
        </div>
        <div className="inputgroup-phone">
          <label className="input-icon">
            <img src="./src/assets/images/phone-icon.svg"></img>
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter number"
            value={phoneNum}
            onChange={phoneChangeHandler}
          />
          <label className="name-error" >{phoneErrorMessage}</label>
        </div>
        <div className="inputgroup-email">
          <label class="input-icon">
            <img src="./src/assets/images/email-icon.svg"></img>
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter email"
            value={emailAdd}
            onChange={emailChangeHandler}
          />
          <label className="name-error" >{emailErrorMessage}</label>
        </div>
       <div className="confirm"> <Button submitFormHandler={submitFormHandler} buttonText="✅"></Button>
       </div>
      </form>
    </div>
  );
};

export default Form;
