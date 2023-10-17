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
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import { Menu } from '@mui/base/Menu';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { MUIWrapperContext } from "../../context/MUIWrapper";
import React from "react";
import { AppRoute } from "../../localization/AppLanguages";
import { getPathFromCurrentLanguage } from "../../localization/languageHelpers";

function NavigationMenu() {
    const theme = useTheme();
    const colourModeClass = `navigationmenu navigationmenu-colour-mode--${theme.palette.mode}`;
    const { t } = useTranslation("translation", {
        keyPrefix: "components.navigation",
    });
    const drawerWidth = 340;
    const navItems = [<LanguageSelector />, <DarkModeSelector />];
    const [mobileOpen, setMobileOpen] = useState(false);
    const muiUtils = React.useContext(MUIWrapperContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleOpenChange = () => {
        setMenuOpen((prevState) => !prevState);
    }

    const container = window.document.body;

    const contactLink = (
        getPathFromCurrentLanguage(muiUtils.locale.lng, AppRoute.Contact)
    );

    const drawer = (
        <Box className="navigationmenu__drawer" onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                {t("menu")}
            </Typography>
            <Divider />
            <List className="navigationmenu__drawer__nav">
                <NavLink className={``} to={contactLink}>
                    <Typography variant="body1">{t("contact")}</Typography>
                </NavLink>
            </List>
            <List className="navigationmenu__drawer__list">
                <Typography variant="h6" sx={{ my: 2 }}>
                    {t("utilities")}
                </Typography>
                <Divider />
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

    return (
        <nav className={colourModeClass}>
            <Box component="div" sx={{ display: { xs: "none", sm: "flex" } }}>
                <Dropdown
                    onOpenChange={handleOpenChange}>
                    <MenuButton className="navigationmenu__menubutton util__underline">
                    <Typography variant="body1">
                        {t("menu")}
                        { menuOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                    </Typography>
                    </MenuButton>
                    <Menu className={`navigationmenu__menu navigationmenu__menu-colour-mode--${theme.palette.mode}`}>
                        <MenuItem>
                            <NavLink className={`navigationmenu__link navigationmenu__link-colour-mode--${theme.palette.mode} util__underline`} to={contactLink}>
                                <Typography variant="body1">{t("contact")}</Typography>
                            </NavLink>
                        </MenuItem>
                    </Menu>
                </Dropdown>
            </Box>
            <Toolbar>
                <IconButton
                    className="navigationmenu__button__open-drawer"
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
    );
}

export default NavigationMenu;
