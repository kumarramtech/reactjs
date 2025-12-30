import React from "react";
import ReactDOM from "react-dom/client";
import testImage from "./images/sample.jpeg";


const App = () => (
  <div>
    <h1>Test App</h1>
    <img src={testImage} alt="Test" width="100" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);