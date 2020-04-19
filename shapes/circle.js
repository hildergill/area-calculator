class Circle extends Shape {
	getName() {
		return 'Circle';
	}

	getArea(radius) {
		return Math.PI * Math.pow(radius, 2);
	}

	generateInput() {
		return super.generateInput(this.getName(), ['<input type="number" step="0.01" id="radius_input">']);
	}
}
