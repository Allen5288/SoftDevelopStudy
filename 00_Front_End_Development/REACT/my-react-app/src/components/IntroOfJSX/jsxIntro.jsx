// import React from "react";
import { Link } from "react-router-dom";
import "./jsxIntro.css";

const name = "Allen";
const lName = "Xie";
const currentDate = new Date(2024, 1, 1, 16);
const currentYear = currentDate.getUTCFullYear();

const imgRandomGenerate = "https://picsum.photos/200";

const customStyle = {
  color: "blue",
  fontSize: "20px",
  border: "1px solid black",
};
customStyle.color = "gray";

let greeting;
const customStyle2 = {
  color: "",
};
const currentTime = currentDate.getHours();
if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle2.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle2.color = "green";
} else {
  greeting = "Good Night";
  customStyle2.color = "blue";
}

function JsxIntro() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a paragraph</p>

      <h1>Hello {name + " " + lName}</h1>
      <h1>Hello Angain {`${name} ${lName}`}</h1>
      <p>Your lucky number is {3 + 4}</p>
      <p>Current time is: {currentDate.toLocaleString()}</p>
      <p>Copyright: {currentYear}</p>

      <div>
        <h1 className="heading">My Favourite Food</h1>
        <div>
          <img
            className="food-img"
            alt="bacon"
            src="https://th.bing.com/th/id/OSK.HERO_tVZURu2FgwXPJWlaV1T5_xFdEtULKDNeJeLVdoieJw?rs=1&pid=ImgDetMain"
          ></img>
          <img
            className="food-img"
            alt="noodles"
            src="https://th.bing.com/th/id/OIP.-LaTjueyW6mzcvZu0GFbzgHaHa?rs=1&pid=ImgDetMain"
          ></img>
          <img
            className="food-img"
            alt="banana"
            src="https://th.bing.com/th/id/R.7c12380433977e0e223a122b0e311431?rik=hBxNr6SlKdozAw&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f40000%2fvelka%2fbanana-1368111328MGo.jpg&ehk=kHfhcFj5B1lkw%2f6TVSoI0oCyHyekhH6POaqgiZEUZII%3d&risl=&pid=ImgRaw&r=0"
          ></img>
          {/* generate random pictures */}
          <img
            className="food-img"
            alt="randomColorPic"
            src={imgRandomGenerate}
          ></img>
          <img
            className="food-img"
            alt="randomGrayPic"
            src={imgRandomGenerate + "?grayscale"}
          ></img>
        </div>

        {/* Inline Styles */}
        <p style={{ color: "blue" }}>Do you like these pictures</p>
        <p style={customStyle}>Please choose one</p>
      </div>

      <h1 className="heading" style={customStyle2}>
        Greeing: {greeting}
      </h1>

      <Link to="/">Go to First Page</Link>
    </div>
  );
}

export default JsxIntro;
