import React from 'react';
import image from '../temp.jpeg';

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
            <div className="filterDiv show col-md-4 col-sm-6 col-12">
              <div className="box">
                <img src={image} alt="comp"></img>
                  <ul className="social-links">
                    <li className="project-name"><h1>Facebook</h1></li>
                    <br/>
                    <li className='project-language'><h3>ruby/rails</h3></li>
                    <br/>
                    <li><a href="#"><i className="fa fa-code" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
            </div>
            <div className="filterDiv show ruby/rails react col-md-4 col-sm-6 col-12">
              <div className="box">
                <img src={image} alt="comp"></img>
                  <ul className="social-links">
                    <li className="project-name"><h1>Bookstore</h1></li>
                    <br/>
                    <li className='project-language'><h3>React & Ruby/Rails</h3></li>
                    <br/>
                    <li><a href="#"><i className="fa fa-code" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
            </div>
            <div className="filterDiv show react col-md-4 col-sm-6 col-12">
              <div className="box">
                <img src={image} alt="comp"></img>
                  <ul className="social-links">
                    <li className="project-name"><h1>Calculator</h1></li>
                    <br/>
                    <li className='project-language'><h3>ReactJs</h3></li>
                    <br/>
                    <li><a href="#"><i className="fa fa-code" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
            </div>
            <div className="filterDiv show ruby/rails react col-md-4 col-sm-6 col-12">
              <div className="box">
                <img src={image} alt="comp"></img>
                  <ul className="social-links">
                    <li className="project-name"><h1>Scheduled Talks</h1></li>
                    <br/>
                    <li className='project-language'><h3>React & Ruby/Rails</h3></li>
                    <br/>
                    <li><a href="#"><i className="fa fa-code" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Portfolio;