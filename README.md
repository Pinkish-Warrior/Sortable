# Implement the Sortable web page 🕸️

## Description

To implement the Sortable web page, you can follow these steps and pseudocode for each feature:

1. Fetching Data:

   - Fetch the data from the provided API.
   - Parse the data and store it in a data structure.
   - Create a function to get the data from the data structure.

```javascript
// Pseudocode for fetching data
const loadData = (heroes) => {
  // Handle the fetched data
  console.log(heroes);
};

// Request the file with fetch
fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
  .then((response) => response.json()) // parse the response from JSON
  .then(loadData); // call the loadData function with the JSON value
```

2. Displaying Data:

   - Create a function to display the data in the DOM.
   - Create a function to display the data in a modal.
   - Create a function to display the data in a table.

```javascript
// Pseudocode for displaying data
const displayData = (heroes) => {
  // Extract necessary data and display in a table
  const table = document.createElement("table");
  // Create table rows and cells with hero information
  // Append the table to the document
};

// Initially fetch and display data
fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
  .then((response) => response.json())
  .then(displayData);
```

3. Search Feature:

   - Create a function to filter the data based on the search query.
   - Create a function to display the filtered data in the DOM.

```javascript
// Pseudocode for search feature
const search = (heroes) => {
  // Filter the data based on the search query
  // Display the filtered data in the DOM
};
// Event listener for input field
document.querySelector("#search").addEventListener("input", (event) => {
  // Call the search function with the input value
});
```

4. Sort Feature:


    - Create a function to sort the data based on the sort query.
    - Create a function to display the sorted data in the DOM.

```javascript
// Pseudocode for sort feature
const sort = (heroes) => {
  // Sort the data based on the sort query
  // Display the sorted data in the DOM
};
// Event listener for select field
document.querySelector("#sort").addEventListener("change", (event) => {
  // Call the sort function with the select value
});
```

5. Modal Feature:


    - Create a function to display the modal with the hero information.
    - Create a function to close the modal.

```javascript
// Pseudocode for modal feature
const displayModal = (hero) => {
  // Display the modal with the hero information
};
const closeModal = () => {
  // Close the modal
};
// Event listener for modal close button
document.querySelector("#close").addEventListener("click", closeModal);
```

6. Pagination Feature:


    - Create a function to paginate the data based on the page query.
    - Create a function to display the paginated data in the DOM.

```javascript
// Pseudocode for pagination feature
const paginate = (heroes) => {
  // Paginate the data based on the page query
  // Display the paginated data in the DOM
};
// Event listener for pagination buttons
document.querySelector("#pagination").addEventListener("click", (event) => {
  // Call the paginate function with the button value
});
```

7. Bonus Feature:


    - Create a function to display the data in a grid.
    - Create a function to display the data in a list.

```javascript
// Pseudocode for bonus feature
const displayGrid = (heroes) => {
  // Display the data in a grid
};
const displayList = (heroes) => {
  // Display the data in a list
};
// Event listener for grid button
document.querySelector("#grid").addEventListener("click", (event) => {
  // Call the displayGrid function
});
// Event listener for list button
document.querySelector("#list").addEventListener("click", (event) => {
  // Call the displayList function
});
```

## Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/)

## Instructions

1. Complete all of the tasks listed above using HTML, CSS and JavaScript.

2. Use the provided [index.html](index.html) file to display the data in the DOM.

3. Use the provided [style.css](style.css) file to style the web page.

4. Use the provided [script.js](script.js) file to implement the JavaScript code.

5. Use the provided [data.json](data.json) file to fetch the data.
