import * as React from "react";
import { render } from "react-dom";

const HelloWorld = () => {
    return <div>Hello World</div>
}

render(<HelloWorld/>, document.getElementById("app"));