class Shape {
	getName() {
		return null;
	}

	getIcon() {
		return null;
	}

	generateInput(title, elementArray, rows = 1) {
		/*
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

		console.log(returnValue);
		return returnValue;
		*/

		var inputBoxElements = [document.createElement('p'), document.createElement('div')];
		return inputBoxElements;
	}

	getInputs() {
		return null;
	}

	getArea(input) {
		return null;
	}

	generateOutputBox(icon, title, inputElements, output) {
		var returnValue = '<div class="common_box">' + `<span id="title_box">\n${icon}` + `\n<p>${title}</p>\n</span>`;

		inputElements.map((value) => {
			returnValue += value;
		});

		returnValue += `<p>${output}</p>\n</div>`;
		return returnValue;
	}

	clearInputs() {
		// Overwrite this method
	}
}
