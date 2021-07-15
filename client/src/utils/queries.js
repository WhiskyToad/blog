import axios from "axios";
import { useQuery } from "react-query";

const API = axios.create({
  baseURL: "https://king-of-tech.herokuapp.com/api",
});

//All blogs
export function GetBlogs() {
  return useQuery("blogs", async () => {
    const { data } = await API.get(`/blog/`);
    return data;
  });
}

//One blog
export function GetBlog(slug) {
  return useQuery(`${slug}`, async () => {
    const { data } = await API.get(`/blog/${slug}`);
    return data;
  });
}

//category view
export function GetCategory(category, config) {
  return useQuery(`${category}`, async () => {
    const { data } = await API.post(`/blog/category`, { category }, config);
    return data;
  });
}
