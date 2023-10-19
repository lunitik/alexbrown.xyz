import { useParams } from "react-router-dom";

function Blog() {
    const { title } = useParams();
    return (
        <p>{title}</p>
    );
}

export default Blog;