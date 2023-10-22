import { createContext } from "react";
import { BlogData } from "../../components/BlogCard/BlogCard";

export const BlogsContext = createContext<BlogData[] | undefined>([]);