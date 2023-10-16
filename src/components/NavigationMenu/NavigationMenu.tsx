import { NavLink } from "react-router-dom";
import DarkModeSelector from "../DarkModeSelector/DarkModeSelector";
import "./NavigationMenu.scss";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Suspense, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MUIWrapperContext } from "../../context/MUIWrapper";
import React from "react";
import { AppRoute } from "../../localization/AppLanguages";
import { getPathFromCurrentLanguage } from "../../localization/languageHelpers";

function NavigationMenu() {
    const theme = useTheme();
    const colourModeClass = `navigationmenu mavigationmenu-colour-mode--${theme.palette.mode}`;
    const { t } = useTranslation("translation", {
        keyPrefix: "components.navigation",
    });
    const drawerWidth = 340;
    const navItems = [<LanguageSelector />, <DarkModeSelector />];
    const [mobileOpen, setMobileOpen] = useState(false);
    const muiUtils = React.useContext(MUIWrapperContext);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                {t("utilities")}
            </Typography>
            <Divider />
            <List className="navigationmenu__drawer__list">
                {navItems.map((item) => (
                    <ListItem
                        key={item.type}
                        alignItems="center"
                        disablePadding
                    >
                        {item}
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window.document.body;

    const contactLink = (
        getPathFromCurrentLanguage(muiUtils.locale.lng, AppRoute.Contact)
    );

    return (
        <Suspense fallback="loading">
            <nav className={colourModeClass}>
                <NavLink to={contactLink}>{t("contact")}</NavLink>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </IconButton>
                    <Box
                        className="navigationmenu__container-utility"
                        sx={{ display: { xs: "none", sm: "flex" } }}
                    >
                        {navItems.map((item) => item)}
                    </Box>
                </Toolbar>
                <Drawer
                    className="navigationmenu__drawer"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Suspense>
    );
}

export default NavigationMenu;
