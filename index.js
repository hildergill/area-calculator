const shapeArray = [new Circle(), new Triangle()];
var shapeIndex = 0;

function loadShapeButtons() {
	var shapeButtonArray = document.getElementById('shape_buttons_box');

	shapeArray.map((value, index) => {
		shapeButtonArray.innerHTML +=
			`<button onclick="loadInput(${index})">` +
			`\n${value.getIcon()}` +
			`\n<p>${value.getName()}</p>` +
			`\n</button>`;
	});
}

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

function calculateArea() {
	var outputBox = document.getElementById('output_box');
	var input = shapeArray[shapeIndex].getInputs();
	outputBox.innerHTML += shapeArray[shapeIndex].generateOutputBox(input);
}

function clearOutput() {
	var outputBox = document.getElementById('output_box');
	outputBox.innerHTML = null;
}

function viewRepo() {
	window.location = 'https://github.com/hildergill/area-calculator';
}

function viewLicense() {
	window.location = './licenses.html';
}