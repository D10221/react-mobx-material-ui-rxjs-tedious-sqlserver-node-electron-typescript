import * as React from "react";
import { observer } from "mobx-react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

import { DrawerViewModel, drawerViewModel } from "./DrawerViewModel";
import * as icons from "../icons";

@observer
export class DrawerView extends React.Component<{ viewModel?: DrawerViewModel }, {}> {

    constructor(props: { viewModel: DrawerViewModel }) {
        super(props);
    }

    render() {
        const viewModel = this.props.viewModel || drawerViewModel;
        return (
            <Drawer
                docked={false}
                width={200}
                open={viewModel.open}
                onRequestChange={(open) => viewModel.handleChange({ open: !open })}
                >
                 <MenuItem
                    leftIcon={icons.cancel}
                    onTouchTap={() => viewModel.handleChange({ open: false, action: "close" })}>
                    Cancel</MenuItem>
                <MenuItem
                    leftIcon={icons.arrowUpward}
                    onTouchTap={() => viewModel.handleChange({ open: false, action: "Import" })}>
                    Import</MenuItem>
                <MenuItem
                    leftIcon={icons.arrowDownward}
                    onTouchTap={() => viewModel.handleChange({ open: false, action: "Export" })}>
                    Export
                        </MenuItem>
            </Drawer>
        );
    }
}