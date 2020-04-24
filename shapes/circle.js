class Circle extends Shape {
	getName() {
		return 'Circle';
	}

	getArea(inputs) {
		return Math.PI * Math.pow(inputs.radius, 2);
	}

	generateInputElements() {
		var inputElements = [
			'<p>Radius: </p>',
			'<input type="number" id="radius_input" step="0.001">'
		];

		return super.generateInputElements(this.getName(), inputElements, 1);
	}

	getInputs() {
		var returnValue = {
			radius: Number.parseFloat(document.getElementById('radius_input').value)
		}

		return returnValue;
	}

	clearInputs() {
		document.getElementById('radius_input').value = null;
	}

	generateResultElements(inputs, results) {
		var elementsStyleString = 'display: flex;flex-direction: row;';

		var elements = [`<div style="${elementsStyleString}">`,
		`<p>&pi; &#215; ${inputs.radius}<sup>2</sup></p>`,
			`</div>`];

		return super.generateResultElements(this.getName(), elements, results);
	}
}
