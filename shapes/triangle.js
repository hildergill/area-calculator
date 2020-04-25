class Triangle extends Shape {
    getName() {
        return 'Triangle';
    }

    getArea(inputs) {
        return (inputs.height * inputs.width) / 2;
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

    clearInputs() {
        document.getElementById('width_input').value = null;
        document.getElementById('height_input').value = null;
    }

    generateResultElements(inputs, results) {
        var numberElementsStyle = 'margin-top: auto;margin-bottom: auto;';
        var elementsStyle = "display: flex;"

        var elements = [`<div style="${elementsStyle}">`,
            '<span class="fraction"><p>1</p><span id="fraction_line"></span><p>2</p></span>',
        `<p style="${numberElementsStyle}">‎‎ &#215; ${inputs.width} &#215; ${inputs.height}</p>`,
            `</div>`];

        return super.generateResultElements(this.getName(), elements, results);
    }

    getIcon() {
        var iconElements = [
            '<svg width="24" height="24" version="1.1" viewBox="0 0 6.35 6.35" xmlns="http://www.w3.org/2000/svg">',
            '<g transform="translate(0 -291)" fill="none" stroke-linecap="round" stroke-width=".529">',
            '<path d="m.794 296 2.38-4.76" />',
            '<path d="m3.18 291 2.38 4.76" />',
            '<path d="m.794 296h4.76" />',
            '</g>',
            '</svg>',
        ];

        var returnValue = '';
        iconElements.forEach((value) => { returnValue += value + '\n'; });

        return returnValue;
    }
}
