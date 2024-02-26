import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  let [divstyle, setDivstyle] = useState({
    backgroundColor: "cyan",
    color: "yellow",
  });
  let togglestyle = {
    width:"50px",
    height:"25px",
    marginBottom:"45px",
    border:"1px solid black"
    
  }
  const toggleday = () => {
    if (divstyle.color === "yellow") {
      setDivstyle({
        backgroundColor: "black",
        color: "white",
      });
    }
    if (divstyle.color === "white") {
      setDivstyle({
        backgroundColor: "cyan",
        color: "yellow",
      });
    }
  };
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert('converted to upper case',"success")
  };
  const handledownclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert('converted to lower case',"success")
  };
  const handleclearclick = ()=>{
    let newtext = " "
    setText(newtext)
    props.showAlert('textarea cleared',"success")
  }
  const handlecopyclick = ()=>{
    navigator.clipboard.writeText(text)
    props.showAlert('copied to clipboard',"success")
  }
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  let textstyle = {
    border:"2px solid black"
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container mb-3">
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            value={text}
            style={textstyle}
            onChange={handleonchange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>

        <div className="block ">
          <button className="btn btn-primary my-3 mx-3" onClick={handleupclick}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary" onClick={handledownclick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary mx-3" onClick={handleclearclick}>
            Clear
          </button>
          <button className="btn btn-primary mx-3" onClick={handlecopyclick}>
            copy
          </button> 
        </div>
      </div>
      <div className="container ">
        <h1 style={divstyle}>Your Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string,
};

Textform.defaultProps = {
  heading: "textarea",
};
