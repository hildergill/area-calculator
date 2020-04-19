class Triangle extends Shape {
	getName() {
		return 'Triangle';
	}

	getArea(width, height) {
		return (1 / 2) * width * height;
	}

	generateInput() {
		return super.generateInput(this.getName(), [
			'<p>Width: </p>',
			'<input type="number" step="0.01" id="width_input">',
			'<p>Height: </p>',
			'<input type="number" step="0.01" id="height_input">',
		]);
	}
}
