import "./Blog.scss";
import { useParams } from "react-router-dom";
import { useBlogs } from "../../providers/BlogsDataProvider/useBlogs";
import { getBlogDataBySlug } from "../../features/blogsearchhelpers";
import { Suspense, lazy, useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { Container, Typography, useTheme } from "@mui/material";
import { Seo } from "../../components/SEO/SEO";
import { BlogData } from "../../components/BlogCard/BlogCard";
import { AppRoute } from "../../localization/AppLanguages";
const BackButton = lazy(() => import("../../components/BackButton/BackButton"));
const PageBackground = lazy(
    () => import("../../components/PageBackground/PageBackground")
);
const BlogHeroBanner = lazy(
    () => import("../../components/BlogHeroBanner/BlogHeroBanner")
);

function Blog() {
    const theme = useTheme();
    const { title } = useParams();
    const blogs = useBlogs();
    const [blog, setBlog] = useState<BlogData>({} as BlogData);

    useEffect(() => {
        if (blogs != undefined && title != undefined) {
            setBlog(getBlogDataBySlug(title, blogs));
        }
    }, [blogs, title]);

    if (!blogs) return <Loading />;

    return (
        <Suspense fallback={<Loading />}>
            <Seo pageKey={`blog.${blog.slug}`} />
            <BlogHeroBanner blog={blog} />
            <article
                className="blog__container"
                data-colour-mode={theme.palette.mode}
            >
                <Container fixed>
                    <Typography variant="body1">{blog.body}</Typography>
                </Container>
                <Container className="blog__navigation" fixed>
                    <BackButton page={AppRoute.Blogs} />
                </Container>
            </article>
            <PageBackground backgroundUrl={blog.seed} />
        </Suspense>
    );
}

export default Blog;
