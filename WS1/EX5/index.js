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
  ]
};

var result;
result = document.createElement("tr");
result.innerHTML = "<td style=\"background-color : #ffa500\"><b>VOITURE/RENTAL</b></td><td style=\"background-color : #ffa500\"><b>Driver pays</b></td><td style=\"background-color : #ffa500\"><b>Owner Receives</b></td><td style=\"background-color : #ffa500\"><b>Insurance receives</b></td><td style=\"background-color : #ffa500\"><b>Assistance receives</b></td><td style=\"background-color : #ffa500\"><b>Dirvy (in cas of accident)</b></td>";
document.body.insertBefore(result, document.getElementById('tr'));
		
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
			result = document.createElement("tr");
			result.innerHTML += "<td>"+data2.cars[j].id+"/"+data2.rentals[i].id+"</td>";
			//<td>"  + prix+"€ </td><td>"  + insurance+"€ </td><td>"  + roadsideAssistance+"€ </td><td>"  + drivy+"€ </td>"
			//+"<td>"  + charge+"€ </td><td>"  + drivy2+"€ </td>";
			
			if(data2.cars.deductibleReduction == true)
			{
				result.innerHTML += "<td>"  + prix+charge+"€ </td>";
				//document.write('</br>The driver pays : '  + prix+ charge+'€ <br/>');
			}
			else
			{
				result.innerHTML += "<td>"  + prix+"€ </td>";
				//document.write('</br>The driver pays : '  + prix  +'€ <br/>');
			}
			
			result.innerHTML += "<td>"  +insurance+"€ </td><td>"+ roadsideAssistance+"</td><td>"+drivy+"€</td><td>"+drivy + charge+"€</td>";
			document.body.insertBefore(result, document.getElementById('tr'));
			
			
			/*document.write('</br>The owner receives : '  + insurance+'€ <br/>');
			
			
			document.write('</br>The insurance receives : '  + roadsideAssistance+'€ <br/>');
			document.write('</br>The assistance receives : '  + drivy+'€ <br/>');
			document.write('</br>the drivy is : '  + drivy + charge+'€ (pour réduction en cas d\'accident) <br/>');
*/
		}
	}
}
