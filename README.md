# portfolio

# Dynamic Element Animation with JavaScript

This JavaScript code snippet demonstrates how to create dynamic animations and effects on HTML elements based on user scroll events and random positioning.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [License](#license)

## Introduction

This code snippet is designed to create an engaging and interactive web page with various elements that respond to user scrolling. It leverages JavaScript to manipulate the positioning, opacity, and other styles of HTML elements based on the user's scroll actions. Additionally, it generates random positions for specific elements, adding a dynamic and visually appealing aspect to the webpage.

## Features

- Smooth scrolling effects.
- Dynamic element positioning.
- Background blur and opacity adjustments.
- Randomized element placement.

## How It Works

1. **Element Selection**: The code starts by selecting HTML elements by their IDs using `document.getElementById()` and stores references to these elements in variables. These elements include various colored shapes, containers, headings, and more.

2. **Event Listener**: It adds a `wheel` event listener to the window to track user scroll actions. When the user scrolls, it calculates the amount of scroll and updates various elements' positions and styles accordingly.

3. **Scroll Animation**: Elements like `coralRed`, `turquoise`, etc., are transformed based on the scroll amount, creating animation effects. The `svgContainer` also gets a backdrop blur effect.

4. **Background Transparency**: The `flyesContainer` background has its transparency adjusted based on the scroll amount, creating a fading effect.

5. **Heading and Subheading**: The position and opacity of the `heading` and `subHeading` elements are adjusted based on the scroll position, creating a parallax-like effect.

6. **Random Element Placement**: The code defines a function `randemNumber()` to generate random numbers between 0 and 100. It uses this function to set the top and left style properties of various elements randomly, creating an element placement animation.

7. **Intervals**: The `setFlyeLocation` function is repeatedly called at specified intervals using `setInterval()`, moving different elements to random positions.

## Usage

To use this code in your project, follow these steps:

1. Include the JavaScript code in your HTML file or import it as needed.

2. Ensure that the HTML elements you want to animate have the correct IDs, matching the ones used in the code.

3. Customize the animation parameters, such as scroll ranges and interval durations, to fit your specific requirements.

4. Make sure to adapt the code to your project's structure and styling as needed.

## License

This code is provided under the [MIT License](LICENSE). You are free to use, modify, and distribute it for personal or commercial projects.
