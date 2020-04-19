var shapeArray = [new Circle(), new Triangle()];

function loadShapes() {
	var buttonSection = document.getElementById('buttons_section');
	shapeArray.forEach((element, index) => {
		buttonSection.innerHTML += '<button onclick="loadInput(' + index + ');">' + element.getName() + '</button>';
	});
}

function loadInput(shapeIndex) {
	var inputBox = document.getElementById('input_box');
	var buttons = document.getElementById('buttons_section').getElementsByTagName('button');

	inputBox.innerHTML = shapeArray[shapeIndex].generateInput();

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove('active');
	}

	buttons[shapeIndex].classList.add('active');
	console.log(shapeIndex);
	console.log(buttons);
}
