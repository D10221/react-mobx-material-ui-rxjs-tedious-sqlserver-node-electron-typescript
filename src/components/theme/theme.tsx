import * as React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { Provider } from "mobx-react";
import { theme } from "./theme-local";

const muiTheme = getMuiTheme(theme);

export class Theme extends React.Component<any, any> {
    render() {
        const children = this.props.children;
        return (
            <Provider theme={muiTheme}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    {children}
                </MuiThemeProvider>
            </Provider>
    ); }
}