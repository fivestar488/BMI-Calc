function calculateBmi() {
    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Check if inputs are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    // Calculate BMI (Metric formula)
    const bmi = (weight / ((height / 100) * (height / 100))); // Formula for BMI in metric units
    const bmiRounded = bmi.toFixed(2); // Round to 2 decimal places

    // Display the result
    document.getElementById('bmi-output').textContent = `Your BMI: ${bmiRounded}`;

    // Determine BMI category and add class
    const resultDiv = document.getElementById('result');
    resultDiv.className = ""; // Reset classes
    let message = "";
    if (bmi < 18.5) {
        message = "Underweight";
        resultDiv.classList.add('underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = "Normal weight";
        resultDiv.classList.add('normal');
    } else if (bmi >= 25 && bmi < 29.9) {
        message = "Overweight";
        resultDiv.classList.add('overweight');
    } else {
        message = "Obese";
        resultDiv.classList.add('obese');
    }

    document.getElementById('message').textContent = `Category: ${message}`;

    // Update progress bar
    const progress = document.getElementById('progress');
    const maxBmi = 40; // Maximum BMI for scaling
    const progressWidth = (bmi / maxBmi) * 100;
    progress.style.width = `${progressWidth}%`;
}

function reload() {
    // Clear the form and result
    document.getElementById('bmiForm').reset();
    document.getElementById('bmi-output').textContent = "";
    document.getElementById('message').textContent = "";

    // Reset progress bar
    const progress = document.getElementById('progress');
    progress.style.width = "0%";
}