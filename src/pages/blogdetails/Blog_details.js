import React, { useEffect, useState } from "react";
import "./blog_details.scss";
import { IoSearch } from "react-icons/io5";
import { MdCategory, MdOutlineArrowRightAlt } from "react-icons/md";

import { useParams } from "react-router-dom";
import axios from "axios";

const Blog_details = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [blogAll, setBlogAll]=useState([]);


  const fetchBlogDetail = async () => {
    try {
      const response = await axios.get(`https://admin.backend.diwise.in/blog/getBlogById/${id}`);
      setBlog(response.data.response);
    

    } catch (error) {
      alert('Error Fetching Blog')
    }
  }
  const fetchBlog = async () => {
    try {
      const response = await axios.get("https://admin.backend.diwise.in/blog/getAllBlog");
      setBlogAll(response.data.response);
      

    } catch (error) {
      alert('Error Fetching Blog')
    }
  }

  useEffect(() => {
    fetchBlogDetail();
    fetchBlog(); 
   }, [])

  
  // Declare the categories array first
  const categories = [
    "Web Development",
    "Graphic Designing",
    "Technology",
    "Marketing",
  ];

  // Initialize the active category with the second category
  const [activeCategory, setActiveCategory] = useState(categories[1]);

  return (
    <div className="blog-detail-parent parent">

      <div className="blog-detail-cont container">
        {blog.map((blog) => (
          <div className="left">
            <div className="blog-image bg-img-cover" 
             style={{ backgroundImage: `url(https://images.diwise.in/diwiseblog/${blog.image})` }}
            >
              <div className="date">
                {blog.date}
              </div>
            </div>
            <div className="category-box">
              <div className="middle">
                <div className="icon"><MdCategory /></div>
                <div className="titlen">category</div>
              </div>

            </div>
            <h3 className="title">
              {blog.title}
            </h3>
            <p className="blog-content">{blog.description}</p>
          </div>

        ))}
        <div className="right">
          <div className="search-box">
            <form className="search-blog-form">
              <input type="text" />
              <span className="search-in"><IoSearch /></span>
            </form>
          </div>

          <div className="latest-post-box">
            <h3>Latest Post</h3>
            {blogAll.slice(0,3).map((blogItem, index) => (
              <div key={index} className="post-div">
                <div  className="post-img bg-img-cover" alt="img"
                 style={{ backgroundImage: `url(https://images.diwise.in/diwiseblog/${blogItem.image})` }}
                > </div>
                <h5 className="latest-post-heading">{blogItem.title}</h5>
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
            {blogAll.map((category, index) => (
              <div
                key={index}
                className={`category ${activeCategory === category ? "active" : ""}`}
                onMouseEnter={() => setActiveCategory(category)} // Change active category on hover
                onMouseLeave={() => setActiveCategory(blogAll[1])} // Revert to second category
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
