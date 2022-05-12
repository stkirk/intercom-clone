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
      <form onSubmit={onSubmitHelper}>
        <input
          type="email"
          name="email"
          value={customerData.email}
          onChange={onChangeHelper}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EmailForm;
