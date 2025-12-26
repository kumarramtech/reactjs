{/* <div id ="parent">
    <div id = "child">
        <h1>This is H1 tag</h1>
    </div>
</div> */}

const divtag = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[React.createElement("h1",{},"This is H1 tag"),
        React.createElement("h2",{},"This is H2 tag")]));

// const heading = React.createElement("h1",{id:"heading"},"Welcome to React JS")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(divtag)

