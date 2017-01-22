import {observable} from "mobx";

export class DrawerViewModel {
    @observable open: boolean;
    constructor() {
        // ...
        this.open = false;
    }
    handleChange = (args: any) => {
        Object.assign(this, args);
    }
}

export const drawerViewModel = new DrawerViewModel();