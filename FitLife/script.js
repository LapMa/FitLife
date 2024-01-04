let fofeherje = 0,
  fozsir = 0,
  foszenhidrat = 0,
  fokcal = 0;

function Kaloriaszamlalas() {
  let etelname = document.getElementById("etelname").value;
  let feherje = document.getElementById("feherje");
  let zsir = document.getElementById("zsir");
  let szenhidrat = document.getElementById("szenhidrat");
  let total = document.getElementById("total");

  const kaja = [
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
    { name: "Tojás", Fehérje: 13.5, Zsír: 12, Szénhidrát: 0.6, Kalória: 164 },
    { name: "Barna kenyér", Fehérje: 8.5, Zsír: 0.8, Szénhidrát: 50.6, Kalória: 249 },
    { name: "Kenyér", Fehérje: 10, Zsír: 1.8, Szénhidrát: 54.5, Kalória: 262 },
    { name: "Kifli (sós, tejes)", Fehérje: 10, Zsír: 3, Szénhidrát: 58, Kalória: 308 },
    { name: "Rizs", Fehérje: 8, Zsír: 0.03, Szénhidrát: 77.5, Kalória: 344 },
    { name: "Camping", Fehérje: 16.5, Zsír: 26.4, Szénhidrát: 1.7, Kalória: 321 },
    { name: "Derby", Fehérje: 16.7, Zsír: 23.4, Szénhidrát: 1.6, Kalória: 285 },
    { name: "Edámi", Fehérje: 26.2, Zsír: 26.6, Szénhidrát: 1.7, Kalória: 362 },
    { name: "Parmezán", Fehérje: 26.8, Zsír: 28.9, Szénhidrát: 1.6, Kalória: 385 },
    { name: "Sovány sajt", Fehérje: 29.6, Zsír: 18.5, Szénhidrát: 1.7, Kalória: 291 },
    { name: "Trappista", Fehérje: 27.7, Zsír: 28.1, Szénhidrát: 1.6, Kalória: 381 },
    { name: "Babkonzerv", Fehérje: 11, Zsír: 0.5, Szénhidrát: 27, Kalória: 156.5 },
    { name: "Brokkoli", Fehérje: 3.3, Zsír: 0.2, Szénhidrát: 2.1, Kalória: 23.4 },
    { name: "Fokhagyma", Fehérje: 6.8, Zsír: 0.1, Szénhidrát: 26.3, Kalória: 137 },
    { name: "Gyöngyhagyma", Fehérje: 1.2, Zsír: 0.1, Szénhidrát: 8.3, Kalória: 39 },
    { name: "Lilahagyma", Fehérje: 1.2, Zsír: 0.1, Szénhidrát: 8.3, Kalória: 39 },
    { name: "Olívabogyó", Fehérje: 0.2, Zsír: 21.9, Szénhidrát: 6.5, Kalória: 224 },
    { name: "Padlizsán", Fehérje: 1.3, Zsír: 0.2, Szénhidrát: 4.8, Kalória: 27 },
    { name: "Paprika", Fehérje: 1.2, Zsír: 0.3, Szénhidrát: 3, Kalória: 19.5 },
    { name: "Barack", Fehérje: 0.7, Zsír: 0, Szénhidrát: 9, Kalória: 41.5 },
    { name: "Birsalma", Fehérje: 0.6, Zsír: 0, Szénhidrát: 9.1, Kalória: 42 },
    { name: "Citrom", Fehérje: 0.4, Zsír: 0, Szénhidrát: 2.3, Kalória: 27 },
    { name: "Citrom", Fehérje: 0.4, Zsír: 0, Szénhidrát: 2.3, Kalória: 27 },
    { name: "Citromlé", Fehérje: 0.4, Zsír: 0, Szénhidrát: 2.3, Kalória: 63 },
    { name: "Cseresznye", Fehérje: 0.8, Zsír: 0, Szénhidrát: 14, Kalória: 63 },
    { name: "Körte", Fehérje: 0.4, Zsír: 0, Szénhidrát: 12, Kalória: 52.3 },
    { name: "Körte befőtt", Fehérje: 0.3, Zsír: 0, Szénhidrát: 23.7, Kalória: 99 },
    { name: "Málna", Fehérje: 1.2, Zsír: 0, Szénhidrát: 5.4, Kalória: 29 },
    { name: "Földimogyoró", Fehérje: 26.7, Zsír: 47.2, Szénhidrát: 14.7, Kalória: 609 },
    { name: "Gesztenye", Fehérje: 4.8, Zsír: 1.5, Szénhidrát: 32.6, Kalória: 167 },
    { name: "Vaj, tea", Fehérje: 0.3, Zsír: 70, Szénhidrát: 0.3, Kalória: 653 },
    { name: "Vajkrém", Fehérje: 2.5, Zsír: 40, Szénhidrát: 2, Kalória: 390 },
    { name: "Főzőcsokoládé", Fehérje: 6, Zsír: 38, Szénhidrát: 42, Kalória: 554 },
    { name: "Gumicukor", Fehérje: 4, Zsír: 0, Szénhidrát: 76, Kalória: 336 },

    ];
  let found = false;

  kaja.forEach((element) => {
    if (etelname.toLowerCase() === element.name.toLowerCase()) {
      fofeherje += element.Fehérje;
      fozsir += element.Zsír;
      foszenhidrat += element.Szénhidrát;
      fokcal += element.Kalória;

      found = true;
    }
  });

  if (found) {
    feherje.innerHTML = fofeherje.toFixed(2);
    zsir.innerHTML = fozsir.toFixed(2);
    szenhidrat.innerHTML = foszenhidrat.toFixed(2);
    total.innerHTML = `${fokcal.toFixed(0)}kcal`;
  } else if (etelname == "") {
    alert("Ne hajd üresen🍔!");
  } else {
    kaja.forEach((element) => {
      if (!(element.name in kaja)){
        alert("Nincs ilyen kaja a táblázatba");
        exit();
      }
    });
  }
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
  if (etelname !== "") {
    var ulElement = document.getElementById("worldist");
    var liElement = document.createElement("li");
    liElement.innerHTML = etelname;
    ulElement.appendChild(liElement);

    liElement.value = "";
  }
}

function more() {
  let more_food = document.getElementById("more_food");
  let less_btn = document.getElementById("less_btn");
  let more_btn = document.getElementById("more_btn");

  more_btn.style.display = "none";
  less_btn.style.display = "inline";

  more_food.innerHTML = `
    <tr>
        <td>Camping</td>
        <td>16,5</td>
        <td>26,4</td>
        <td>1,7</td>
        <td>321</td>
        </tr>

        <tr>
        <td>Derby</td>
        <td>16,7</td>
        <td>23,4</td>
        <td>1,6</td>
        <td>285</td>
        </tr>

        <tr>
        <td>Edámi</td>
        <td>26,2</td>
        <td>26,6</td>
        <td>1,7</td>
        <td>362</td>
        </tr>

        <tr>
        <td>Parmezán</td>
        <td>26,8</td>
        <td>28,9</td>
        <td>1,6</td>
        <td>385</td>
        </tr>

        <tr>
        <td>Sovány sajt</td>
        <td>29,6</td>
        <td>18,5</td>
        <td>1,7</td>
        <td>291</td>
        </tr>

        <tr>
        <td>Trappista</td>
        <td>27,7</td>
        <td>28,1</td>
        <td>1,6</td>
        <td>381</td>
        </tr>

        <tr>
        <td>Babkonzerv</td>
        <td>11</td>
        <td>0,5</td>
        <td>27</td>
        <td>156,5</td>
        </tr>

        <tr>
        <td>Brokkoli</td>
        <td>3,3</td>
        <td>0,2</td>
        <td>2,1</td>
        <td>23,4</td>
        </tr>

        <tr>
        <td>Fokhagyma</td>
        <td>6,8</td>
        <td>0,1</td>
        <td>26,3</td>
        <td>137</td>
        </tr>

        <tr>
        <td>Gyöngyhagyma</td>
        <td>1,2</td>
        <td>0,1</td>
        <td>8,3</td>
        <td>39</td>
        </tr>

        <tr>
        <td>Lilahagyma</td>
        <td>1,2</td>
        <td>0,1</td>
        <td>8,3</td>
        <td>39</td>
        </tr>

        <tr>
        <td>Olívabogyó</td>
        <td>0,2</td>
        <td>21,9</td>
        <td>6,5</td>
        <td>224</td>
        </tr>

        <tr>
        <td>Padlizsán</td>
        <td>1,3</td>
        <td>0,2</td>
        <td>4,8</td>
        <td>27</td>
        </tr>

        <tr>
        <td>Paprika</td>
        <td>1,2</td>
        <td>0,3</td>
        <td>3</td>
        <td>19,5</td>
        </tr>

        <tr>
        <td>Barack</td>
        <td>0,7</td>
        <td>0</td>
        <td>9</td>
        <td>41,5</td>
        </tr>

        <tr>
        <td>Birsalma</td>
        <td>0,6</td>
        <td>0</td>
        <td>9,1</td>
        <td>42</td>
        </tr>

        <tr>
        <td>Citrom</td>
        <td>0,4</td>
        <td>0</td>
        <td>2,3</td>
        <td>27</td>
        </tr>

        <tr>
        <td>Citromlé</td>
        <td>0,4</td>
        <td>0</td>
        <td>2,3</td>
        <td>63</td>
        </tr>

        <tr>
        <td>Cseresznye</td>
        <td>0,8</td>
        <td>0</td>
        <td>14</td>
        <td>63</td>
        </tr>

        <tr>
        <td>Körte</td>
        <td>0,4</td>
        <td>0</td>
        <td>12</td>
        <td>52,3</td>
        </tr>

        <tr>
        <td>Körte befőtt</td>
        <td>0,3</td>
        <td>0</td>
        <td>23,7</td>
        <td>99</td>
        </tr>

        <tr>
        <td>Málna</td>
        <td>1,2</td>
        <td>0</td>
        <td>5,4</td>
        <td>29</td>
        </tr>

        <tr>
        <td>Földimogyoró</td>
        <td>26,7</td>
        <td>47,2</td>
        <td>14,7</td>
        <td>609</td>
        </tr>

        <tr>
        <td>Gesztenye</td>
        <td>4,8</td>
        <td>1,5</td>
        <td>32,6</td>
        <td>167</td>
        </tr>

        <tr>
        <td>Vaj, tea</td>
        <td>0,3</td>
        <td>70</td>
        <td>0,3</td>
        <td>653</td>
        </tr>

        <tr>
        <td>Vajkrém</td>
        <td>2,5</td>
        <td>40</td>
        <td>2</td>
        <td>390</td>
        </tr>

        <tr>
        <td>Főzőcsokoládé</td>
        <td>6</td>
        <td>38</td>
        <td>42</td>
        <td>554</td>
        </tr>

        <tr>
        <td>Gumicukor</td>
        <td>4</td>
        <td>0</td>
        <td>76</td>
        <td>336</td>
        </tr>

        
        `;
}
function less() {
  let more_food = document.getElementById("more_food");
  let more_btn = document.getElementById("more_btn");
  let less_btn = document.getElementById("less_btn");

  more_btn.style.display = "inline";
  less_btn.style.display = "none";

  more_food.innerHTML = ``;
}
