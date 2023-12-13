
let fofeherje = 0, fozsir = 0, foszenhidrat = 0, fokcal = 0;

function Kaloriaszamlalas() {
    let etelname = document.getElementById("etelname").value;
    let total = document.getElementById("total");
    let feherje = document.getElementById("feherje");
    let zsir = document.getElementById("zsir");
    let szenhidrat = document.getElementById("szenhidrat");
    
    let kaja = [
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


    kaja.forEach(element => {
        if (etelname == element["name"]){
            fofeherje += element["Fehérje"];
            fozsir += element["Zsír"];
            foszenhidrat += element["Szénhidrát"];
            fokcal += element["Kalória"];

            feherje.innerHTML = fofeherje;
            zsir.innerHTML = fozsir.toFixed(2);
            szenhidrat.innerHTML = foszenhidrat;
            total.innerHTML = `${fokcal}kcal`;
        }
    });
    /*
    if (etelname == kaja[0].name) {
        total.innerHTML = `119`;
    }
    
    for (let index = 0; index < kaja.length; index++) {
        if (eletname == kaja["name"]) {
            if (index)
        }
        
    }
*/

}