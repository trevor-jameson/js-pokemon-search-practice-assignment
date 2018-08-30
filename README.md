# JS Pokemon Search Assignment

## Objectives

- DOM Manipulation
- Events and Event Handlers
- Callbacks

Hello, your assignment today is to re-create the functionality of our [Pokemon search engine](https://pokemon-search.netlify.com/).

p.s. Don't forget to include the ability to toggle the card image and reset the card image upon submission of a new search.

## Instructions

We're building out a search feature in our application (no backend persistence). A user should be able to search for a Pokemon and flip that Pokemon card to see the back side.


1. **Create your solution in `index.js`**
2. First, try to render all 150 Pokemon on the page
3. Consider implementing a 'render' function that, given a Pokemon object, returns a string representing a `div` HTML element containing the Pokemon's name and image. Play around with https://pokemon-search.netlify.com/ and inspect the DOM elements on that page to see what a div should look like.
4. Implement a filter functionality for your Pokemon list.
5. Hint: Use the 'keyup' event listener type when listening to the input DOM element
6. Implement a flip functionality on each Pokemon.
