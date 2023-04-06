import React, { useState } from "react";

export default function TextForm(props) {
  // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState("");
  //   text = "new text"; // wrong way to change the state
  //   setText("new text"); // Correct way to change the state
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: "+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleOnChange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };
  const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra spaces!", "success");
  };

  return (
    <>
      <div className="container my-3" style={{color: props.mode==='light'?'rgb(2 2 42)':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode==='light'?'white':'rgb(2 2 42)',color: props.mode==='light'?'rgb(2 2 42)':'white'}}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='light'?'rgb(2 2 42)':'white'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox above to preview it here"}</p>
      </div>
    </>
  );
}
