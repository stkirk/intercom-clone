import React from "react";

const EmailForm = ({ userSelectionHandler, customerData, submitHandler }) => {
  const onSubmitHelper = (e) => {
    submitHandler(e);
  };

  const onChangeHelper = (e) => {
    userSelectionHandler(e, null);
  };

  return (
    <div className="emailForm">
      <form className="chatForm" onSubmit={onSubmitHelper}>
        <input
          className="emailInput"
          placeholder="Enter your business email"
          type="email"
          name="email"
          value={customerData.email}
          onChange={onChangeHelper}
        />
        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
};

export default EmailForm;
