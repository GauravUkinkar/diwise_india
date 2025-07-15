import React, { useEffect, useState } from "react";
import "./blog.scss";
import { FaRegFolderOpen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const Blog = () => {
  const [visibleItemCount, setVisibleItemCount] = useState(3);
  const [blogData, setBlogData] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const navigate = useNavigate();

  const handleLoadMore = () => {
    setVisibleItemCount((prevCount) => prevCount + 3);
  };

  const handleCardClick = (id) => {
    navigate(`/blog_detail/${id}`);
  };

  const fetchBlogList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PORT_BACKEND}blog/getallblogs`
      );

      const blogs = response.data.map((item) => item.data);

      setBlogData(blogs);
      setFetchError(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setFetchError(true);
    }
  };

  useEffect(() => {
    fetchBlogList();
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <>
      <Helmet>
        <title>
          Business & Digital Marketing Insights | DIwise Blog - Stay Updated
          with Expert Advice
        </title>
        <meta
          name="description"
          content="Stay ahead with the latest trends and insights in business growth, digital marketing, branding, and technology. Explore expert tips, case studies, and strategies from DIwise's blog to help your business succeed online."
        />
        <meta
          name="keywords"
          content="business blog, digital marketing blog, business growth insights, branding strategies, digital marketing tips, online marketing advice, business success blog, latest business trends, SEO tips, content marketing strategies, branding advice, DIwise blog, digital transformation, marketing and branding blog"
        />
      </Helmet>
      <div className="blog-parent parent">
        <div className="blog-cont container">
          <h2>Blogs</h2>
          {fetchError ? (
            <>
              {/* <h2>Blogs</h2> */}
              <div className="error-parent">
                <div className="error-message">
                  <p>Oops! Something went wrong. Please try again later.</p>
                </div>

                <div className="cta-box-blog">
                  <Link to="/" className="btn-active2">
                    Back To Home
                  </Link>
                  <a className="btn-active" onClick={handleRefresh}>
                    Refresh
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="top">
                {blogData?.slice(0, visibleItemCount).map((blog) => (
                  <div
                    key={blog?.bid}
                    className="blog-card"
                    onClick={() => handleCardClick(blog?.bid)}
                  >
                    <a href={blog.link1} className="blog-card-top">
                      <div className="img-overlay"></div>
                      <div
                        className="bg-img bg-img-cover"
                        style={{
                          backgroundImage: `url(${blog.featuredImage})`,
                        }}
                      ></div>
                      <div className="category-date-box">
                        <div className="category-title-box">
                          <h6 className="category-title">
                            <span>
                              <FaRegFolderOpen />
                            </span>{" "}
                            {blog?.category}
                          </h6>
                        </div>
                        <div className="blog-date">{blog?.date}</div>
                      </div>
                    </a>
                    <div className="blog-card-bottom">
                      <h4 className="blog-heading">
                        <a href={blog.link1}>{blog?.title}</a>
                      </h4>
                      <p
                        className="blog-content"
                        dangerouslySetInnerHTML={{
                          __html: blog?.description
                            ?.replace(/<[^>]+>/g, "")
                            ?.slice(0, 60),
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {visibleItemCount < blogData?.length && (
                <div className="bottom">
                  <div className="cta" onClick={handleLoadMore}>
                    Load More
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
