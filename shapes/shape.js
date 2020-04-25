class Shape {
	getName() {
		return null;
	}

	getArea(inputs) {
		return null;
	}

	// TODO: Clean this method up later
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
			'<button class="common_button" onclick="calculate();">Calculate</button>',
			'<button class="common_button" onclick="clearInputs();">Clear</button>',
			'</div>');

		var elementsString = '';
		elements.forEach((value) => {
			elementsString += value + '\n';
		});

		return elementsString;
	}

	generateResultElements(title, resultCalculations, result) {
		var calculationsElements = '';
		resultCalculations.map((value) => { calculationsElements += value + '\n'; });

		var elements = ['<div class="result_box">',
			`<p id="result_title">${title}</p>`,
			calculationsElements,
			`<p id="result_text">= ${result}</p>`,
			'</div>'];

		var returnValue = '';
		elements.map((value) => { returnValue += value + '\n'; });
		return returnValue;
	}

	getInputs() {
		return null;
	}

	clearInputs() { /* THIS METHOD IS FOR EXTENSIONS ONLY */ }
}