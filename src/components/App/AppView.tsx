import { inject, observer } from "mobx-react";
import * as React from "react";
import AppBar from "material-ui/AppBar";

import { AppViewModel, appViewModel } from "./AppViewModel";

import { DrawerView, drawerViewModel } from "../drawer";
import { IThemedProps } from "../theme";
import Paper from "material-ui/Paper";


export interface AppViewProps extends IThemedProps {
    viewModel?: AppViewModel;
}

@inject("theme") @observer
export class AppView extends React.Component<AppViewProps, {}> {
    constructor(props: AppViewProps) {
        super(props);
    }
    render() {
        let theme = this.props.theme;
        let mainStyle = theme.main;
        mainStyle.flexAlign = null;
        mainStyle.flexDirection = null;
        mainStyle.alignItems = null;
        mainStyle.top = "15px";

        const viewModel = this.props.viewModel || appViewModel;

        // let marginBottom = "100px"; // theme.footer.heigh;
        return ((
            <div className="content">
                <AppBar
                    title={viewModel.brand}
                    onLeftIconButtonTouchTap={() => drawerViewModel.handleChange({ open: true })}
                    style={{ position: "fixed" }}
                    />
                <DrawerView viewModel={drawerViewModel} />
                <Paper style={mainStyle}>
                    <div>Hello</div>
                </Paper>
                {
                    // <div style={theme.footer}>
                    // <Footer />
                    // </div>
                }
            </div>));
    }
};
