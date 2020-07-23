const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const bmiForm = document.querySelector("form");

bmiForm.onsubmit = calculation;
heightInput.onblur = checkHeight;
weightInput.onblur = checkWeight;
heightInput.onfocus = focus;
weightInput.onfocus = focus;

// Function to check for invalid input.
function checkHeight() {
    var height = Number(heightInput.value);
    if (height == "" || height < 0 || isNaN(height)) {
        heightInput.value = "invalid height."
    }
}
// Function to check for invalid input.
function checkWeight() {
    var weight = Number(weightInput.value);
    if (weight == "" || weight < 0 || isNaN(weight)) {
        weightInput.value = "invalid weight."
    }
}
// Function to select all text when the field is in focus.
function focus() {
    this.select();
}
// Main function to calculate and show the result.
function calculation(e) {
    e.preventDefault();
    heightInput.blur();
    weightInput.blur();
    const result = document.getElementById("bmi");
    const resultInWord = document.getElementById("result");
    var height = Number(heightInput.value);
    var weight = Number(weightInput.value);
    if (isNaN(height) || isNaN(weight) || height == 0 || weight == 0) {
        return;
    }
    else {
        let obese = document.getElementById("obese");
        let overweight = document.getElementById("overweight");
        let normal = document.getElementById("normal");
        let underweight = document.getElementById("underweight")
        obese.classList.remove("highlight");
        overweight.classList.remove("highlight");
        normal.classList.remove("highlight");
        underweight.classList.remove("highlight");

        var bmi = weight / (height * height / 10000);
        console.log(bmi);
        var roundedBmi = bmi.toFixed(2);
        result.innerHTML = roundedBmi;
        if (bmi >= 30) {
            resultInWord.innerHTML = "Your result is consider obese."
            obese.classList.add("highlight")
        }
        else if (bmi >= 25) {
            resultInWord.innerHTML = "Your result is consider overweight"
            overweight.classList.add("highlight")
        }
        else if (bmi >= 18.5) {
            resultInWord.innerHTML = "Your resutl is consider normal."
            normal.classList.add("highlight");
        }
        else {
            resultInWord.innerHTML = "Your result is consider underweight."
            underweight.classList.add("highlight");
        }
    }
}
