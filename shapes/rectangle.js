class Rectangle extends Shape {
	getName() {
		return 'Rectangle';
	}

	getIcon() {
		return generateIcon('wip');
	}

	generateInput() {
		const elements = [
			'<p>Width: </p>',
			'<input type="number" step="0.001" id="width_input">',
			'<p>Height: </p>',
			'<input type="number" step="0.001" id="height_input">',
		];

		return super.generateInput(this.getName(), elements, 2);
	}

	getInputs() {
		return {
			width: Number.parseFloat(document.getElementById('width_input').value),
			height: Number.parseFloat(document.getElementById('height_input').value),
		};
	}

	getArea(input) {
		return input.width * input.height;
	}

	generateOutputBox(inputs) {
		const inputElements = [`<p>(${inputs.width} &times; ${inputs.height})</p>`];

		return super.generateOutputBox(
			this.getIcon(),
			this.getName(),
			inputElements,
			this.getArea(inputs)
		);
	}

	clearInputs() {
		document.getElementById('width_input').value = null;
		document.getElementById('height_input').value = null;
	}
}