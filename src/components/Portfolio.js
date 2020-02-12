/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import designImage from '../interiorDesign.png';
import showTalk from '../showTalk.png';
import battleship from '../battleship.png';
import FB from '../FB.png';
import bookstore from '../bookstore.png';
import weather from '../weather.png';

function Portfolio(){
  function filterSelection(e) {
    var c=e.target.id;
    var x, i;
    x = document.getElementsByClassName("filterDiv w3-animate-zoom");
    if (c === "all") c = "";
    for (i = 0; i < x.length; i++) {
      RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
  }

  // Show filtered elements
  function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  // Hide elements that are not selected
  function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  return(
    <div id="portfolio" className="Portfolio">
      <h1>PORTFOLIO</h1>
      <div id="myBtnContainer">
        <button className="btn active" id="all" onClick={filterSelection}> ALL</button>
        <button className="btn" id="react" onClick={filterSelection}> REACT</button>
        <button className="btn" id="ruby/rails" onClick={filterSelection}> RUBY/RAILS</button>
        <button className="btn" id="javascript" onClick={filterSelection}> JAVASCRIPT</button>
        <button className="btn" id="html/css" onClick={filterSelection}> HTML/CSS</button>
      </div>

        <div className="container">
          <div className="row">
            <div className="filterDiv w3-animate-zoom show ruby/rails col-md-6 col-sm-12 col-lg-4">
              <div className="box">
                <img src={FB} alt="comp"></img>
                  <ul className="social-links">
                    <li className="project-name"><h1>Facebook</h1></li>
                    <br/>
                    <li className='project-language'><h3>Ruby/Rails</h3></li>
                    <br/>
                    <p>A social media clone designed to mimic some of Facebook's core features. Allows users to make posts, and send and accept friend requests.</p>
                    <li><a href="https://github.com/KaushikShivam/facebook_clone" target="_blank" rel="noopener noreferrer"><i className="fa fa-code" aria-hidden="true"></i></a></li>
                    <li><a href="https://sleepy-plateau-46117.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
            </div>
            <div className="filterDiv w3-animate-zoom show html/css col-md-6 col-sm-12 col-lg-4">
              <div className="box">
                <img src={designImage} alt="interior design"></img>
                  <ul className="social-links">
                    <li className="project-name"><h1>Interior Design</h1></li>
                    <br/>
                    <li className='project-language'><h3>HTML/CSS</h3></li>
                    <br/>
                    <p>A website built for an interior design company.</p>
                    <li><a href="https://github.com/fatymahmed/Interior-design" target="_blank" rel="noopener noreferrer"><i className="fa fa-code" aria-hidden="true"></i></a></li>
                    <li><a href="https://fatymahmed.github.io/Interior-design/" target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
            </div>
            <div className="filterDiv w3-animate-zoom show ruby/rails react col-md-6 col-sm-12 col-lg-4">
              <div className="box">
                <img src={showTalk} alt="Talk Schedule"></img>
                  <ul className="social-links">
                    <li className="project-name"><h1>Talks Schedule</h1></li>
                    <br/>
                    <li className='project-language'><h3>React & Ruby/Rails</h3></li>
                    <br/>
                    <p>An app built with React and Rails that allows users to select conferences from a list, and then add those conferences to their schedule.</p>
                    <li><a href="https://github.com/fatymahmed/conference-schedule-frontend/tree/schedule" target="_blank" rel="noopener noreferrer"><i className="fa fa-code" aria-hidden="true"></i></a></li>
                    <li><a href="https://conference-schedule-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
            </div>
            <div className="filterDiv w3-animate-zoom show ruby/rails react col-md-6 col-sm-12 col-lg-4">
              <div className="box">
                <img src={bookstore} alt="Bookstore"></img>
                  <ul className="social-links">
                    <li className="project-name"><h1>Bookstore</h1></li>
                    <br/>
                    <li className='project-language'><h3>React & Redux & Ruby/Rails</h3></li>
                    <br/>
                    <p>A Bookstore CMS built with React and Redux that allows users to add books to a library and filter them according to the category.</p>
                    <li><a href="https://github.com/fatymahmed/bookstore-react/tree/api-service" target="_blank" rel="noopener noreferrer"><i className="fa fa-code" aria-hidden="true"></i></a></li>
                    <li><a href="https://bookstore-react-app.herokuapp.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
            </div>
            <div className="filterDiv w3-animate-zoom show html/css javascript col-md-6 col-sm-12 col-lg-4">
              <div className="box">
                <img src={battleship} alt="comp"></img>
                  <ul className="social-links">
                    <li className="project-name"><h1>Battleship Game</h1></li>
                    <br/>
                    <li className='project-language'><h3>Javascript</h3></li>
                    <br/>
                    <p>The famous battleship game built in JavaScript</p>
                    <li><a href="https://github.com/Urchmaney/battleship" target="_blank" rel="noopener noreferrer"><i className="fa fa-code" aria-hidden="true"></i></a></li>
                    <li><a href="https://raw.githack.com/Urchmaney/battleship/battle-feature/dist/index.html" target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
            </div>
            <div className="filterDiv w3-animate-zoom show javascript html/css col-md-6 col-sm-12 col-lg-4">
              <div className="box">
                <img src={weather} alt="weather"></img>
                  <ul className="social-links">
                    <li className="project-name"><h1>Weather</h1></li>
                    <br/>
                    <li className='project-language'><h3>JavaScript & Html/CSS</h3></li>
                    <br/>
                    <p>An app that allows users to find the weather forecast of any city using a weather API </p>
                    <li><a href="https://github.com/fatymahmed/weather-app" target="_blank" rel="noopener noreferrer"><i className="fa fa-code" aria-hidden="true"></i></a></li>
                    <li><a href="https://fatymahmed.github.io/weather-app/dist/index.html" target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Portfolio;