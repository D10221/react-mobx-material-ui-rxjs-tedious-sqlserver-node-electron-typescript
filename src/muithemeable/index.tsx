import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import muiThemeable from "material-ui/styles/muiThemeable";

import AppBar from "material-ui/AppBar";
import MuiThemeProviderProps = __MaterialUI.Styles.MuiThemeProviderProps;

function Themeable<TComponent extends React.Component<P, any>, P extends MuiThemeProviderProps> (Component: new () => TComponent): new() => TComponent {
    return muiThemeable<TComponent, P, any>()(Component as any) as any;
}

const themeable = <P, TFunction extends React.ComponentClass<P>>(target: TFunction): TFunction => {
    return Themeable(target as any) as any;
};

export interface MyBarProps extends __MaterialUI.AppBarProps, __MaterialUI.Styles.MuiThemeProviderProps {
    // ...
}

@themeable
export class MyBar extends React.Component<MyBarProps, any> {

    constructor(props?: MyBarProps, context?: any) {
        super(props, context);
    }

    render() {
        if (!this.props.muiTheme) {
            throw new Error("muiTheme not Found");
        }
        return (
            <AppBar {...this.props} />
        );
    }
}

const darkTheme = getMuiTheme(darkBaseTheme);
darkTheme.appBar.color = "red";

const Main = () => (
    <MuiThemeProvider muiTheme={darkTheme}>
        <MyBar title="My AppBar" />
    </MuiThemeProvider>
);

ReactDOM.render(<Main></Main>,document.getElementById("root"));