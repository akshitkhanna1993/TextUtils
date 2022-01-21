import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleOnClickUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Changed to upper case','Success')
  };

  const handleOnClickLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Changed to lower case','Success')
  };

  const handleOnClickClear = () => {
    setText("");
    props.showAlert('Text cleared','Success')
  };

  const handleCopy = () => {
    let text = document.getElementById("text");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text copied','Success')
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div
        className="container my-25"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black"
            }}
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="text"
            rows="3"
          ></textarea>
        </div>
        <button  disabled={text.length===0} className="btn btn-primary" onClick={handleOnClickUp}>
          Change To UpperCase
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleOnClickLow}>
          Change To LowerCase
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleOnClickClear}>
          Clear Text
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Handle Space
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black"
        }}
      >
        <h2> Your text summary </h2>
        <p>
          {" "}
          {text.split(" ").filter((item)=>{return item.length!=0}) .length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minute read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
