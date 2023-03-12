import React from 'react'
import $ from 'jquery'

const index = () => {
    $(function () {
    $(".bars li .bar").each(function (key, bar) {
        var percentage = $(this).data("percentage");
        $(this).animate(
        {
            height:  percentage + "%",
        },
        1000
        );
    });
    });
return (
  <div>
    <header>
      <nav>
        <div className="topnav">
          <label className="logo">
            <h1 style={{ color: "blue", textShadow: "3px 3px 3px black" }}>
              Graph Bar
            </h1>
          </label>
        </div>
        <ul>
          <li>
            <a className="active" href="#jan">
              HTML
            </a>
          </li>
          <li>
            <a href="#feb">CSS </a>
          </li>
          <li>
            <a href="#mar">JS</a>
          </li>
          <li>
            <a href="#apr">BOOTSTRAP</a>
          </li>
        </ul>
      </nav>

      <div className="chart">
        <ul className="bars">
          <a href="#jan">
            <li>
              <div
                className="bar"
                style={{
                  backgroundColor: "red",
                  boxShadow: "2px 2px 2px black",
                }}
                data-percentage="30"
              ></div>
            </li>
          </a>
          <a href="#feb">
            <li>
              <div
                className="bar"
                style={{
                  backgroundColor: "blue",
                  boxShadow: "2px 2px 2px black",
                }}
                data-percentage="50"
              ></div>
            </li>
          </a>

          <a href="#mar">
            <li>
              <div
                className="bar"
                style={{
                  backgroundColor: "green",
                  boxShadow: "2px 2px 2px black",
                }}
                data-percentage="70"
              ></div>
            </li>
          </a>

          <a href="#apr">
            <li>
              <div
                className="bar"
                style={{
                  backgroundColor: "orangered",
                  boxShadow: "2px 2px 2px black",
                }}
                data-percentage="80"
              ></div>
            </li>
          </a>
        </ul>
      </div>
    </header>
    <div className="mainBox">
      <div className=" box box1 show" target="_blank">
        HTML Understanding the basics of HTML HTML syntax and
        structure Creating a basic HTML document Text Formatting Adding
        headings, paragraphs and text formatting elements Creating links to
        other web pages Adding images to a webpage Lists Creating ordered and
        unordered lists Nested lists and sublists Definition lists Tables
        Creating tables Adding headers and captions Merging cells and rows Forms
        Creating HTML forms
      </div>
      <div className=" box box2" target="_blank">
        CSS Understanding the basics of CSS The role of CSS in
        web design CSS syntax and structure Creating and linking CSS files to
        HTML documents Selectors and Properties CSS selectors and how they work
        Applying CSS properties to HTML elements Styling text, backgrounds,
        borders, and more Layout and Positioning Box model and how it affects
        layout Display properties and their effects Positioning elements with
        CSS Floats and clears Responsive Design Introduction to responsive
        design Media queries and their use Creating responsive layouts with CSS
        frameworks
      </div>
      <div className=" box box3" target="_blank">
        JavaScript Introduction to JavaScript and its uses Basic
        syntax and data types Variables, constants, and scope Basic operations
        (arithmetic, comparison, logical) Week 2: Control Flow and Loops
        Conditional statements (if/else) Switch statements Loops (for, while,
        do-while) Week 3: Functions and Objects Introduction to functions
        Function parameters and return values Anonymous functions Introduction
        to objects and properties Week 4: Arrays and Iteration Introduction to
        arrays Accessing and modifying array elements Array methods (push, pop,
        shift, unshift) Iteration (for-each, map, filter)
      </div>
      <div className=" box box4" target="_blank">
        Bootstrap : What is Bootstrap 5? Why use Bootstrap 5?
        Bootstrap  vs Bootstrap 4 Getting Started with Bootstrap 5: Installing
        Bootstrap  Understanding the grid system Creating a basic layout
        Bootstrap  Components: Navigation bars Forms Buttons Cards Modals
        Alerts Tables Customizing Bootstrap 5: Using Sass with Bootstrap
        Overriding Bootstrap styles Creating custom themes Advanced Bootstrap 5:
        Using JavaScript plugins Creating custom JavaScript plugins
        Accessibility considerations Optimization and performance Bootstrap 5
        Projects: Building a landing page Creating a blog or news site
        Developing an e-commerce site Building a portfolio site Best Practices
        and Tips: HTML and CSS best practices Responsive design techniques
        Cross-browser compatibility Accessibility 
      </div>
    </div>
    <footer>
      <p>@ All Rights Reserved</p>
    </footer>
  </div>
);
}

export default index