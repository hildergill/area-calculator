class Circle extends Shape {
	getName() {
		return 'Circle';
	}

	getArea(inputs) {
		return Math.PI * Math.pow(inputs.radius, 2);
	}

	generateInputElements() {
		return super.generateInputElements(this.getName(), ['<p>Hello, World!</p>']);
	}

	// TODO: Add the other 2 functions here later
}
