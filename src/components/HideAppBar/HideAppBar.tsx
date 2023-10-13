import { AppBar, Slide, Toolbar, useScrollTrigger, useTheme } from "@mui/material";
import Logo from "../Logo/Logo";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import './HideAppBar.scss';

function HideAppBar() {
    const theme = useTheme();
    const colourModeClasses = `hideappbar hideappbar-colour-mode--${theme.palette.mode}`;
    const trigger = useScrollTrigger({
      target: window,
    });

    return (
        <>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar className={colourModeClasses} color="inherit">
                    <Toolbar disableGutters className="hideappbar__inner">
                        <Logo />
                        <NavigationMenu />
                    </Toolbar>
                </AppBar>
            </Slide>
            <Toolbar />
        </>
    );
}

export default HideAppBar;