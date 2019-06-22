This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to avoid wasted renders when drawing 5000 items

This example draws 5000 squares, each of them is connected to the store and selects a small part of the `items` object. On click, a square changes its color and only the clicked square is rendered.
