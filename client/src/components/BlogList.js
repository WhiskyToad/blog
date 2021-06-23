import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const BlogList = () => {
  const { isLoading, isError, data, error } = GetBlogs();

  const blogDisplay = (blogs) => {
    let list = [];
    let result = [];

    blogs.map((blogPost) => {
      return list.push(
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">
              Category
            </strong>
            <h3 className="mb-0">{blogPost.title}</h3>
            <div className="mb-1 text-muted">
              {blogPost.month} {blogPost.day}
            </div>
            <p className="card-text mb-auto">{blogPost.excerpt}</p>
            <Link to={`/blog/${blogPost.slug}`} className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              width="200"
              height="250"
              src={blogPost.thumbnail}
              alt="thumbnail"
            />
          </div>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="row mb-2">
          <div className="col-md-6">{list[i]}</div>
          <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      );
    }

    return result;
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return <div className="container mt-3">{blogDisplay(data)}</div>;
};

function GetBlogs() {
  return useQuery("posts", async () => {
    const { data } = await axios.get(`http://localhost:8000/api/blog/`);
    return data;
  });
}

export default BlogList;
