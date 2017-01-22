import * as React from "react";

export interface ITheme extends __MaterialUI.Styles.MuiTheme {
    main?: React.CSSProperties;
    footer?: React.CSSProperties;
}

export interface IThemedProps {
    theme?: ITheme;
}
