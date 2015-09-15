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
document.write('EXERCICE 1 <br/');
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
			document.write('<br/>Le prix est de : '  + prix+'€ <br/>');
			//alert(prix);
			//return prix; 
			//on a relié voiture et proprio
		}
	}
}


document.write('<br/><br/>EXERCICE 2 <br/');
for(var i=0; i<data.rentals.length;i++)
{
	for(var j=0; j<data.cars.length; j++){
		if(data.rentals[i].carId == data.cars[j].id)
		{
			var returnDate = new Date(data.rentals[i].returnDate);
			var pickupDate = new Date(data.rentals[i].pickupDate);
			var temps = ((returnDate - pickupDate)/86400000)+1;
			//alert(temps);
			if(temps >= 1 && temps<4){
				var prix = ((data.cars[j].pricePerDay )  * temps)
				+ (data.cars[j].pricePerKm * data.rentals[i].distance);
				prix = prix - 0.1*prix;
				}
				else if (temps >= 4 && temps<10){
				var prix = ((data.cars[j].pricePerDay )  * temps)
				+ (data.cars[j].pricePerKm * data.rentals[i].distance);
				prix = prix - 0.3*prix;
				}
				else if (temps >= 10){
				var prix = ((data.cars[j].pricePerDay )  * temps)
				+ (data.cars[j].pricePerKm * data.rentals[i].distance);
				prix = prix - 0.5*prix;
				}
			document.write('</br>Le prix avec réduction est de : '  + prix+'€ <br/>');
			//alert(prix);
			//return prix; 
			//on a relié voiture et proprio
		}
	}
}


var data2 = {
  "cars": [
    {
      "id": "p306",
      "vehicule": "peugeot 306",
      "pricePerDay": 20,
      "pricePerKm": 0.10
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
      "returnDate": "2015-09-12",
      "distance": 100
    },
    {
      "id": "2-rs-92",
      "driver": {
        "firstName": "Rebecca",
        "lastName": "Solanas"
      },
      "carId": "p306",
      "pickupDate": "2015-09-10",
      "returnDate": "2015-09-15",
      "distance": 300
    },
    {
      "id": "3-sa-92",
      "driver": {
        "firstName": " Sami",
        "lastName": "Ameziane"
      },
      "car_id": "p306",
      "pickupDate": "2015-08-31",
      "returnDate": "2015-09-13",
      "distance": 1000
    }
  ]
};
document.write('<br/><br/>EXERCICE 3 <br/');
for(var i=0; i<data2.rentals.length;i++)
{
	for(var j=0; j<data2.cars.length; j++){
		if(data2.rentals[i].carId == data2.cars[j].id)
		{
			var returnDate = new Date(data2.rentals[i].returnDate);
			var pickupDate = new Date(data2.rentals[i].pickupDate);
			var temps = ((returnDate - pickupDate)/86400000)+1;
			//alert(temps);
			if(temps >= 1 && temps<4){
				var prix = ((data2.cars[j].pricePerDay )  * temps)
				+ (data2.cars[j].pricePerKm * data2.rentals[i].distance);
				prix = prix - 0.1*prix;
				var insurance= prix /2;
				var roadsideAssistance = 1*temps;
				var drivy = prix - insurance - roadsideAssistance;
				}
				else if (temps >= 4 && temps<10){
				var prix = ((data2.cars[j].pricePerDay )  * temps)
				+ (data2.cars[j].pricePerKm * data2.rentals[i].distance);
				prix = prix - 0.3*prix;
				var insurance= prix /2;
				var roadsideAssistance = 1*temps;
				var drivy = prix - insurance - roadsideAssistance;
				}
				else if (temps >= 10){
				var prix = ((data2.cars[j].pricePerDay )  * temps)
				+ (data2.cars[j].pricePerKm * data2.rentals[i].distance);
				prix = prix - 0.5*prix;
				var insurance= prix /2;
				var roadsideAssistance = 1*temps;
				var drivy = prix - insurance - roadsideAssistance;
				}
				document.write('<br/> -----------------');
			document.write('</br>Le prix avec réduction est de : '  + prix+'€ <br/>');
			document.write('</br>Le prix de l\'assurance est de : '  + insurance+'€ <br/>');
			document.write('</br>Le prix de l\'assistance est de : '  + roadsideAssistance+'€ <br/>');
			document.write('</br>Le prix du drivy est de : '  + drivy+'€ <br/>');
			//alert(prix);
			//return prix; 
			//on a relié voiture et proprio
		}
	}
}




document.write('<br/><br/>EXERCICE 4 <br/');
for(var i=0; i<data2.rentals.length;i++)
{
	for(var j=0; j<data2.cars.length; j++){
		if(data2.rentals[i].carId == data2.cars[j].id)
		{
			var returnDate = new Date(data2.rentals[i].returnDate);
			var pickupDate = new Date(data2.rentals[i].pickupDate);
			var temps = ((returnDate - pickupDate)/86400000)+1;
			//alert(temps);
			if(temps >= 1 && temps<4){
				var prix = ((data2.cars[j].pricePerDay )  * temps)
				+ (data2.cars[j].pricePerKm * data2.rentals[i].distance);
				prix = prix - 0.1*prix;
				var insurance= prix /2;
				var roadsideAssistance = 1*temps;
				var drivy = prix - insurance - roadsideAssistance;
				var charge = (temps *4);
				var drivy2 = prix - insurance - roadsideAssistance - charge;
				}
				else if (temps >= 4 && temps<10){
				var prix = ((data2.cars[j].pricePerDay )  * temps)
				+ (data2.cars[j].pricePerKm * data2.rentals[i].distance);
				prix = prix - 0.3*prix;
				var insurance= prix /2;
				var roadsideAssistance = 1*temps;
				var drivy = prix - insurance - roadsideAssistance;
				var charge = (temps *4);
				var drivy2 = prix - insurance - roadsideAssistance - charge;
				}
				else if (temps >= 10){
				var prix = ((data2.cars[j].pricePerDay )  * temps)
				+ (data2.cars[j].pricePerKm * data2.rentals[i].distance);
				prix = prix - 0.5*prix;
				var insurance= prix /2;
				var roadsideAssistance = 1*temps;
				var drivy = prix - insurance - roadsideAssistance;
				var charge = (temps *4);
				var drivy2 = prix - insurance - roadsideAssistance - charge;
				}
				document.write('<br/> +++++++++++++++++++');
			document.write('</br>Le prix avec réduction est de : '  + prix+'€ <br/>');
			document.write('</br>Le prix de l\'assurance est de : '  + insurance+'€ <br/>');
			document.write('</br>Le prix de l\'assistance est de : '  + roadsideAssistance+'€ <br/>');
			document.write('</br>Le prix du drivy est de : '  + drivy+'€ <br/>');
			document.write('</br>Le prix des charges est de : '  + charge+'€ (pour réduction en cas d\'accident) <br/>');
			document.write('</br>Le prix du drivy avec l\'assurance est de : '  + drivy2+'€ <br/>');
			/*
			document.write('</br>Le conducteur paye : '  + drivy+'€ <br/>');
			document.write('</br>Le proprio reçois : '  + drivy+'€ <br/>');
			document.write('</br>L\'assurance reçois : '  + drivy+'€ <br/>');
			document.write('</br>L\assistance reçois : '  + drivy+'€ <br/>');
			document.write('</br>Ledrivy reçoit : '  + drivy+'€ <br/>');
			*/
			
			
			//alert(prix);
			//return prix; 
			//on a relié voiture et proprio
		}
	}
}




