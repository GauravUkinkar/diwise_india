import React, { useState } from "react";
import "./blog_details.scss";
import { FaRegComment, FaRegFolderOpen, FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdCategory, MdOutlineArrowRightAlt } from "react-icons/md";
const Blog_details = () => {


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
        <div className="left">
          <div className="blog-image">
            <div className="date">
              25 <span>NOV</span>
            </div>
          </div>
          <div className="category-box">
                       <div className="middle">
              <div className="icon"><MdCategory /></div>
              <div className="titlen">category</div>
            </div>

          </div>
          <h3 className="title">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatum, eligendi?
          </h3>
          <p className="blog-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, excepturi deleniti facere vel sapiente nobis molestiae consequuntur error voluptate labore quae dolorum nemo quasi aliquid dignissimos molestias quas quidem quia. Adipisci culpa earum excepturi molestias sint temporibus, natus maiores aliquam corporis vitae, illum, a animi nisi enim fugiat? Sed voluptatem hic harum culpa impedit, possimus alias sit quod tenetur quas nobis sunt voluptas ea rerum in iusto reiciendis velit earum perspiciatis veniam ipsum autem. expedita voluptatem nam, est soluta saepe</p>
        </div>
        <div className="right">
          <div className="search-box">
            <form className="search-blog-form">
              <input type="text" />
              <span className="search-in"><IoSearch /></span>
            </form>
          </div>

          <div className="latest-post-box">
            <h3>Latest Post</h3>
            <div className="post-div">
              <div className="post-img bg-img-cover"></div>
              <h5 className="latest-post-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h5>
            </div>
            <div className="post-div">
              <div className="post-img bg-img-cover"></div>
              <h5 className="latest-post-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h5>
            </div>
            <div className="post-div">
              <div className="post-img bg-img-cover"></div>
              <h5 className="latest-post-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h5>
            </div>
          </div>

          <div className="category-box">
      <h3 className="category-box-title">Category</h3>
      {categories.map((category, index) => (
        <div
          key={index}
          className={`category ${activeCategory === category ? "active" : ""}`}
          onMouseEnter={() => setActiveCategory(category)} // Change active category on hover
          onMouseLeave={() => setActiveCategory(categories[1])} // Revert to second category
        >
          <p className="cat-title">{category}</p>
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
