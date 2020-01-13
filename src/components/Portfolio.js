/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import designImage from '../interiorDesign.png';
import showTalk from '../showTalk.png';
import battleship from '../battleship.png';
import FB from '../FB.png';

function Portfolio(){
  function filterSelection(e) {
    var c=e.target.id;
    var x, i;
    x = document.getElementsByClassName("filterDiv");
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
      <h1>Portfolio</h1>
      <div id="myBtnContainer">
        <button className="btn active" id="all" onClick={filterSelection}> ALL</button>
        <button className="btn" id="react" onClick={filterSelection}> REACT</button>
        <button className="btn" id="ruby/rails" onClick={filterSelection}> RUBY/RAILS</button>
        <button className="btn" id="javascript" onClick={filterSelection}> JAVASCRIPT</button>
        <button className="btn" id="html/css" onClick={filterSelection}> HTML/CSS</button>
      </div>

        <div className="container">
          <div className="row">
            <div className="filterDiv show ruby/rails col-md-4 col-sm-6 col-12">
              <div className="box">
                <img src={FB} alt="comp"></img>
                  <ul className="social-links">
                    <li className="project-name"><h1>Facebook</h1></li>
                    <br/>
                    <li className='project-language'><h3>ruby/rails</h3></li>
                    <br/>
                    <li><a href="https://github.com/KaushikShivam/facebook_clone"><i className="fa fa-code" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
            </div>
            <div className="filterDiv show html/css javascript col-md-4 col-sm-6 col-12">
              <div className="box">
                <img src={battleship} alt="comp"></img>
                  <ul className="social-links">
                    <li className="project-name"><h1>Battleship Game</h1></li>
                    <br/>
                    <li className='project-language'><h3>Javascript</h3></li>
                    <br/>
                    <li><a href="https://github.com/Urchmaney/battleship"><i className="fa fa-code" aria-hidden="true"></i></a></li>
                    <li><a href="https://raw.githack.com/Urchmaney/battleship/battle-feature/dist/index.html"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
            </div>
            <div className="filterDiv show html/css col-md-4 col-sm-6 col-12">
              <div className="box">
                <img src={designImage} alt="interior design"></img>
                  <ul className="social-links">
                    <li className="project-name"><h1>Interior Design</h1></li>
                    <br/>
                    <li className='project-language'><h3>HTML/CSS</h3></li>
                    <br/>
                    <li><a href="https://github.com/fatymahmed/Interior-design"><i className="fa fa-code" aria-hidden="true"></i></a></li>
                    <li><a href="https://fatymahmed.github.io/Interior-design/"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
            </div>
            <div className="filterDiv show ruby/rails react col-md-4 col-sm-6 col-12">
              <div className="box">
                <img src={showTalk} alt="Talk Schedule"></img>
                  <ul className="social-links">
                    <li className="project-name"><h1>Talks Schedule</h1></li>
                    <br/>
                    <li className='project-language'><h3>React & Ruby/Rails</h3></li>
                    <br/>
                    <li><a href="https://github.com/fatymahmed/conference-schedule-frontend/tree/schedule"><i className="fa fa-code" aria-hidden="true"></i></a></li>
                    <li><a href="https://conference-schedule-app.herokuapp.com/"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Portfolio;