const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;

    const tempselected = document.getElementById('temp_diff');
    const valuetemp = temp_diff.options[tempselected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9 / 5) + 32);
        return fahrenheit;
    }

    const fahToCel = (feh) => {
        let celcius = Math.round((feh - 32) * 5 / 9);
        return celcius;
    }

    let result;

    if (valuetemp == 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Fahrenheit`;
    }
    else {
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Celcius`;
    }
}