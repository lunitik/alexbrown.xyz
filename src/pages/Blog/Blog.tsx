import "./Blog.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogs } from "../../providers/BlogsDataProvider/useBlogs";
import { getBlogDataBySlug } from "../../features/blogsearchhelpers";
import { Suspense, lazy } from "react";
import Loading from "../../components/Loading/Loading";
import { Container, Typography, useTheme } from "@mui/material";
const PageBackground = lazy(
    () => import("../../components/PageBackground/PageBackground")
);
const BlogHeroBanner = lazy(
    () => import("../../components/BlogHeroBanner/BlogHeroBanner")
);

function Blog() {
    const theme = useTheme();
    const { title } = useParams();
    const navigate = useNavigate();
    const blogs = useBlogs();

    if (!blogs) return <Loading />;
    
    if (title == undefined) {
        throw new Error("no title from url");
    }

    const slug = title;
    const blog = getBlogDataBySlug(slug, blogs);

    if (blog == undefined) {
        console.log("no")
        navigate("/404");
    } else {
        return (
            <Suspense fallback={<Loading />}>
                {/* <Seo pageKey='blogs'/> */}
                <BlogHeroBanner blog={blog} />
                <article
                    className="blog__container"
                    data-colour-mode={theme.palette.mode}
                >
                    <Container fixed>
                        <Typography variant="body1">{blog.body}</Typography>
                    </Container>
                </article>
                <PageBackground backgroundUrl={blog.seed} />
            </Suspense>
        );
    }

}

export default Blog;
