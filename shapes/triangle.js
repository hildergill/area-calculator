class Triangle extends Shape {
	getName() {
		return 'Triangle';
	}

	getIcon() {
		return generateIcon('triangle');
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
		return (input.width * input.height) / 2;
	}

	generateOutputBox(inputs) {
		const inputElements = [
			'<span class="fraction">',
			`<p>(${inputs.width} &times; ${inputs.height})</p>`,
			'<span></span>',
			'<p>2</p>',
			'</span>',
		];

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
