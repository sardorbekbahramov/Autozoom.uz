import React from "react";
import "./Blog.css";
import BlogImageOne from "../../assets/images/blog1.jpg";
import BlogImageTwo from "../../assets/images/blog2.jpg";
import BlogImageThree from "../../assets/images/blog3.jpg";
import arrow from "../../assets/images/right-arrow.svg";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container_acb blog-box">
        <div className="blog-title">
          <h5>Аренда люксовых и спортивных авто / ПОЛЕЗНЫЕ СТАТЬИ</h5>
          <h2>ПОЛЕЗНЫЕ СТАТЬИ</h2>
        </div>
        <div className="blog-item_box">
          <div className="blog-item">
            <div className="blog-item_img">
              <img src={BlogImageOne} alt="img1" />
            </div>
            <div className="blog-item_description">
              <h3>Top 3 Destinations to Visit in Dubai in a Rental Car</h3>
              <p>
                One of the main reasons to hire a car in Dubai is the quality of
                the UAE roads. According to the World Economic Forum, the
                Emirates belong to the top seven countries with the most
                exemplary road infrastructure.
              </p>
              <div className="blog-item_description--bottom">
                <span>25 Seb 2024</span>
                <img src={arrow} alt="image" />
              </div>
            </div>
          </div>
          <div className="blog-item">
            <img
              src={BlogImageTwo}
              className="rounded-md object-cover"
              alt="img1"
            />
            <div className="blog-item_description">
              <h3>Top 5 wonderful spots for a car photo session in Dubai</h3>
              <p>
                There are so many wonderful things to do in Dubai, but when you
                rent a car your opportunities are nearly doubled. The number of
                places you will die to go to and make memorable pictures is such
                that it makes you impossible to resist to hire a mode of
                transportation, if not for a day or two, then at least for a
                couple of hours. And, while doing so, who could prove against
                the weakness of taking a photo of themselves inside or near the
                car they’ve rented?
              </p>
              <div className="blog-item_description--bottom pTop">
                <span>11 Feb 2024</span>
                <img src={arrow} alt="image" />
              </div>
            </div>
          </div>
          <div className="blog-item">
            <img
              src={BlogImageThree}
              className="rounded-md object-cover"
              alt="img1"
            />
            <div className="blog-item_description">
              <h3>Top 5 Reasons to Rent a Car Dubai Style this Summer</h3>
              <p>
                Summer is more than just a beach and a body, and Autozoom Luxury
                Car Rental is more than just a regular car hire business. We're
                your one-stop four-wheel solution to making the most of your
                time in Dubai.
              </p>
              <div className="blog-item_description--bottom">
                <span>31 Jul 2024</span>
                <img src={arrow} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
