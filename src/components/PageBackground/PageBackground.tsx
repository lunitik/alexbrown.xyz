import { useTheme } from '@mui/material';
import './PageBackground.scss';

function PageBackground(props: {backgroundUrl? : number}) {
    const theme = useTheme();
    
    return (
        <div
            className={`pagebackground ${props.backgroundUrl == undefined ? "default" : ""}`}
            data-color-mode={theme.palette.mode}
            aria-hidden="true"
            style={props.backgroundUrl == undefined ? {} : {backgroundImage: `url("https://picsum.photos/seed/${props.backgroundUrl}/1920/1080")`}}
        ></div>
    );
}

export default PageBackground;