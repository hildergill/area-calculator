var shapeArray = [new Circle(), new Triangle()];
var shapeIndex = 0;

function loadShapeArraySelector() {
	var shapeButtonArray = document.getElementById('shape_button_array');
	shapeArray.forEach((value, index) => {
		shapeButtonArray.innerHTML += `<button onclick="loadShapeInputs(${index});">${value.getName()}</button>`;
	});
}

function loadShapeInputs(index) {
	this.shapeIndex = index;
	var inputSection = document.getElementById('input_box');
	var buttons = document.getElementById('shape_button_array').getElementsByTagName('button');

	inputSection.innerHTML = shapeArray[index].generateInputElements();

	for (var i = 0; i < buttons.length; i++) {
		if (i === index) buttons[i].classList.add('active');
		else buttons[i].classList.remove('active');
	}
}

function calculate() {
	var resultsArray = document.getElementById('result_box_container');

	var inputObject = shapeArray[shapeIndex].getInputs();
	var output = shapeArray[shapeIndex].getArea(inputObject);

	resultsArray.innerHTML = shapeArray[shapeIndex].generateResultElements(inputObject, output);
	clearInputs()
}

function clearInputs() {
	shapeArray[shapeIndex].clearInputs();
}

function clearResults() {
	document.getElementById('result_box_container').innerHTML = null;
}