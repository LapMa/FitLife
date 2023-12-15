// Fő változok letrehozása
let fofeherje = 0, fozsir = 0, foszenhidrat = 0, fokcal = 0;
// jövőbeli terv:
//let food = [];

function Kaloriaszamlalas() {
    // UserInput eltárolása
    let etelname = document.getElementById("etelname").value;
    let feherje = document.getElementById("feherje");
    let zsir = document.getElementById("zsir");
    let szenhidrat = document.getElementById("szenhidrat");
    let total = document.getElementById("total");
    
    // objectum tömb létrehozása
    let kaja = 
    [
  { name: "Csirkemáj", Fehérje: 17, Zsír: 5, Szénhidrát: 1, Kalória: 119 },
  { name: "Csirkecomb", Fehérje: 20.9, Zsír: 5.2, Szénhidrát: 0.5, Kalória: 139 },
  { name: "Rák", Fehérje: 14.9, Zsír: 0.8, Szénhidrát: 2.2, Kalória: 77 },
  { name: "Tyúk", Fehérje: 19, Zsír: 6.5, Szénhidrát: 0.4, Kalória: 140 },
  { name: "Hekk", Fehérje: 20.2, Zsír: 0.9, Szénhidrát: 0, Kalória: 89 },
  { name: "Joghurt, gyümölcsös", Fehérje: 3.5, Zsír: 2, Szénhidrát: 10.3, Kalória: 74 },
  { name: "Tejföl, 12%", Fehérje: 3.4, Zsír: 12, Szénhidrát: 4, Kalória: 137.6 },
  { name: "Kefír (sovány)", Fehérje: 3.4, Zsír: 0.1, Szénhidrát: 4.6, Kalória: 34 },
  { name: "Fürjtojás", Fehérje: 12.5, Zsír: 10.8, Szénhidrát: 0.7, Kalória: 154 },
  { name: "Tojásfehérje", Fehérje: 12.5, Zsír: 0.4, Szénhidrát: 0.8, Kalória: 57.1 },
  { name: "Tojás", Fehérje: 13.5, Zsír: 12, Szénhidrát: 0.6, Kalória: 5164 },
  { name: "Barna kenyér", Fehérje: 8.5, Zsír: 0.8, Szénhidrát: 50.6, Kalória: 249 },
  { name: "Kenyér", Fehérje: 10, Zsír: 1.8, Szénhidrát: 54.5, Kalória: 262 },
  { name: "Kifli (sós, tejes)", Fehérje: 10, Zsír: 3, Szénhidrát: 58, Kalória: 308 },
  { name: "Rizs", Fehérje: 8, Zsír: 0.03, Szénhidrát: 77.5, Kalória: 344 }
    ];
    // bool érték a hiba kereséshez
    let found = false;  
   
    kaja.forEach(element => {    // a tömb bejárása
        if (etelname.toLowerCase() === element.name.toLowerCase()) { // Ha a user input megegyezik a tömb[nev] elemével
            fofeherje += element.Fehérje;   
            fozsir += element.Zsír;
            foszenhidrat += element.Szénhidrát;
            fokcal += element.Kalória;                               //felvesszuk ezeket az adatokat a fő valtozoinkba
            // jövőbeli terv:
            // food.push(etelname); 

            found = true;  // A felhasznalo altal megadott értéket szerepel a tömbben (Ha igen - true, ha nem - false)
        }
    });

    // Ha a found változó true, kiiratjuk az értékeket
    if (found) 
     {
        feherje.innerHTML = fofeherje.toFixed(2); // Az innerhtml fuggvenyt egy html id-re hivva jelenitjuk meg az adatokat
        zsir.innerHTML = fozsir.toFixed(2);       // A toFixed fugvennyel limitáljuk a tizedes karaktereket 2-re
        szenhidrat.innerHTML = foszenhidrat.toFixed(2);
        total.innerHTML = `${fokcal.toFixed(2)}kcal`;

     } 
    // Ha false figyelmeztetjuk a felhasznalót
    else
     {
        alert("Nem található ilyen étel a listában!");
     }
    // jövőbeli terv:
    /* 
    let foods = document.getElementById("foods");

    foods.innerHTML= `<ul><li>${food[0]}</li><br><li>${food[1]}</li><br><li>${food[2]}</li></ul>`;
    */
}
