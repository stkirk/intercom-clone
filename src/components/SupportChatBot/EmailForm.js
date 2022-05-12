import React from "react";

const EmailForm = ({ userSelectionHandler, customerData }) => {
  const onSubmit = () => {
    console.log("submitted!!!");
  };

  const onChangeHelper = (e) => {
    userSelectionHandler(e, null);
  };

  return (
    <div className="emailForm">
      <form onSubmit={onSubmit}>
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
