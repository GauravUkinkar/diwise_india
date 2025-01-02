import React, { useEffect, useState } from "react";
import "./blog.scss";
import { FaRegFolderOpen } from "react-icons/fa";
import axios from 'axios'

const Blog = () => {
  
  //   {
  //     id: 1,
  //     img: "https://img.freepik.com/premium-photo/medium-shot-woman-influencer-marketing_23-2150521883.jpg?w=1380",
  //     link1: "#",
  //     date: "25",
  //     category: 'Web Designing',
  //     month: "NOV",
  //     link2: "#",
  //     title: "Get few solutions to hire a best candidate",
  //     blog_p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, excepturi deleniti facere vel sapiente nobis molestiae consequuntur error voluptate labore quae dolorum nemo quasi aliquid dignissimos molestias quas quidem quia. Adipisci culpa earum excepturi molestias sint temporibus, natus maiores aliquam corporis vitaeLorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, excepturi deleniti",
  //   },
  //   {
  //     id: 2,
  //     img: "https://img.freepik.com/premium-photo/social-media-marketing-concept-with-businessman-holding-smartphone_50039-1940.jpg?w=1380",
  //     link1: "#",
  //     date: "12",
  //     category: 'Busseness',
  //     month: "OCT",
  //     link2: "#",
  //     title: "Innovative ideas for year of 2024",
  //     blog_p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, excepturi deleniti facere vel sapiente nobis molestiae consequuntur error voluptate labore quae dolorum nemo quasi aliquid dignissimos molestias quas quidem quia. Adipisci culpa earum excepturi molestias sint temporibus, natus maiores aliquam corporis vitaeLorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, excepturi deleniti",
  //   },
  //   {
  //     id: 3,
  //     img: "https://img.freepik.com/premium-photo/view-3d-emoticons-coming-out-screen-electronic-device_23-2151380220.jpg?w=1380",
  //     link1: "#",
  //     date: "08",
  //     category: 'Digital Marketing',
  //     month: "SEP",
  //     link2: "#",
  //     title: "How to improve business efficiency",
  //     blog_p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, excepturi deleniti facere vel sapiente nobis molestiae consequuntur error voluptate labore quae dolorum nemo quasi aliquid dignissimos molestias quas quidem quia. Adipisci culpa earum excepturi molestias sint temporibus, natus maiores aliquam corporis vitaeLorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, excepturi deleniti",
  //   },
  //   {
  //     id: 4,
  //     img: "https://img.freepik.com/free-photo/hand-holding-smartphone-social-media-concept_23-2150208259.jpg?t=st=1734763206~exp=1734766806~hmac=8d3d2bf10c59c66fccc15b80ef9746f9fbb5e8e9501f11271105800407e587c6&w=1380",
  //     link1: "#",
  //     date: "08",
  //     category: 'Digital Marketing',
  //     month: "SEP",
  //     link2: "#",
  //     title: "How to improve business efficiency",
  //     blog_p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, excepturi deleniti facere vel sapiente nobis molestiae consequuntur error voluptate labore quae dolorum nemo quasi aliquid dignissimos molestias quas quidem quia. Adipisci culpa earum excepturi molestias sint temporibus, natus maiores aliquam corporis vitaeLorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, excepturi deleniti",
  //   },
  //   {
  //     id: 5,
  //     img: "https://img.freepik.com/premium-photo/medium-shot-woman-influencer-marketing_23-2150521883.jpg?w=1380",
  //     link1: "#",
  //     date: "25",
  //     month: "NOV",
  //     category: 'Digital Marketing',
  //     link2: "#",
  //     title: "Get few solutions to hire a best candidate",
  //     blog_p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, excepturi deleniti facere vel sapiente nobis molestiae consequuntur error voluptate labore quae dolorum nemo quasi aliquid dignissimos molestias quas quidem quia. Adipisci culpa earum excepturi molestias sint temporibus, natus maiores aliquam corporis vitaeLorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, excepturi deleniti",
  //   },
  // ];



  const [visibleitemcount, setvisibleitemcount] = useState(3);

  const handleloadmore = () => {
    setvisibleitemcount((prevCount) => prevCount + 3);
  };

  const [blogData, setBlogData] = useState([]);

  const blogList = async () => {
    try {
      const response = await axios.get('http://62.72.56.158:5000/blog/getAllBlog',
      );
      setBlogData(response.data.response);

    } catch (error) {
   
    }
  }
  
  useEffect(() => {
    blogList();
  }, []);



  return (
    <>
     
       <div className="blog-parent parent">
        <div className="blog-cont container">
          <div className="top">
            {blogData.map((blog) => (
              <div key={blog.id} className="blog-card">
                <a href={blog.link1} className="blog-card-top">
                  <div className="img-overlay"></div>
                  <div
                    className="bg-img bg-img-cover"
                    style={{ backgroundImage: `url(${blog.image})` }}
                  ></div>
                  <div className="category-date-box">
                    <div className="category-title-box">
                      <h6 className="category-title" >  <span> <FaRegFolderOpen /></span> {blog.category}</h6>

                    </div>
                    <div className="blog-date">
                      {blog.date} 
                    </div>
                  </div>

                </a>
                <div className="blog-card-bottom">
                  <div className="blog-category-parent">
                  </div>
                  <h4 className="blog-heading">
                    <a href={blog.link1}>{blog.title}</a>
                  </h4>
                  <p>
                    {blog.description.length > 40
                      ? blog.description.slice(0, 60) + "..."
                      : blog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* {visibleitemcount < blogData.length && (
            <div className="bottom">
              <div className="cta" onClick={handleloadmore}>
                Load More
              </div>
            </div>
          )} */}
        </div>
      </div> 

    </>

  );
};

export default Blog;
