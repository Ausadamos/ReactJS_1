//import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
// const App = function(){
//     return <div>Hi there!</div>
// }
function getButtonText() {
  return "Click on me!";
}
const App = () => {
  const buttonText = "Click Me!";
  const buttonText2 = { text: "Click Me!" };
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText2.text}</button>
    </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
