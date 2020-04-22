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
			'<input type="number" id="radius_input">'
		];
		return super.generateInputElements(this.getName(), inputElements, 1);
	}

	// TODO: Add the other 2 functions here later
}
