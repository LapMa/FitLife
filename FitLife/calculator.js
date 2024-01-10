function Calc() {
    // user input eltárolása
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

    // invalid értékek esetén figyelmezteti a felhasznalot
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0|| age <= 0|| age >= 110) {
        alert("Valós értékeket adj meg!");
        return;
    }
    // bmi kiszámitása suly/magassag(negyzet)*10000
    bmi = (weight / (height * height)) * 10000;


    // Ha férfi
    if (document.getElementById('male').checked == true) 
    {


        // 2 év allat nem lehet pontos értéket számolni, ezt jelezzük a felhasználónak
        if (age < 2 )
        {
            alert("Túl fiatal")
        } 

        else // ha pedig az életkor eleget tesz a feltételeknek lefutnak a számitások

        {   // Ha a felhasznalo életkora 2-15 
            if (age >= 2 && age <= 15) 
            {
                // felvesszuk a bmi éetékek alapján az egészségügyi besorolásokat
                if (bmi < 14) { 
                    Classification = "Sovány";
                } else if (bmi >= 14 && bmi < 19) {
                    Classification = "Normál súly";
                } else if (bmi >= 19 && bmi < 25) {
                    Classification = "Túlysúlyos";
                } else {
                    Classification = "Túlysúlyos";
                }
            }

            // Ha a felhasznalo életkora 15+
            else if (age >= 16) 
            {
                // felvesszuk a bmi éetékek alapján az egészségügyi besorolásokat
                if (bmi < 18.5) {
                    Classification = "Sovány";
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    Classification = "Normál súly";
                } else if (bmi >= 25 && bmi < 30) {
                    Classification = "Túlysúlyos";
                } else {
                    Classification = "Túlysúlyos";
                } 

                // A "Nem" változót férfira állitjuk, a kiiratás miatt szukseges
                gender = "férfi"
                
                
            }
                // az innerhtml funkcioval egy html-en belüli idre hivatkozva kiiratjuk az adatokat
                printgen.innerHTML = "Nem: " + gender;
                printbmi.innerHTML = "BMI: " + bmi.toFixed(2);   // A toFixed fugvennyel limitáljuk a tizedes karaktereket 2-re
                printclass.innerHTML = "Súly osztály: " + Classification;
        }
        
       
      
    }
    // Ha nő
    else if (document.getElementById('female').checked == true) {

        // 2 év allat nem lehet pontos értéket számolni, ezt jelezzük a felhasználónak
        if (age < 2 )
        {
            alert("Túl fiatal")
        } 

        else // ha pedig az életkor eleget tesz a feltételeknek lefutnak a számitások
        {
            // Ha a felhasznalo életkora 2-15 
            if (age >= 2 && age <= 15) {
                // felvesszuk a bmi éetékek alapján az egészségügyi besorolásokat
                if (bmi < 13) {
                    Classification = "Sovány";
                } else if (bmi >= 13 && bmi < 17) {
                    Classification = "Normál súly";
                } else if (bmi >= 17 && bmi < 23) {
                    Classification = "Túlysúlyos";
                } else {
                    Classification = "Túlysúlyos";
                }
            }

            // Ha a felhasznalo életkora 15+
            else if (age >= 16) {
                // felvesszuk a bmi éetékek alapján az egészségügyi besorolásokat
                if (bmi < 18.5) {
                    Classification = "Sovány";
                } else if (bmi >= 18.5 && bmi < 23.9) {
                    Classification = "Normál súly";
                } else if (bmi >= 24 && bmi < 30) {
                    Classification = "Túlysúlyos";
                } else {
                    Classification = "Túlysúlyos";
                }


                // A "Nem" változót nőre állitjuk, a kiiratás miatt szukseges
                gender = "nő";
                
                
        }
                // az innerhtml funkcioval egy html-en belüli idre hivatkozva kiiratjuk az adatokat
                printgen.innerHTML = "Nem: " + gender;
                printbmi.innerHTML = "BMI: " + bmi.toFixed(2);   // A toFixed fugvennyel limitáljuk a tizedes karaktereket 2-re
                printclass.innerHTML = "Súly osztály: " + Classification;
        }
        
      
    }
    
}
