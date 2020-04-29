class Shape {
	getName() {
		return null;
	}

	getIcon() {
		return null;
	}

	generateInput(title, elementArray, rows = 1) {
		var returnValue = `<p id="input_title">${title}</p>\n\n`;
		returnValue +=
			'<div style="display: grid;' +
			`grid-template-columns: max-content auto;` +
			`grid-template-rows: repeat(${rows}, auto);\n` +
			'gap: 0.5rem" />';

		elementArray.map((value) => {
			returnValue += value + '\n';
		});

		returnValue += '</div>';
		returnValue +=
			'<div id="button_container">\n' +
			'<button onclick="clearInputs();">Clear</button>\n' +
			'<button onclick="calculateArea();">Calculate</button>\n' +
			'</div>';
		return returnValue;
	}

	getInputs() {
		return null;
	}

	getArea(input) {
		return null;
	}
}
