import React from "react";
import blogImg1 from "../assets/section-img2.webp";
import blogImg2 from "../assets/section-img.webp";

const BlogCard = (props) => {
  return (
    <>
      <div className="blog-card">
        <div>
          <img src={props.img} loading="lazy" alt="blog" className="blog-img" />
        </div>
        <div>
          <h2 className="blog-heading section-heading">
            HOW TO FIND GOLD IN MINING
          </h2>
          <p className="blog-time">
            JANUARY 18, 2019 BY
            <a href="#">JAMES COOPER</a>
          </p>
          <p className="blog-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et
            suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo
            cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!
          </p>
          <a href="#" className="blog-btn">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

const Blog = () => {
  return (
    <>
      <section className="section blog-section" id="blog">
        <div className="section-heading">
          <p className="heading-para">LATEST BLOG POSTS</p>
          <h2>OUR BLOG</h2>
        </div>
        <div className="blog-cards-section">
          <BlogCard img={blogImg1} />
          <BlogCard img={blogImg2} />
        </div>
      </section>
    </>
  );
};

export default Blog;
