moduleApp.service('concertService', function ($http) {
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
         		concerts = data;
         	},
      		error: function(data){
      			alert("Error loading data");
      		}
  	 	});
      	return concerts;
	};
	
	this.addConcert = function (newConcert) {
        $.support.cors = true;
        $http.defaults.useXDomain = true;

       	var jsonConcert  = buildJsonObject(newConcert);

		$.ajax({			
      		url: baseUrl + "/concerts", 
      		type: "POST",  
      		contentType: "application/json; charset=utf-8",
      		dataType: "json",
      		data: JSON.stringify(jsonConcert),
      		async: false,
      		crossDomain: true,

      		success:function(result) {
         		concerts = data;
         	},
      		error: function(result){
      			alert("Error saving concert");
      		}
  	 	});
	};

    this.getConcert = function (id) {
       var concerts;
        $.ajax({
      		url: baseUrl + "/concerts/"+ id, 
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

    buildJsonObject = function(newConcert){
    	var topID = 1;
		//authorId = FB.getUserID();
		
		var jsonConcert  = {
			additionalInfo: newConcert.additionalInfo,
			authorId: 0,
			date: newConcert.date /*+ newConcert.time*/,
			gender: newConcert.gender,
			id: topID,
			likes: 0,
			location: newConcert.location,
			price: newConcert.price,
			singer: newConcert.singer,
            unlikes: 0
        }

		return jsonConcert;
    }	
});