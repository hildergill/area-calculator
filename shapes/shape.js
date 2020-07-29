class Shape {
	getName() {
		return null;
	}

	getIcon() {
		return null;
	}

	generateInput(title, elementArray, rows = 1) {
		var inputBoxElements = [document.createElement('p'), document.createElement('div'), document.createElement('div')];

		inputBoxElements[0].classList.add('input_title');
		inputBoxElements[0].innerHTML = title;

		inputBoxElements[1].style.display = 'grid';
		inputBoxElements[1].style.gridTemplateColumns = 'max-content auto';
		inputBoxElements[1].style.gridTemplateRows = `repeat(${rows}, auto)`;
		inputBoxElements[1].style.gap = '0.5rem';
		for (var i = 0; i < elementArray.length; i++) inputBoxElements[1].appendChild(elementArray[i]);

		var buttonContainerElements = [document.createElement('button'), document.createElement('button')];
		buttonContainerElements[0].innerHTML = 'Clear';
		buttonContainerElements[0].addEventListener('click', clearInputs);

		buttonContainerElements[1].innerHTML = 'Calculate';
		buttonContainerElements[1].addEventListener('click', calculateArea);

		for (var i = 0; i < buttonContainerElements.length; i++) inputBoxElements[2].appendChild(buttonContainerElements[i]);

		return inputBoxElements;
	}

	getInputs() {
		return null;
	}

	getArea(input) {
		return null;
	}

	generateOutputBox(icon, title, inputElements, output) {
		var outputBox = document.createElement('div'),
			titleBox = document.createElement('span'),
			outputParagraph = document.createElement('p'),
			titleParagraph = document.createElement('p');

		outputBox.classList.add('common_box');

		titleParagraph.innerHTML = title;

		titleBox.id = 'title_box';
		titleBox.innerHTML = icon;
		titleBox.appendChild(titleParagraph);
		outputBox.appendChile(titleBox);

		for (var i = 0; i < inputElements.length; i++) outputBox.appendChild(inputElements[i]);

		outputParagraph.innerHTML = output;

		outputBox.appendChile(outputParagraph);
		console.log(outputBox);
	}

	clearInputs() {
		// Overwrite this method
	}
}
