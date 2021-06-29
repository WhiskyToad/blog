import axios from "axios";
import { useQuery } from "react-query";

//All blogs
export function GetBlogs() {
  return useQuery("blogs", async () => {
    const { data } = await axios.get(`http://localhost:8000/api/blog/`);
    return data;
  });
}

//One blog
export function GetBlog(slug) {
  return useQuery(`${slug}`, async () => {
    const { data } = await axios.get(`http://localhost:8000/api/blog/${slug}`);
    return data;
  });
}
