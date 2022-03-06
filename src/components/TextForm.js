import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    const upText = text.toUpperCase();
    setText(upText);
    props.showAlert("Your Text Converted to UpperCase", "success");
  };
  const handleLowClick = () => {
    const lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Your Text Converted to LowerCase", "success");
  };
  const handleOnChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };
  const handleCpClick = () => {
    const cpText = text.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    setText(cpText);
    props.showAlert("Your Text Converted to Capitalize", "success");
  };
  const handleClearClick = () => {
    const clText = "";
    setText(clText);
    props.showAlert("Your Text is Cleared", "success");
  };
  const handleScClick = () => {
    const scText = text
      .toLowerCase()
      // .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
      .replace(/(^\s*\w|[.!?]\s*\w)/g, function (c) {
        return c.toUpperCase();
      });
    setText(scText);
    props.showAlert("Your Text Converted to Sentence Case", "success");
  };
  const handleCopy = () => {
    let newText = document.querySelector("#myBox").value;
    navigator.clipboard.writeText(newText);
    props.showAlert("Your Text is Copied", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Space from your text", "success");
  };
  const countWords = () => {
    let count = 0;
    let split = text.split(" ");
    for (let i = 0; i < split.length; i++) {
      if (split[i] !== "") {
        count += 1;
      }
    }
    return count;
  };
  return (
    <>
      <h1 className="mb-4">Try TextUtils - The Best Text Utility Tool</h1>
      <div className="mb-3">
        <textarea
          style={{
            backgroundColor: `${props.mode === "light" ? "#ddd" : "#18273e"}`,
            color: `${props.mode === "light" ? "#000" : "#fff"}`,
          }}
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
          placeholder="Enter Your Text Here..."
        ></textarea>
      </div>
      <div className="container">
        <button
          disabled={text.length === 0}
          onClick={handleUpClick}
          className="btn btn-primary m-1"
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleLowClick}
          className="btn btn-primary m-1"
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleCpClick}
          className="btn btn-primary m-1"
        >
          Convert to TitleCase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleScClick}
          className="btn btn-primary m-1"
        >
          Convert to Sentence Case
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleExtraSpace}
          className="btn btn-primary m-1"
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleClearClick}
          className="btn btn-primary m-1"
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleCopy}
          className="btn btn-primary m-1"
        >
          Copy Text
        </button>
      </div>
      <div>
        <h2 className="mt-3">Your Text Summary</h2>
        <p>
          <strong>
            {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
            Words and {text.length} Charecters
          </strong>
        </p>
        <p>{0.008 * countWords()} Minutes to read text</p>
        <h2>Preview</h2>
        <p style={{ width: "100%", height: "auto" }}>
          {text.length > 0 ? text : "Nothing to preview"}
        </p>
      </div>
    </>
  );
};

export default TextForm;
