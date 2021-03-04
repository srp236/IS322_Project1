var mockDatabase = [
		{ category: 'eraser', name: 'Air Eraser', price: '$1.99', image: '../images/eraser.jpg'},
		{ category: 'pencil', name: 'Smooth Pencil', price: '$6.99', image: '../images/pencil1.jpg'},
		{ category: 'pencil', name: 'Pastel Pencil', price: '$4.29', image: '../images/pencil2.jpg'},
		{ category: 'pen', name: 'Pattern Pen', price: '$3.49', image: '../images/pen1.jpg'},
		{ category: 'pen', name: 'Calligraphy Pen', price: '$12.99', image: '../images/pen2.jpg'},
		{ category: 'pencil', name: 'Slim Pencil', price: '$8.79', image: '../images/pencil3.jpg'},
		{ category: 'case', name: 'Collapsable case', price: '$2.49', image: '../images/case1.jpg'},
		{ category: 'pen', name: 'Bulky Pen', price: '$7.99', image: '../images/pen3.jpg'},
		{ category: 'note', name: 'Small Note', price: '$2.99', image: '../images/note1.jpg'},
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

function orderBy(sortValue) {
	var sortedResults = (sortValue === 'name') ? 
		mockDatabase.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
			var nameA = nameA.localeCompare(a.name.toUpperCase()); 
			var nameB = nameB.localeCompare(b.name.toUpperCase()); 
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
		}):

		mockDatabase.sort(function (a, b) { 
			return a[sortValue] - b[sortValue];
		});
	renderList(sortedResults);

}

document.querySelector('#orderBy').addEventListener('change', function(event){
	orderBy(event.target.value);
});
