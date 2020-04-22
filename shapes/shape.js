class Shape {
	getName() {
		return null;
	}

	getArea(inputs) {
		return null;
	}

	generateInputElements(title, inputElements, rows) {
		var styleString = 'display: grid;'
			+ `grid-template-rows: repeat(${rows}, auto);`
			+ 'grid-template-columns: max-content auto;'
			+ 'gap: 0.5rem;';

		var buttonsContainerStyleString = 'display: flex;'
			+ 'flex-direction: row-reverse;';

		var elements = [`<p id="input_title">${title}</p>`, `<div style="${styleString}">`];
		for (var i = 0; i < inputElements.length; i++) elements.push(inputElements[i]);
		elements.push('</div>');

		elements.push(`<div style="${buttonsContainerStyleString}">`,
			'<button onclick="calculate();">Calculate</button>',
			'<button>Clear</button>',
			'</div>');

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

	getInputs() {
		return null;
	}
}