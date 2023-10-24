import {
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { BlogsContext } from "./BlogsContext";
import { BlogData } from "../../components/BlogCard/BlogCard";
import { MUIWrapperContext } from "../../context/MUIWrapper";

interface Props {
    children?: ReactNode
}

export const BlogsDataProvider = ({children} : Props) => {
    const [blogs, setBlogs] = useState<BlogData[]>([]);
    const muiUtils = useContext(MUIWrapperContext);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`/data/blogs-${muiUtils.locale.lng}.json`)
                .then((data) => data.json())
                .then((data) => setBlogs(data))
        }
        fetchData();
    }, [muiUtils.locale.lng]);

    return (
        <BlogsContext.Provider value={blogs}>
            {children}
        </BlogsContext.Provider>
    );
};

export default BlogsDataProvider;