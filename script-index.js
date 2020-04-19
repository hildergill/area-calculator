var calculatorArray = [new Circle(), new Triangle()];

function loadShapes() {
	var buttonSection = document.getElementById('buttons_section');
	calculatorArray.forEach((element) => {
		buttonSection.innerHTML += '<button>' + element.getName() + '</button>';
	});
}
