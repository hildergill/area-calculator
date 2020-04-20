class Shape {
	getName() {
		return 'Shape';
	}

	getArea() {
		return null;
	}

	generateInput(title, elements) {
		var retArray = ['<div id="input_section">', '<p id="input_title">', title, '</p>'];
		elements.map((value) => {
			retArray.push(value + '\n');
		});

		retArray.push(
			'<div>',
			'<button onclick="clearInputs();">Clear</button>',
			'<button onclick="calculate();">Calculate</button>',
			'</div>'
		);

		retArray.push('</div>');

		var returnValue = '';
		retArray.map((value) => {
			returnValue += value + '\n';
		});

		return returnValue;
	}

	clearInputs() {
		// OVERWRITE THIS METHOD
	}

	generateResultBox(name, calculations, results) {
		var resultBoxElement = ['<div class="result_box">', '<p id="result_title">', name, '</p>'];
		calculations.map((value) => {
			resultBoxElement.push(value);
		});
		resultBoxElement.push('<p>' + results + ' units<sup>2</sup></p>', '</div>');

		var returnValue = '';
		resultBoxElement.map((value) => {
			returnValue += value + '\n';
		});

		return returnValue;
	}

	getInputs() {
		return null;
	}
}
