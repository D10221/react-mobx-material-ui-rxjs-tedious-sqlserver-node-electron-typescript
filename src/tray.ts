import * as electron from "electron";
import * as path from "path";
import * as fs from "fs";
const Tray = electron.Tray;

const icon = path.join(__dirname, "../icon.png");
export interface TrayOptions {
    icon?: string;
    window?: Electron.BrowserWindow;
}
export function createTray(options?: TrayOptions): Electron.Tray {
    options = (options || { icon });
    if (!fs.statSync(options.icon)) {
        throw new Error(`Icon Not found: ${icon}`);
    }
    let tray = new Tray(options.icon);
    const contextMenu = electron.Menu.buildFromTemplate([
        {
            label: "Hello",
            type: "normal",
            icon: options.icon
        },
        {
            label: "About",
            type: "normal"
        },
        {
            label: "Restart",
            type: "normal",
            // checked: true,
            click: () => { if (options.window) options.window.reload(); }
        }, {
            label: "DevTools",
            type: "normal",
            click: () => { if (options.window) options.window.webContents.openDevTools(); }
        },
        { label: "Quit", type: "normal" }
    ]);
    tray.setToolTip("X-App");
    tray.setContextMenu(contextMenu);
    return tray;
}