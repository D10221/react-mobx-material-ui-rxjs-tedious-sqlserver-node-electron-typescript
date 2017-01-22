// import { cyan500 } from "material-ui/styles/colors";
import { ITheme } from "./interfaces";

const appBar = {
    height: 50,
};

const footer = {
    position: "fixed",
    bottom: 0,
    zIndex: 1,
    width: "100%",
    height: "50px"
};

export const theme: ITheme = {
    // palette: {
    //     textColor: cyan500,
    // },
    appBar: appBar,
    footer: footer,
    main: {
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        marginTop: "50px",
        marginBottom: footer.height,
        paddingBottom: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // marginBottom,
        // display: "flex",
        // flexDirection: "column",
        // maxHeight: "100%",
        // minHeight: "100%",
        overflowY: "auto",
        // marginBottom: "15px"
    }
};
