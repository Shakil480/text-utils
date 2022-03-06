import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    const lowerCase = word.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)} </strong>
          {props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
