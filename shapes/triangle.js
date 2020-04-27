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
}
