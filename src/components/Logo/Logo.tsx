import { NavLink } from "react-router-dom";
import './Logo.scss';
import { useTheme } from "@mui/material";

function Logo() {
    const theme = useTheme();
    const colorMode = `logo-color-mode--${theme.palette.mode}`;
    return (
        <div id="logo" className={colorMode}>
			<NavLink to="/">
                <span className="logo--start animated infinite">alex</span><span className="logo--end">brown.xyz</span>
            </NavLink>
		</div>
    )
}

export default Logo;