var foo = 'foo'; // Variables declared outside of any function are considered global variables.
				 // These variables can be found on the window object.
(function () {
	// Any kind of function, will create a new variable scope. Variables declared in this 
	// function will only be accesible inside this function, unless passed by reference through
	// a function call. 

	// Lower level scope will always overwrite a higher level scope.  
	var foo = 'bar';
	console.log(foo); // 'bar'
	// Global Variables can still be accessed through window object 
	console.log(window.foo); // 'foo'

	// An array of Objects, similar to database records we will eventually be dealing with.
	var mockDatabase = [
		{ category: 'eraser', name: 'Article 1', price: '$1.99' },
		{ category: 'pencil', name: 'Article 2', price: '$6.99' },
		{ category: 'pencil', name: 'Article 3', price: '$4.29' },
		{ category: 'pen', name: 'Article 4', price: '$3.49' },
		{ category: 'pen', name: 'Article 5', price: '$12.99' },
		{ category: 'pencil', name: 'Article 6', price: '$8.79' },
		{ category: 'eraser', name: 'Article 7', price: '$2.49' },
		{ category: 'pen', name: 'Article 8', price: '$7.99' },
		{ category: 'eraser', name: 'Article 9', price: '$2.99' },
	];

	function renderList (results) {
		var tableBody = document.querySelector('#results-table tbody');

		// clear out inner HTML to get rid of any older results
		tableBody.innerHTML = '';
		// Map each database record to a string containing the HTML for it's row
		var tableRows = results.map(function (result, index) {
			return '<tr><td>' + index + '</td><td>' + result.name + '</td><td>' + 
					result.category + '</td><td>' + result.price + '</td></tr>';
		});
		// Set the contents of the table body to the new set of rendered HTML rows
		tableRows.forEach(function (row) {
			tableBody.innerHTML += row; // += adds to HTML instead of overwriting it entirely.
		});

		// Lower level scope once again overwrites what's above it.
		var foo = 'renderList';
		console.log(foo); // 'renderList'
	}

	renderList(mockDatabase);

	// Function to Order results list 
	function orderBy(sortValue) {
		// Sort method varies based on what type of value we're sorting 
		var sortedResults = (sortValue === 'name') ? 
			mockDatabase.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
				var nameA = a.name.toUpperCase(); // ignore upper and lowercase
				var nameB = b.name.toUpperCase(); // ignore upper and lowercase
				// Sorts alphabetically.  -1 puts it before. 1 puts it after
				if (nameA < nameB) {
				    return -1;
				}
				if (nameA > nameB) {
				    return 1;
				}
			}) : 
			mockDatabase.sort(function (a, b) { // Numbers a booleans are much simpler. 
												// Just need postive or negative number 
				// Object properties can be accessed through a string representing their name
				return a[sortValue] - b[sortValue];
			});
		renderList(sortedResults);
	}
	// Change events trigger after the value of a form input changes
	document.querySelector('#orderBy').addEventListener('change', function(event){
		// Event is the JavaScript event that transpired, in our change a CHANGE event.
		// Target is the element it was performed on, useful for when the event targets 
		// multiple elements.
		// Value has the name implies is the current value of the input element, if there is one
		orderBy(event.target.value);
	});

	// Function to filter out unprice results
	function toggleprice(showprice) {
		// If showprice is TRUE, only display price results
		// Filter will only inclue objects that return TRUE from it's query
		var filteredResults = mockDatabase.filter(function (result) {
			// If showprice is TRUE, always show.
			// Otherweise only show if price is TRUE
			return showprice || result.price;
		});
		renderList(filteredResults);
	}
	// Change events trigger after the value of a form input changes
	document.querySelector('#price').addEventListener('change', function(event){
		// in this case value is a string that we need to convert to a boolean 
		var value = event.target.value === 'true';
		toggleprice(value);
	});



})();