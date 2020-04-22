class Triangle extends Shape {
    getName() {
        return 'Triangle';
    }

    getArea(inputs) {
        return (inputs.height, inputs.width) / 2;
    }

    generateInputElements() {
        var inputElements = [
            '<p>Width: </p>',
            '<input type="number" id="width_input" step="0.001">',
            '<p>Height: </p>',
            '<input type="number" id="height_input" step="0.001">',
        ];

        return super.generateInputElements(this.getName(), inputElements, 2);
    }

    getInputs() {
        var returnValue = {
            width: Number.parseFloat(document.getElementById('width_input').value),
            height: Number.parseFloat(document.getElementById('height_input').value)
        }

        return returnValue;
    }

    // TODO: Add the other 2 functions here later
}
