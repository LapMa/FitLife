function Calc() 
{

    let heightInput = document.getElementById('height');
    let weightInput = document.getElementById('weight');
    let ageInput = document.getElementById('age');
    let printbmi = document.getElementById('printbmi');
    let printclass = document.getElementById('printclass');
    let printgen = document.getElementById('printgen');
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);
    let age = parseFloat(ageInput.value);
    let bmi, Classification, gender;


    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Enter valid values!!!");
        return;
    }

    bmi = (weight / (height * height)) * 10000;


    // Ha férfi
    if (document.getElementById('male').checked == true) {

        if (age < 2) {

            Classification = "Tul fiatal!"
        }

        else if (age >= 2 && age <= 15) {

            if (bmi < 14) {
                Classification = "Underweight";
            } else if (bmi >= 14 && bmi < 19) {
                Classification = "Normal weight";
            } else if (bmi >= 19 && bmi < 25) {
                Classification = "Overweight";
            } else {
                Classification = "Obese";
            }
        }
        else if (age >= 16) {

            if (bmi < 18.5) {
                Classification = "Underweight";
            } else if (bmi >= 18.5 && bmi < 24.9) {
                Classification = "Normal weight";
            } else if (bmi >= 25 && bmi < 30) {
                Classification = "Overweight";
            } else {
                Classification = "Obese";
            }
        }
        gender = "férfi"
    }
    // Ha nő
    else if (document.getElementById('female').checked == true) {
        if (age < 2) {

            Classification = "Tul fiatal!"
        }
        else if (age >= 2 && age <= 15) {

            if (bmi < 13) {
                Classification = "Underweight";
            } else if (bmi >= 13 && bmi < 17) {
                Classification = "Normal weight";
            } else if (bmi >= 17 && bmi < 23) {
                Classification = "Overweight";
            } else {
                Classification = "Obese";
            }
        }
        else if (age >= 16) {

            if (bmi < 18.5) {
                Classification = "Underweight";
            } else if (bmi >= 18.5 && bmi < 23.9) {
                Classification = "Normal weight";
            } else if (bmi >= 24 && bmi < 30) {
                Classification = "Overweight";
            } else {
                Classification = "Obese";
            }
        }

        gender = "nő";
    }
    printgen.innerHTML = "Gender: " + gender;
    printbmi.innerHTML = "BMI: " + bmi.toFixed(2);
    printclass.innerHTML = "Class: " + Classification;
}
