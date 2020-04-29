class Circle extends Shape {
	getName() {
		return 'Circle';
	}

	getIcon() {
		return generateIcon('circle');
	}

	generateInput() {
		const elements = ['<p>Radius: </p>', '<input type="number" step="0.001" id="radius_input">'];
		return super.generateInput(this.getName(), elements, 1);
	}

	getInputs() {
		return {
			radius: Number.parseFloat(document.getElementById('radius_input').value),
		};
	}

	getArea(input) {
		return Math.PI * Math.pow(input.radius, 2);
	}

	generateOutputBox(inputs) {
		const inputElements = [`<p>&pi; &times; ${inputs.radius}<sup>2</sup></p>`];
		return super.generateOutputBox(this.getIcon(), this.getName(), inputElements, this.getArea(inputs));
	}
}
