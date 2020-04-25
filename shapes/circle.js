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

	getIcon() {
		var iconElements = [
			'<svg width="24" height="24" version="1.1" viewBox="0 0 6.35 6.35" xmlns="http://www.w3.org/2000/svg">',
			'<g transform="translate(0 -291)">',
			'<circle cx="3.18" cy="294" r="2.66" fill="none" stroke-linecap="round" stroke-width=".529" />',
			'</g>',
			'</svg>',
		];

		var returnValue = '';
		iconElements.forEach((value) => { returnValue += value + '\n'; });
		return returnValue;
	}
}
