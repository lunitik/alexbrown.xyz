import { useContext } from "react";
import { BlogsContext } from "./BlogsContext";

export const useBlogs = () => useContext(BlogsContext);