import "../HeroBanner/HeroBanner.scss";
import { Typography, useTheme } from "@mui/material";
import { BlogData } from "../BlogCard/BlogCard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BlogHeroBanner(props: {
    blog: BlogData
}) {
    const theme = useTheme();
    const colourModeClasses = `herobanner__container herobanner__container-colour-mode--${theme.palette.mode}`;

    return (
        <section className={colourModeClasses}>
            <Typography variant="h1" className="herobanner__heading">
                {props.blog.title}
            </Typography>
        </section>
    );
}

export default BlogHeroBanner;
