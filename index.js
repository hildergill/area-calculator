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

	shapeIndex = index;

	for (var i = 0; i < shapeButtonArray.length; i++) {
		if (i === index) shapeButtonArray[i].classList.add('active');
		else shapeButtonArray[i].classList.remove('active');
	}
}
