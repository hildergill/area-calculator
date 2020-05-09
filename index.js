// Shape array
const shapeArray = [new Circle(), new Triangle(), new Rectangle(), new Trapezium()];

// Shape index - stores the current selected shape
var shapeIndex = 0;

// Function to load the shape buttons array on the "menu" section
function loadShapeButtons() {
	var shapeButtonArray = document.getElementById('shape_buttons_box');

	shapeArray.map((value, index) => {
		shapeButtonArray.innerHTML +=
			`<button onclick="loadInput(${index})">` + `\n${value.getIcon()}` + `\n<p>${value.getName()}</p>` + `\n</button>`;
	});
}

// Function to load input when a shape is selected
function loadInput(index) {
	var shapeButtonArray = document.getElementById('shape_buttons_box').getElementsByTagName('button');
	var inputSection = document.getElementById('input_section');
	shapeIndex = index;

	for (var i = 0; i < shapeButtonArray.length; i++) {
		if (i === index) shapeButtonArray[i].classList.add('active');
		else shapeButtonArray[i].classList.remove('active');
	}

	inputSection.innerHTML = shapeArray[shapeIndex].generateInput();
}

// Function to calculate the area of a shape and then create an output box
function calculateArea() {
	var outputBox = document.getElementById('output_box');
	var input = shapeArray[shapeIndex].getInputs();
	outputBox.innerHTML += shapeArray[shapeIndex].generateOutputBox(input);

	shapeArray[shapeIndex].clearInputs();
}

// Function to clear the output array
function clearOutput() {
	var outputBox = document.getElementById('output_box');
	outputBox.innerHTML = null;
}

// Function to go to the project repository at Github
function viewRepo() {
	window.location = 'https://github.com/hildergill/area-calculator';
}

// Function to go to the "licenses.html" page
function viewLicense() {
	window.location = './licenses.html';
}

// Function to clear all inputs
function clearInputs() {
	shapeArray[shapeIndex].clearInputs();
}
