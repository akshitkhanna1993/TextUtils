import React from "react";

function Alert(props) {
  return (
    <div style={{height:'50px'}}>
    {props.alert && 
        <div className="alert alert-primary " role="alert">
          <strong>
            {" "}
            {props.alert.type}! {props.alert.msg}{" "}
          </strong>
        </div> }
      </div>
  );
}

export default Alert;
