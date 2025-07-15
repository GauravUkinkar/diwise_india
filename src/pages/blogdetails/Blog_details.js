import React, { useEffect, useState } from "react";
import "./blog_details.scss";
import { IoSearch } from "react-icons/io5";
import { MdCategory, MdOutlineArrowRightAlt } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";

const Blog_details = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [blogAll, setBlogAll] = useState([]);

  const fetchBlogDetail = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PORT_BACKEND}blog/getBybId?bId=${id}`
      );

      const blogs = response.data.map((item) => item.data);

      setBlog(blogs);
    } catch (error) {
      alert("Error Fetching Blog");
    }
  };

  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PORT_BACKEND}blog/getallblogs`
      );
      setBlogAll(response.data.map((item) => item.data));
    } catch (error) {
      alert("Error Fetching Blog");
    }
  };

  //category search
  const categorySearch = async (categoryName) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PORT_BACKEND}blog/getblogbycategory?category=${categoryName}`
      );

      const filteredBlogs = response.data.map((item) => item.data);
      setBlogAll(filteredBlogs); // or another state if you want to store separately
    } catch (error) {
      console.log("Category fetch error:", error);
    }
  };

  useEffect(() => {
    fetchBlogDetail();
    fetchBlog();
  }, []);

  const categories = [
    "Web Development",
    "Graphic Designing",
    "Technology",
    "Marketing",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[1]);

  return (
    <div className="blog-detail-parent parent">
      <div className="blog-detail-cont container">
        {blog?.map((blog) => (
          <div className="left">
            <div
              className="blog-image bg-img-cover"
              style={{ backgroundImage: `url(${blog?.featuredImage})` }}
            >
              <div className="date">{blog?.date}</div>
            </div>
            <div className="category-box">
              <div className="middle">
                <div className="icon">
                  <MdCategory />
                </div>
                <div className="titlen">category</div>
              </div>
            </div>
            <h3 className="title">{blog?.title}</h3>
            <p className="blog-content">{blog?.description}</p>
          </div>
        ))}
        <div className="right">
          <div className="search-box">
            <form className="search-blog-form">
              <input type="text" />
              <span className="search-in">
                <IoSearch />
              </span>
            </form>
          </div>

          <div className="latest-post-box">
            <h3>Latest Post</h3>
            {blogAll?.slice(0, 3)?.map((blogItem, index) => (
              <div key={index} className="post-div">
                <div
                  className="post-img bg-img-cover"
                  alt="img"
                  style={{
                    backgroundImage: `url(${blogItem.featuredImage})`,
                  }}
                >
                  {" "}
                </div>
                <h5 className="latest-post-heading">{blogItem?.title}</h5>
              </div>
            ))}

            {/* <div className="post-div">
              <div className="post-img bg-img-cover"></div>
              <h5 className="latest-post-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h5>
            </div>
            <div className="post-div">
              <div className="post-img bg-img-cover"></div>
              <h5 className="latest-post-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h5>
            </div> */}
          </div>

          <div className="category-box">
            <h3 className="category-box-title">Category</h3>
            {blogAll?.map((category, index) => (
              <div
                key={index}
                className={`category ${
                  activeCategory === category.category ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory(category.category);
                  categorySearch(category.category); // Call API on click
                }}
              >
                <p className="cat-title">{category.category}</p>
                <MdOutlineArrowRightAlt />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_details;
