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
	console.log(shapeArray[shapeIndex].getInputs());
}

function clearInputs() {
	console.log('!');
	shapeArray[shapeIndex].clearInputs();
}