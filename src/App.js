import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body"
import Header from "./components/Header"

// Header
// Body
// Footer

const App = () => (
  <div className="app-id">
   <Header/>
   <Body/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);