import React from "react";
import ReactDOM from "react-dom/client";


const value =250000

const JsxHeading =()=> (<h1>Welcome to ReactJS</h1>)

const HeadingComponent = ()=> (<div>
                                {JsxHeading()} {value}
                                <h1>Welcome to React Functional Component</h1>
                                </div>);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)

