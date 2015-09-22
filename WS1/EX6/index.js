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
      "distance": 100,
      "options":{
        "deductibleReduction": false
      }
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
      "distance": 300,
      "options":{
        "deductibleReduction": true
      }
    },
    {
      "id": "3-sa-92",
      "driver": {
        "firstName": " Sami",
        "lastName": "Ameziane"
      },
      "carId": "p306",
      "pickupDate": "2015-08-31",
      "returnDate": "2015-09-13",
      "distance": 1000,
      "options":{
        "deductibleReduction": true
      }
    }
  ],
  "rentalModifications": [
    {
      "id": 1,
      "rentalId": "1-pb-92" ,
	  "pickupDate": "2015-09-12",
      "returnDate": "2015-09-13",
      "distance": 150
    },
    {
      "id": 2,
      "rentalId": "3-sa-92",
	  "pickupDate": "2015-08-31",
      "distance": 1000,
      "returnDate": "2015-09-13",
    }
  ]
};

document.write('<br/><br/>EXERCICE 6 <br/');
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
				
				for(var y = 0; y<data2.rentalModifications.length;y++){
						if(data2.rentals[i].id == data2.rentalModifications[y].rentalId){
							//alert(temps);
							//alert(data2.rentalModifications[y].returnDate);
							returnDate = new Date(data2.rentalModifications[y].returnDate);
							pickupDate = new Date(data2.rentalModifications[y].pickupDate);
							temps = ((returnDate - pickupDate)/86400000)+1;
							//alert(temps);
							if(temps >= 1 && temps<4){
								 prix = ((data2.cars[j].pricePerDay )  * temps)
								+ (data2.cars[j].pricePerKm * data2.rentalModifications[y].distance);
								prix = prix - 0.1*prix;
								 insurance= prix /2;
								 roadsideAssistance = 1*temps;
								 drivy = prix - insurance - roadsideAssistance;
								 charge = (temps *4);
								 drivy2 = prix - insurance - roadsideAssistance - charge;
							}
							else if (temps >= 4 && temps<10){
								 prix = ((data2.cars[j].pricePerDay )  * temps)
								+ (data2.cars[j].pricePerKm * data2.rentalModifications[y].distance);
								prix = prix - 0.3*prix;
								 insurance= prix /2;
								 roadsideAssistance = 1*temps;
								 drivy = prix - insurance - roadsideAssistance;
								 charge = (temps *4);
								 drivy2 = prix - insurance - roadsideAssistance - charge;
							}
							else if (temps >= 10){
								 prix = ((data2.cars[j].pricePerDay )  * temps)
								+ (data2.cars[j].pricePerKm * data2.rentalModifications[y].distance);
								prix = prix - 0.5*prix;
								 insurance= prix /2;
								 roadsideAssistance = 1*temps;
								 drivy = prix - insurance - roadsideAssistance;
								 charge = (temps *4);
								 drivy2 = prix - insurance - roadsideAssistance - charge;
							}
						
						}
				}
				
				
				
				document.write('<br/> +++++++++++++++++++');
			if(data2.cars.deductibleReduction == true)
			{
				document.write('</br>The driver pays : '  + prix+ charge+'€ <br/>');
			}
			else
			{
				document.write('</br>The driver pays : '  + prix  +'€ <br/>');
			}
			document.write('</br>The owner receives : '  + insurance+'€ <br/>');
			
			
			document.write('</br>The insurance receives : '  + roadsideAssistance+'€ <br/>');
			document.write('</br>The assistance receives : '  + drivy+'€ <br/>');
			document.write('</br>the drivy is : '  + drivy + charge+'€ (pour réduction en cas d\'accident) <br/>');

		}
	}
}
