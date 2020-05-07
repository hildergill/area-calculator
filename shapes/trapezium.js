class Trapezium extends Shape {
	getName() {
		return 'Trapezium';
	}

	getIcon() {
		return generateIcon('wip');
	}

	generateInput() {
		var elements = [
			'<p>Adjacent 1: </p>',
			'<input type="number" step="0.01" id="a_input">',
			'<p>Adjacent 2: </p>',
			'<input type="number" step="0.01" id="b_input">',
			'<p>Height: </p>',
			'<input type="number" step="0.01" id="height_input">',
		];

		return super.generateInput(this.getName(), elements, 3);
	}

	getInputs() {
		return {
			a: Number.parseFloat(document.getElementById('a_input').value),
			b: Number.parseFloat(document.getElementById('b_input').value),
			height: Number.parseFloat(document.getElementById('height_input').value),
		};
	}

	getArea(input) {
		return ((input.a + input.b) / 2) * input.height;
	}

	generateOutputBox(inputs) {
		const inputElements = [
			'<span style="display: grid;grid-template-columns: repeat(2, max-content);gap: 0.25rem">',
			'<span class="fraction">',
			`<p>(${inputs.a} + ${inputs.b})</p>`,
			'<span></span>',
			'<p>2</p>',
			'</span>',
			`<p style="margin-top: auto;margin-bottom: auto;"> &times; ${inputs.height}</p>`,
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
		document.getElementById('a_input').value = null;
		document.getElementById('b_input').value = null;
		document.getElementById('height_input').value = null;
	}
}
