class Shape {
	getName() {
		return null;
	}

	getArea(inputs) {
		return null;
	}

	generateInputElements(title, inputElements) {
		var styleString =
			'display: grid;' +
			`grid-template-rows: repeat(${inputElements.length}, auto);` +
			'grid-template-columns: max-content auto;';

		var elements = [`<div style="${styleString}">`, `<p id="input_title">${title}</p>`];
		for (var i = 0; i < inputElements.length; i++) elements.push(inputElements[i]);
		elements.push('</div>');

		var elementsString = '';
		elements.forEach((value) => {
			elementsString += value + '\n';
		});

		return elementsString;
	}

	generateResultElements() {
		// TODO: Add something here
		return null;
	}
}
