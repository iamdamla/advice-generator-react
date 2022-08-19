import React, { useEffect, useState } from "react";
import "./Generator.css";
import dice from "../images/icon-dice.svg";
import dividerDesktop from "../images/pattern-divider-desktop.svg";
import dividerMobile from "../images/pattern-divider-mobile.svg";

export default function Generator() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((advice) => {
        setAdvice(advice.slip.advice);
        setId(advice.slip.id);
      });
  }, []);

  let fetchNewAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((advice) => {
        setAdvice(advice.slip.advice);
        setId(advice.slip.id);
      });
  };

  return (
    <div className="container">
      <h1 className="container-title">Advice #{id}</h1>
      <p className="container-content">"{advice}"</p>
      <img src={dividerDesktop} alt="" className="divider-desktop" />
      <img src={dividerMobile} alt="" className="divider-mobile" />
      <button onClick={fetchNewAdvice}>
        <img src={dice} alt="dice" className="dice" />
      </button>
    </div>
  );
}
