moduleApp.service('ConcertService', function ($http) {
	this.findAll = function () {
      	$.support.cors = true;
        $http.defaults.useXDomain = true;
      	/*under same-origin-policy
      	Cross-domain ajax with Cross-Origin Resource Sharing (CORS), 
      	using HTTP Headers to allow both browsers and server more about each other due to different domain XMLHttpRequest 
      	*/  
		var concerts;   	
      	$.ajax({
      		url: baseUrl + "/concerts", 
      		type: 'GET',
      		dateType: "json",
      		async: false,
      		crossDomain: true,
      		success:function(data) {
      			if(data.length == 0){
      				alert("No concerts found");
      			}
      			else{
      				concerts = data;
      			}         		
         	},
      		error: function(data){
      			alert("Error loading data");
      		}      		
  	 	});
      	return concerts;
	};
	
	this.saveConcert = function (concert) {
        $.support.cors = true;
        $http.defaults.useXDomain = true;
        var type = "POST",
        	jsonConcert  = this.buildJsonObject(concert),
        	isSaved = false;
        if(concert.id != undefined){
        	type = "PUT"
        }        
		$.ajax({			
      		url: baseUrl + "/concerts", 
      		type: type,  
      		contentType: "application/json",
      		dataType: "text", //expects text
      		data: JSON.stringify(jsonConcert),
      		async: false,
      		crossDomain: true,

      		success:function(response) {
         		alert("Concert saved successfully");
         		isSaved = true;
         	},
      		error: function(response){
      			alert("Error saving concert");
      			isSaved = false;
      		}
  	 	});
  	 	return isSaved;
	};

    this.getConcert = function (id) {
       var concerts;
        $.ajax({
        	url: baseUrl + "/concert/"+ id, 
      		type: "GET",  
      		async: false,
      		crossDomain: true,
			success:function(result) {
				concerts = result;
      		},
      		error: function(result){
      			alert("Error loading concert");
      		}
  	 	});
        return concerts;
    };
	
	this.searchBy = function (concert) {
		var singer = concert.singer,
			gender = concert.gender,
			concertsMatched = [];
			
		console.log("Searching for: " + singer + " and " + gender);
        
		for (var i = 0; i < concerts.length; i++) {
            if (concerts[i].singer === singer && concerts[i].gender == gender) {
                concertsMatched.push(concerts[i]);
            }
        }
        return concertsMatched;
    };
	
	this.searchByAuthor = function(authorId){
		var concertsMatched = [],
        	concerts = this.findAll();
		
		for (var i = 0; i < concerts.length; i++) {
            if (concerts[i].authorId == authorId || concerts[i].authorId == 0) {
                concertsMatched.push(concerts[i]);
            }
        }
        return concertsMatched;
	
	};
	
	this.deleteConcert = function (id) {
        alert("delete called for " +id)
        $.ajax({
      		url: baseUrl + "/concerts/"+ id, 
      		type: "DELETE",  
      		async: false,
      		crossDomain: true,
			success:function(result) {
         		alert("Concert deleted successfully")
         	},
      		error: function(result){
      			alert("Error deleting concert");
      		}
  	 	});        
    };    	

    this.buildJsonObject = function(newConcert){
    	var id = 0;
    	if(newConcert.id == "" || newConcert.id == undefined){
    		id = this.findAll().length + 1;
    	}
    	else{
    		id =newConcert.id;
    	}
    	//authorId = FB.getUserID();    		
		
		var jsonConcert  = {
			additionalInfo: newConcert.additionalInfo,
			authorId: 0,
			date: newConcert.date /*+ newConcert.time*/,
			gender: newConcert.gender,
			id: id,
			likes: 0,
			location: newConcert.location,
			price: newConcert.price,
			singer: newConcert.singer,
            unlikes: 0
        }
		return jsonConcert;
    }	
});

/* MOCK data


{
			"id": "1", "singer": "Eric Johnson", "likes": "500", "unlikes": "2",
			"location": "San Francisco - 1234 Anywhere St.", "price": "100", "gender": "Rock/Blues",
			"additionalInfo": "AdditionalInfo1", "date": "01/01/2000", "authorId": "0"
		},
		{
			"id": 2, "singer": "Gustavo Lima", "likes": "2", "unlikes": 500,
			"location": "Betim - Minas Gerais", "price": 50, "gender": "Sertanejo",
			"additionalInfo": "AdditionalInfo2", "date": "01/01/2001", "authorId": 0
		},
		{
			"id": 3, "singer": "Fernando e Sorocaba", "likes": "500", "unlikes": "2",
			"location": "San Francisco - 1234 Anywhere St.", "price": 100, "gender": "Rock/Blues",
			"additionalInfo": "AdditionalInfo3", date: "01/01/2002", "authorId": 0
		},
		{
			"id": 4, "singer": "Calipso", "likes": "0", "unlikes": "1000",
			"location": "Pernambuco", price: 5, "gender": "Brega",
			"additionalInfo": "AdditionalInfo4", "date": "01/01/2003", "authorId": "0"
		},
		{
			"id": 5, "singer": "John Mayer", "likes": "1500, "unlikes": "10",
			"location": "San Diego - 1234 Anyplace St.", "price": "100", "gender": "Rock/Blues",
			"additionalInfo": "AdditionalInfo5", "date": "01/01/2004", "authorId": "0"
		},
		{
			"id": 6, "singer": "Skank", "likes": "500", "unlikes": "2",
			"location": "Belo Horizonte - Mineirão", "price": "100", "gender": "Pop",
			"additionalInfo": "AdditionalInfo6", "date": "01/01/2005", "authorId": "0"
		},
		{
			"id": 7, "singer": "Capital Inicial", "likes": "100", "unlikes": "2",
			"location": "Miami", "price": "150", "gender": "Pop",
			"additionalInfo": "AdditionalInfo7", "date": "01/01/2007", "authorId": "0"
		},
		{
			"id": 8, "singer": "Bon Jovi", "likes": "0", "unlikes": "0",
			"location": "San Juan", "price": "200", "gender": "Rock/Blues",
			"additionalInfo": "AdditionalInfo8", "date": "01/01/2006", "authorId": "0"
		},
		{
			"id": 9, "singer": "AC/DC", "likes": 500, "unlikes": "2",
			"location": "New York", "price": "300", "gender": "Rock",
			"additionalInfo": "AdditionalInfo1", "date": "04/28/2014", "authorId": "0" 
		},
		{
			"id": 10, "singer": "Metalica", "likes": "500", "unlikes": "2",
			"location": "São Paulo", "price": 500, "gender": "Metal",
			"additionalInfo": "AdditionalInfo1", "date": "04/28/2009", "authorId": "0" 
		},

}
*/