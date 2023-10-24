import './BlogCard.scss';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";

export interface IBlogData {
    title: string;
    body: string;
    slug: string;
    seed: number;
}

export type BlogData = {
    title: string;
    body: string;
    slug: string;
    seed: number;
}

function BlogCard(props: {data: IBlogData}) {
    return (
        <Card className="blogcard" sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={`https://picsum.photos/seed/${props.data.seed}/340/140`}
                title={props.data.title}
                className="blogcard__media"
            />
            <CardContent className="blogcard__content">
                <Typography className="blogcard__heading" gutterBottom variant="h5" component="div">
                    {props.data.title}
                </Typography>
                <Typography className="blogcard__body" variant="body2" color="text.secondary">
                    {props.data.body}
                </Typography>
            </CardContent>
            <CardActions className="blogcard__actions">
                <Button size="small"><Link to={props.data.slug} reloadDocument>Learn more</Link></Button>
            </CardActions>
        </Card>
    );
}

export default BlogCard;
