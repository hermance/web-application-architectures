'use strict';

var data = {
  "cars": [
    {
      "id": "p306",
      "vehicule": "peugeot 306",
      "pricePerDay": 20,
      "pricePerKm": 0.10
    },
    {
      "id": "rr-sport",
      "pricePerDay": 60,
      "pricePerKm": 0.30
    },
    {
      "id": "p-boxster",
      "pricePerDay": 100,
      "pricePerKm": 0.45
    }
  ],
  "rentals": [
    {
      "id": "1-pb-92",
      "driver": {
        "firstName": "Paul",
        "lastName": "Bismuth"
      },
      "carId": "p306",
      "pickupDate": "2015-09-12",
      "returnDate": "2015-09-14",
      "distance": 150
    },
    {
      "id": "2-rs-92",
      "driver": {
        "firstName": "Rebecca",
        "lastName": "Solanas"
      },
      "carId": "rr-sport",
      "pickupDate": "2015-09-09",
      "returnDate": "2015-09-13",
      "distance": 550
    },
    {
      "id": "3-sa-92",
      "driver": {
        "firstName": " Sami",
        "lastName": "Ameziane"
      },
      "carId": "p-boxster",
      "pickupDate": "2015-09-12",
      "returnDate": "2015-09-14",
      "distance": 100
    }
  ]
}
//EXERCIE 1

			var result;
			result = document.createElement("tr");
			result.innerHTML = "<td style=\"background-color : #ffa500\"><b>VOITURE</b></td><td style=\"background-color : #ffa500\"><b>PRIX </b></td>";
			document.body.insertBefore(result, document.getElementById('tr'));
			
			
for(var i=0; i<data.rentals.length;i++)
{
	for(var j=0; j<data.cars.length; j++){
		if(data.rentals[i].carId == data.cars[j].id)
		{
			//alert(data.rentals[i].returnDate);
			//alert(data.rentals[i].pickupDate);
			var returnDate = new Date(data.rentals[i].returnDate);
			var pickupDate = new Date(data.rentals[i].pickupDate);
			var temps = ((returnDate - pickupDate)/86400000)+1;
			//alert(temps);
			var prix = (data.cars[j].pricePerDay * temps) + (data.cars[j].pricePerKm * data.rentals[i].distance);
			//document.getElementById('result').innerHTML = 'Le résultat est : '  + prix;
			/*var tableau = document.getElementById('tableau');
			var ligne = tableau.insertRow(-1);
			var colonne1 = ligne.insertCell(1);
			colonne1.innerHTML+="<tr><td>"+data.cars[j].id+"</td><td>";
			var colonne2 = ligne.insertCell(1);
			colonne2.innerHTML+="<tr><td>"+prix+"€ </tr>";*/
			result = document.createElement("tr");
			result.innerHTML = "<td>"+data.cars[j].id+"</td><td>"  + prix+"€ </td>";
			document.body.insertBefore(result, document.getElementById('tr'));
			//.getElementById('result').innerHTML += "<tr><td>"+data.cars[j].id+"</td><td>"  + prix+"€ </tr>";
			//document.getElementById('result').appendChild(result);
			//document.write('<br/>Le prix est de : '  + prix+'€ <br/>');
			//alert(prix);
			//return prix; 
			
			
			
			
			
		}
	}
}


