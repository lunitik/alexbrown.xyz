import { BlogData } from "../components/BlogCard/BlogCard";

export const filterBlogs = (query: string, blogs: BlogData[]) : BlogData[] => blogs.filter(blog => blog.title.toLowerCase().includes(query.toLowerCase()))