import React, { useEffect, useState } from "react";
import "./blog.scss";
import { FaRegFolderOpen } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [visibleitemcount, setVisibleItemCount] = useState(3);
  const [blogData, setBlogData] = useState([]);
  const navigate = useNavigate();

  const handleLoadMore = () => {
    setVisibleItemCount((prevCount) => prevCount + 3);
  };
  const handleCardClick = (id) => {
    navigate(`/blog_detail/${id}`);
  };


  const fetchBlogList = async () => {
    try {
      const response = await axios.get("http://62.72.56.158:5000/blog/getAllBlog");
      setBlogData(response.data.response);
      console.log(response, "Fetched Blog Data");
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogList();
  }, []);

  return (
    <div className="blog-parent parent">
      <div className="blog-cont container">
        <h2>Blogs</h2>
        <div className="top">
          {blogData.slice(0, visibleitemcount).map((blog) => (
            <div key={blog.id} className="blog-card"
            onClick={() => handleCardClick(blog.id)}
            >
              <a href={blog.link1} className="blog-card-top">
                <div className="img-overlay"></div>
                  <div
                    className="bg-img bg-img-cover"
                    style={{ backgroundImage: `url(http://62.72.56.158/documents/diwiseblog/${blog.image})` }}
                  ></div>
                <div className="category-date-box">
                  <div className="category-title-box">
                    <h6 className="category-title">
                      <span>
                        <FaRegFolderOpen />
                      </span>{" "}
                      {blog.category}
                    </h6>
                  </div>
                  <div className="blog-date">{blog.date}</div>
                </div>
              </a>
              <div className="blog-card-bottom">
                <h4 className="blog-heading">
                  <a href={blog.link1}>{blog.title}</a>
                </h4>
                <p>
                  {blog.description.length > 60
                    ? blog.description.slice(0, 60) + "..."
                    : blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {visibleitemcount < blogData.length && (
          <div className="bottom">
            <div className="cta" onClick={handleLoadMore}>
              Load More
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
