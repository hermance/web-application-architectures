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

var result;
result = document.createElement("tr");
result.innerHTML = "<td style=\"background-color : #ffa500\"><b>VOITURE/RENTAL</b></td>"
+"<td style=\"background-color : #ffa500\"><b>Driver Pays</b></td>"
+"<td style=\"background-color : #ffa500\"><b>Driver paid</b></td>"
+"<td style=\"background-color : #ffa500\"><b>Owner Receives</b></td>"
+"<td style=\"background-color : #ffa500\"><b>Owner received</b></td>"
+"<td style=\"background-color : #ffa500\"><b>Insurance receives </b></td>"
+"<td style=\"background-color : #ffa500\"><b>Insurance received</b></td>"
+"<td style=\"background-color : #ffa500\"><b>Assistance is </b></td>"
+"<td style=\"background-color : #ffa500\"><b>Assistance received</b></td>"
+"<td style=\"background-color : #ffa500\"><b>Dirvy is </b></td>"
+"<td style=\"background-color : #ffa500\"><b>Dirvy was </b></td>";
document.body.insertBefore(result, document.getElementById('tr'));
	
//document.write('<br/><br/>EXERCICE 6 <br/');
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
						var test = false;
						if(data2.rentals[i].id == data2.rentalModifications[y].rentalId){
						test = true;
							//alert(temps);
							//alert(data2.rentalModifications[y].returnDate);
							var returnDate2 = new Date(data2.rentalModifications[y].returnDate);
							var pickupDate2 = new Date(data2.rentalModifications[y].pickupDate);
							var temps2 = ((returnDate2 - pickupDate2)/86400000)+1;
							//alert(temps);
							if(temps2 >= 1 && temps2<4){
								var prix2 = ((data2.cars[j].pricePerDay )  * temps2)
								+ (data2.cars[j].pricePerKm * data2.rentalModifications[y].distance);
								var prix2 = prix - 0.1*prix;
								 var insurance2= prix2 /2;
								 var roadsideAssistance2 = 1*temps2;
								 var drivy2 = prix2 - insurance2 - roadsideAssistance2;
								  var charge2 = (temps2 *4);
								  var drivy2 = prix2 - insurance2 - roadsideAssistance2 - charge2;
							}
							else if (temps2 >= 4 && temps2<10){
								 var prix2 = ((data2.cars[j].pricePerDay )  * temps2)
								+ (data2.cars[j].pricePerKm * data2.rentalModifications[y].distance);
								prix2 = prix2 - 0.3*prix2;
								  var insurance2= prix2 /2;
								  var roadsideAssistance2 = 1*temps2;
								  var drivy2 = prix2 - insurance2 - roadsideAssistance2;
								  var charge2 = (temps2 *4);
								   var drivy2 = prix2 - insurance2 - roadsideAssistance2 - charge2;
							}
							else if (temps2 >= 10){
								 var prix2 = ((data2.cars[j].pricePerDay )  * temps2)
								+ (data2.cars[j].pricePerKm * data2.rentalModifications[y].distance);
								prix2 = prix2 - 0.5*prix2;
								  var insurance2= prix2 /2;
								 var roadsideAssistance2 = 1*temps2;
								 var drivy2 = prix2 - insurance2 - roadsideAssistance2;
								 var charge2 = (temps2 *4);
								 var drivy2 = prix2 - insurance2 - roadsideAssistance2 - charge2;
							}
						
						}
				}
				
				
			result = document.createElement("tr");
			result.innerHTML += "<td>"+data2.cars[j].id+"/"+data2.rentals[i].id+"</td>";
			if(data2.cars.deductibleReduction == true)
			{
				result.innerHTML += "<td>"  + prix2+charge2+"€ </td>";
				//document.write('</br>The driver pays : '  + prix2+ charge2+'€ <br/>');
				if(test)result.innerHTML += "<td>"  + prix+charge+"€ </td>";
				else result.innerHTML += "<td><i>No Changes</i></td>";
				//document.write('</br>The driver paid : '  + prix+ charge+'€ <br/>');
				
			}
			else
			{
				result.innerHTML += "<td>"  + prix2+"€ </td>";
				
				if(test)result.innerHTML += "<td>"  + prix+"€ </td>";
				else result.innerHTML += "<td><i>No Changes</i></td>";
				//if(test)document.write('</br>The driver paid : '  + prix  +'€ <br/>');
				//document.write('</br>The driver pays : '  + prix2  +'€ <br/>');
			}
			
			result.innerHTML += "<td>"  + insurance2+"€ </td>";
			if(test)result.innerHTML += "<td>"  + insurance+"€ </td>";
				else result.innerHTML += "<td><i>No Changes</i></td>";
			
			
			result.innerHTML += "<td>"  + roadsideAssistance2+"€ </td>";
			if(test)result.innerHTML += "<td>"  + roadsideAssistance+"€ </td>";
				else result.innerHTML += "<td><i>No Changes</i></td>";
			result.innerHTML += "<td>"  + drivy2+"€ </td>";
			if(test)result.innerHTML += "<td>"  + drivy+"€ </td>";
				else result.innerHTML += "<td><i>No Changes</i></td>";
			result.innerHTML += "<td>"  + drivy2+charge2+"€ </td>";
			if(test)result.innerHTML += "<td>"  + drivy+charge+"€ </td>";
				else result.innerHTML += "<td><i>No Changes</i></td>";
			
			document.body.insertBefore(result, document.getElementById('tr'));
			
			/*document.write('</br>The owner received : '  + insurance+'€ <br/>');
			document.write('</br>The owner receives : '  + insurance2+'€ <br/>');
			
			
			document.write('</br>The insurance received : '  + roadsideAssistance+'€ <br/>');
			document.write('</br>The assistance received : '  + drivy+'€ <br/>');
			document.write('</br>the drivy was : '  + drivy + charge+'€  <br/>');
			if(test){
			document.write('</br>The insurance receives : '  + roadsideAssistance2+'€ <br/>');
			document.write('</br>The assistance receives : '  + drivy2+'€ <br/>');
			document.write('</br>the drivy is : '  + drivy2 + charge2+'€ <br/>');
			}*/
		}
	}
}
