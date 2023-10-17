import { Link } from "react-router-dom";
import './Logo.scss';
import { useTheme } from "@mui/material";
import React from "react";
import { getPathFromCurrentLanguage } from "../../localization/languageHelpers";
import { MUIWrapperContext } from "../../context/MUIWrapper";
import { AppRoute } from "../../localization/AppLanguages";

function Logo() {
    const theme = useTheme();    
    const muiUtils = React.useContext(MUIWrapperContext);
    const colorMode = `logo-color-mode--${theme.palette.mode}`;
    const contactLink = (
        getPathFromCurrentLanguage(muiUtils.locale.lng, AppRoute.Home)
    );

    return (
        <div id="logo" className={colorMode}>
			<Link to={contactLink}>
                <span className="logo--start animated infinite">alex</span><span className="logo--end">brown.xyz</span>
            </Link>
		</div>
    )
}

export default Logo;