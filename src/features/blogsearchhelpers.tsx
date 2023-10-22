import { BlogData } from "../components/BlogCard/BlogCard";

export const filterBlogs = (query: string, blogs: BlogData[]) : BlogData[] => blogs.filter(blog => blog.title.toLowerCase().includes(query.toLowerCase()));

export const getBlogDataBySlug = (slug: string, blogs: BlogData[]) : BlogData | undefined => blogs.find((blog) => blog.slug.toLocaleLowerCase() === slug);