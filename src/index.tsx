import * as React from "react";
import * as ReactDOM from "react-dom";

import * as injectTapEventPlugin from "react-tap-event-plugin";
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import {AppView} from "./components/App";
import {Theme} from "./components/theme";

ReactDOM.render(
    <Theme><AppView/></Theme>,
    document.getElementById("root"));