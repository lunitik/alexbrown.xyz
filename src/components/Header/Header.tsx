import Headroom from 'react-headroom';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import Logo from '../Logo/Logo';

import './Header.scss';
import { useTheme } from '@mui/material';

function Header() {
    const theme = useTheme();
    return (
        <Headroom tag="header" className={`headroom--color-mode-${theme.palette.mode}`}>
            <Logo />
            <NavigationMenu />
        </Headroom>
    );
}

export default Header;