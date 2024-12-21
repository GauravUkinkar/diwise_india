import React, { useState } from "react";
import "./blog.scss";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const Blog = () => {


  const blogdata = [
    {
      id: 1,
      img: "https://img.freepik.com/premium-photo/medium-shot-woman-influencer-marketing_23-2150521883.jpg?w=1380",
      link1: "#",
      date: "25",
      month: "NOV",
      link2: "#",
      link3: "#",
      title: "Get few solutions to hire a best candidate",
      img1: "https://img.freepik.com/free-photo/indian-business-man-with-crossed-arm-dark-wall_231208-2668.jpg?t=st=1734759839~exp=1734763439~hmac=bf4c6a4cbd7ad44a9b93d25d2c352a85362d3eca8073e03abd534ab796372a38&w=1380",
      username: "by Mike Hardson",
    },
    {
      id: 2,
      img: "https://img.freepik.com/premium-photo/social-media-marketing-concept-with-businessman-holding-smartphone_50039-1940.jpg?w=1380",
      link1: "#",
      date: "12",
      month: "OCT",
      link2: "#",
      link3: "#",
      title: "Innovative ideas for year of 2024",
      img1: "https://img.freepik.com/free-photo/indian-business-man-with-crossed-arm-dark-wall_231208-2668.jpg?t=st=1734759839~exp=1734763439~hmac=bf4c6a4cbd7ad44a9b93d25d2c352a85362d3eca8073e03abd534ab796372a38&w=1380",
      username: "by Jane Doe",
    },
    {
      id: 3,
      img: "https://img.freepik.com/premium-photo/view-3d-emoticons-coming-out-screen-electronic-device_23-2151380220.jpg?w=1380",
      link1: "#",
      date: "08",
      month: "SEP",
      link2: "#",
      link3: "#",
      title: "How to improve business efficiency",
      img1: "https://img.freepik.com/free-photo/indian-business-man-with-crossed-arm-dark-wall_231208-2668.jpg?t=st=1734759839~exp=1734763439~hmac=bf4c6a4cbd7ad44a9b93d25d2c352a85362d3eca8073e03abd534ab796372a38&w=1380",
      username: "by John Smith",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/hand-holding-smartphone-social-media-concept_23-2150208259.jpg?t=st=1734763206~exp=1734766806~hmac=8d3d2bf10c59c66fccc15b80ef9746f9fbb5e8e9501f11271105800407e587c6&w=1380",
      link1: "#",
      date: "08",
      month: "SEP",
      link2: "#",
      link3: "#",
      title: "How to improve business efficiency",
      img1: "https://img.freepik.com/free-photo/indian-business-man-with-crossed-arm-dark-wall_231208-2668.jpg?t=st=1734759839~exp=1734763439~hmac=bf4c6a4cbd7ad44a9b93d25d2c352a85362d3eca8073e03abd534ab796372a38&w=1380",
      username: "by John Smith",
    },
    {
    id: 5,
    img: "https://img.freepik.com/premium-photo/medium-shot-woman-influencer-marketing_23-2150521883.jpg?w=1380",
    link1: "#",
    date: "25",
    month: "NOV",
    link2: "#",
    link3: "#",
    title: "Get few solutions to hire a best candidate",
    img1: "https://img.freepik.com/free-photo/indian-business-man-with-crossed-arm-dark-wall_231208-2668.jpg?t=st=1734759839~exp=1734763439~hmac=bf4c6a4cbd7ad44a9b93d25d2c352a85362d3eca8073e03abd534ab796372a38&w=1380",
    username: "by Mike Hardson",
  },
    
  ];

  const [displayblog, setdisplayblog]= useState(blogdata);
const [visibleitemcount, setvisibleitemcount] = useState(3);
const handleloadmore = () => {
    setvisibleitemcount(prevCount => prevCount +3);
    setdisplayblog(blogdata.slice(0, visibleitemcount + 3));
}

  return (
    <div className="blog-parent parent">
      <div className="blog-cont container">
        <div className="top">
          {blogdata.slice(0, visibleitemcount).map((blog) => (
            <div key={blog.id} className="blog-card">
              <a href={blog.link1} className="blog-card-top">
                <div
                  className="bg-img bg-img-cover"
                  style={{ backgroundImage: `url(${blog.img})` }}
                ></div>
                <div className="blog-date">
                  {blog.date} <span>{blog.month}</span>
                </div>
              </a>
              <div className="blog-card-bottom">
                <div className="blog-category-parent">
                  <div className="left">
                    <div className="icon">
                      <FaRegFolderOpen />
                    </div>
                    <div className="title">
                      <a href={blog.link2}>Business</a>
                    </div>
                  </div>
                  <div className="right">
                    <div className="icon">
                      <FaRegComment />
                    </div>
                    <div className="title">
                      <a href={blog.link3}>03 Comments</a>
                    </div>
                  </div>
                </div>
                <h4 className="blog-heading">
                  <a href={blog.link1}>{blog.title}</a>
                </h4>
                <div className="user">
                  <div
                    className="admin bg-img-cover"
                    style={{ backgroundImage: `url(${blog.img1})` }}
                  ></div>
                  <div className="admin-name">{blog.username}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bottom">
          {" "}
          <div className="cta" onClick={handleloadmore}>Load More</div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
