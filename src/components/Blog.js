import React from 'react';
import image from '../article.jpeg';

function Blog(){
  return(
    <div id="blog" className="Blogs container">
      <h1>Blog</h1>
      <div className="row">
        <div className="blog col-md-4 col-sm-6 col-xs-12">
          <a href="https://hackernoon.com/professional-debugging-in-rails-1yr2bnz"> 
            <img className="article-img" src={image} alt="article"></img>
            <h5>Professional Debugging in Rails</h5>
            <p>Debugging is as important as writing code, it can cause your program to crash or behave unexpectedly. Most of the time, </p>
          </a>
        </div>
        <div className="blog col-md-4 col-sm-6 col-xs-12">
          <a href="https://hackernoon.com/professional-debugging-in-rails-1yr2bnz"> 
            <img className="article-img" src={image} alt="article"></img>
            <h5>Professional Debugging in Rails</h5>
            <p>Debugging is as important as writing code, it can cause your program to crash or behave unexpectedly. Most of the time, </p>
          </a>
        </div>
        <div className="blog col-md-4 col-sm-6 col-xs-12">
          <a href="https://hackernoon.com/professional-debugging-in-rails-1yr2bnz"> 
            <img className="article-img" src={image} alt="article"></img>
            <h5>Professional Debugging in Rails</h5>
            <p>Debugging is as important as writing code, it can cause your program to crash or behave unexpectedly. Most of the time, </p>
          </a>
        </div>
        <div className="blog col-md-4 col-sm-6 col-xs-12">
          <a href="https://hackernoon.com/professional-debugging-in-rails-1yr2bnz"> 
            <img className="article-img" src={image} alt="article"></img>
            <h5>Professional Debugging in Rails</h5>
            <p>Debugging is as important as writing code, it can cause your program to crash or behave unexpectedly. Most of the time, </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Blog;