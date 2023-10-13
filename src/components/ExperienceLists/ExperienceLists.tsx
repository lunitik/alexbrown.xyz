import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography, useTheme } from '@mui/material';
import './ExperienceLists.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

function ExperienceLists(props: { heading: string, listItems: Array<string> }) {
    const theme = useTheme();
    const colourModeClassName = `experiencelists experiencelists-colour-mode--${theme.palette.mode}`;

    return (
        <List
            dense={true}
            className={colourModeClassName}
            subheader={
                <ListSubheader component="div" className="experiencelists__subheader">
                    <Typography variant="h3">
                        {props.heading}
                    </Typography>
                </ListSubheader>
            }>
                {
                    props.listItems.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faSquareCheck} />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        );
                    })
                }
        </List>
    );
}

export default ExperienceLists;