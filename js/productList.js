var mockDatabase = [
		{ category: 'eraser', name: 'Article 1', price: '$1.99', image: '../images/jk.jpg'},
		{ category: 'pencil', name: 'Article 2', price: '$6.99', image: '../images/bts_fila.jpg'},
		{ category: 'pencil', name: 'Article 3', price: '$4.29', image: '../images/bts_be_1.jpg'},
		{ category: 'pen', name: 'Article 4', price: '$3.49', image: '../images/jk.jpg'},
		{ category: 'pen', name: 'Article 5', price: '$12.99', image: '../images/jk.jpg'},
		{ category: 'pencil', name: 'Article 6', price: '$8.79', image: '../images/jk.jpg'},
		{ category: 'eraser', name: 'Article 7', price: '$2.49', image: '../images/jk.jpg'},
		{ category: 'pen', name: 'Article 8', price: '$7.99', image: '../images/jk.jpg'},
		{ category: 'eraser', name: 'Article 9', price: '$2.99', image: '../images/jk.jpg'},
];

function renderList (results) {
	var b;
	var myList = document.querySelectorAll('.mycard');

	for(b = 0; b < myList.length; b++)
	{	
		myList[b].innerHTML = '';
	}
	var t = 0;
	var cardOne = results.map(function (result) {
		var tempImg = document.createElement("IMG");
		tempImg.src = result.image;
		myList[t].appendChild(tempImg);
		t++;
		return '<br>' + result.name +' '+result.price;
	});

	var s = 0;	
	cardOne.forEach(function (prod) {
		myList[s].innerHTML += prod; 
		s++;
	});
}
renderList(mockDatabase);

/*
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

})();*/