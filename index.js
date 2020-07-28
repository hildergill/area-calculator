// Shape array
const shapeArray = [new Circle(), new Triangle(), new Rectangle(), new Trapezium()];

// Shape index - stores the current selected shape
var shapeIndex = 0;

// Function to load the shape buttons array on the "menu" section
function loadShapeButtons() {
	var shapeButtonArray = document.getElementById('shape_buttons_box');

	shapeArray.map((value, index) => {
		const shapeButton = document.createElement('button'),
			shapeButtonText = document.createElement('p');

		shapeButtonText.innerHTML = value.getName();

		shapeButton.addEventListener('click', () => {
			loadInput(index);
		});
		shapeButton.innerHTML += value.getIcon();
		shapeButton.appendChild(shapeButtonText);

		shapeButtonArray.appendChild(shapeButton);
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

/*
	var titleBoxElements = ['<p>Area Calculator</p>', '<p>By <a href="https://github.com/hildergill">hildergill</a></p>'];

	var shapeButtonsElements = ['<!-- LEAVE THIS SECTION EMPTY -->'];

	var settingsBoxElements = [
		generateIconButton(generateIcon('github'), 'View repo on Github', 'view_repo_button', 'viewRepo();'),

		generateIconButton(generateIcon('open-source-licenses'), 'Open source licenses', 'licenses_button', 'viewLicense();'),

		'<p>&copy; 2018-2020 Hilder Gill</p>',
	];

	var menuSectionElement = document.getElementById('menu_section');

	menuSectionElement.innerHTML += generateCommonBox(titleBoxElements, 'title_box');
	menuSectionElement.innerHTML += generateCommonBox(shapeButtonsElements, 'shape_buttons_box');
	menuSectionElement.innerHTML += generateCommonBox(settingsBoxElements, 'settings_box');
*/

function generateMenuTitle() {
	var menuSectionElement = document.getElementById('menu_section'),
		authorTitleLink = document.createElement('a'),
		titleBoxElements = [document.createElement('p'), document.createElement('p')];

	authorTitleLink.href = 'https://github.com/hildergill';
	authorTitleLink.innerHTML = 'hildergill';

	titleBoxElements[0].innerHTML = 'Area Calculator';
	titleBoxElements[1].innerHTML = 'By ';
	titleBoxElements[1].appendChild(authorTitleLink);

	menuSectionElement.appendChild(generateCommonBox(titleBoxElements, 'title_box'));
}
