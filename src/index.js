let a = "Hello World";

document.getElementById("app").innerHTML = a + " <br/> <br/>";

document.getElementById("app").innerHTML =
  document.getElementById("app").innerHTML + "kokos <br/> <br/>";

var x = 2;
var y = 7;
var z = x + y;

document.getElementById("vysledek").innerHTML =
  "Vysledek je " + z + "<br/> <br/>";

//vyskakovaci psaci pole
/*
var year = prompt('V kterém  roce ses narodil?','');

if(year<1989)
  alert('Bylo ti třicet.');
else
  alert('Bude ti třicet.');
*/

//vyskakovaci pole na potvrzeni
/*
var osmnact = confirm("U 18?");
alert(osmnact);
*/

// podminky v JS
var cislo = 18;
var osmnact;

if (cislo < 18) osmnact = false;
else osmnact = true;

document.getElementById("cislo").innerHTML = osmnact + "<br/> <br/>";

//alternativne
osmnact = cislo < 18 ? "Nebylo 18" : "Bylo 18";

document.getElementById("cislo").innerHTML =
  document.getElementById("cislo").innerHTML + osmnact;

//promenne pokud chceme pretypovat na int muzem napsat "+" pred promennou

/*
var promenna = prompt ('Zadej číslo', '');
alert(+promenna + 100);
*/

function odecti3(x) {
  return +x - 3;
}

//alert(odecti3(5));
/*
for(var i = 0; i <5; i++)
alert(odecti3(i));
*/
