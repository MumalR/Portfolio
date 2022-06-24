import React from "react";
import CardItem from "./CardItem";
import CardItemV from "./CardItemV";
import "./Cards.css";
import vid from "./Images/payroll/output.mp4";
import payroll from "./Images/payroll/Proto/welcome.png";
import webre from "./Images/Web-Dev/webre-c.png";
import web from "./Images/IOT/vid.mp4";
import ai from "./Images/ML/ai.jpg";
import minecraft from "./Images/ML/minecraft.jpg";
import roll from "./Images/Rolls.png";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out my work!</h1>
      <p>* Coming soon!</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItemV
              src={vid}
              text="PayRoll Management System"
              label="#postGreSQL #reactJs #nodeJs"
              path="/payroll"
            />
            <CardItem
              src={webre}
              text="Web-Dev"
              label="#html #css #reactJs"
              path="/web-dev"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={ai}
              text="Artificial Intelligence"
              label="#ml #data-science #python"
              path="/ai"
            />
            <CardItemV
              src={web}
              text="Rain ON ME!"
              label="#iot #arduino #embeddedC "
              path="/iot"
            />
            <CardItem
              src={minecraft}
              text="MineCraft"
              label="#java "
              path="/java"
            />
          </ul>
        </div>
      </div>
      <div className="about-sec">
        <img src={roll} className="roll" />
        <div className="about-text">
          I am a Software Engineer with an itch for{" "}
          <div className="deco-text ">creativity</div>.<br /> 
          I am skilled in :
          <div className="green-plain-text">
          ReactJS  &nbsp; &nbsp; JavaScript/TypeScript  &nbsp; &nbsp; Java   &nbsp; &nbsp; html/CSS   &nbsp; &nbsp; SQL   &nbsp; &nbsp; Git.

          </div>
          <br />
          <br />I am an eclectic person with love for books and literature
          {/* 
          <div className="green-text">
            {"{"}/<div className="red-text">*</div><div className="red-text">*</div>/{"}"}{" "}
            </div> 
          */}
          , always on hunt for spaces where I can grow{" "}
          {/* <div className="green-text">
            {"{"}/<div className="red-text">*</div>{" "}
            <div className="red-text">*</div>/{"}"}
          </div>*/}
          . I’m moved by new ideas but sometimes get inspired by history. And
          Music.<br />
          <br />
          <div className="red-text">
            {"<"}!-- The ThriLL of BeinG an Art Loving Engineer --!{">"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
