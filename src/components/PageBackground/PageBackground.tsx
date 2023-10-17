import { useTheme } from '@mui/material';
import './PageBackground.scss';

function PageBackground() {
    const theme = useTheme();
    
    return (
        <div
            className="pagebackground"
            data-color-mode={theme.palette.mode}
            aria-hidden="true"
        ></div>
    );
}

export default PageBackground;