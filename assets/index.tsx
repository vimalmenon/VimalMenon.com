import * as React from "react";
import * as ReactDOM from "react-dom";

const value:string = "Vimal Menon";

ReactDOM.render(
	<div>
        {value}
    </div>,
	document.getElementById("main"),
);