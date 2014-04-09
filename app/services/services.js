moduleApp.service('concertService', function ($http) {
	var baseUrl = "http://findconcertsservice.cloudapp.net/FindConcertsService.svc/";

	this.findAll = function () {
      	/*$http({
       		url: baseUrl + "findAll?format=json",
       		method:"GET",
       		
       		headers: {
                  'Authorization': 'Basic dGVzdDp0ZXN0',
                  'Content-Type': 'application/x-www-form-urlencoded'
       		}
       	});*/

       	/*$http.get( baseUrl + "findAll?format=json")
       		.success(function(result) {
        		console.log("Data retrieve successfully")
        		concerts = result;
        	})
       		.error(function() {
            	console.log("error");
       		});*/
    	       		
  	

      	var concerts;
      	$.support.cors = true;
        $http.defaults.useXDomain = true;
      	$.ajax({
      		url: baseUrl + "findAll?format=json", 
      		dateType: "json",
      		type: 'GET',
      		async: false,
      		crossDomain: true,
      		success:function(data) {
         		console.log("Data retrieve successfully")
         		concerts = data;
         	},
      		error: function(data){
      			alert("Error loading data");
      		}
  	 	});
      
      	return concerts;
		
		/*makeCorsRequest('http://findconcertsservice.cloudapp.net/FindConcertsService.svc/findAll?format=json',
      		'GET')

      	/*under same-origin-policy
      	Cross-domain ajax with Cross-Origin Resource Sharing (CORS), 
      	using HTTP Headers to allow both browsers and server more about each other due to different domain XMLHttpRequest 
      	*/  
	};
	
	this.addConcert = function (newConcert) {
        var topID = 1;
			//authorId = FB.getUserID();
		
		var newConcert  = {
			'Id': topID,
            'Singer': newConcert.singer,
            'Location': newConcert.location,
            'Price': newConcert.price,
			'Gender': newConcert.gender,
			'AdditionalInfo': newConcert.additionalInfo,
			'Date': newConcert.date /*+ newConcert.time*/,
			'Likes': 0,
			'Unlikes': 0,
			'AuthorId': 0
		}


		/*
        $http.post(baseUrl + 'addConcert?format=json', 
        	{ 'data': JSON.stringify(newConcert) })
        	.success(function(result) {
            	console.log(result);
            	concerts = data;
        	})
        	.error(function() {
            	console.log("error");
       	 	});
    	*/

		$.ajax({
      		url: baseUrl + "addConcert?format=json", 
      		type: "POST",  
      		data: JSON.stringify(newConcert),
      		contentType: "application/json",

      		success:function(result) {
         		console.log("Saved successfully")
         		concerts = data;
         	},
      		error: function(result){
      			alert("Error saving concert");
      		}
  	 	});
		

		console.log("Saving - Singer: " + newConcert.singer + 
					", Location: " + newConcert.location + ", Price: " + newConcert.price + 
					", Date: " + newConcert.date + ", Time: " + newConcert.time + 
					", Gender: " + newConcert.gender + ", Additional Info: " + newConcert.additionalInfo);
    };
	
	this.getConcert = function (id) {
       concerts = null;
        $.ajax({
      		url: baseUrl + "getConcert/"+ id +"?format=json", 
      		type: "GET",  
      		async: false,
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
            if (concerts[i].AuthorId == authorId || concerts[i].AuthorId == 0) {
                concertsMatched.push(concerts[i]);
            }
        }
        return concertsMatched;
	
	};
	
	this.deleteConcert = function (id) {
        for (var i = concerts.length - 1; i >= 0; i--) {
            if (concerts[i].id === id) {
                concerts.splice(i, 1);
                break;
            }
        }
    };
	
	
	/*
    var concerts = [
		{
			id: 1, singer: 'Eric Johnson', likes: 500, unlikes: 2,
			location: 'San Francisco - 1234 Anywhere St.', price: 100, gender: 'Rock/Blues',
			additionalInfo: 'AdditionalInfo1', date: '01/01/2000', authorId: '100001598152759'
		},
		{
			id: 2, singer: 'Gustavo Lima', likes: 2, unlikes: 500,
			location: 'Betim - Minas Gerais', price: 50, gender: 'Sertanejo',
			additionalInfo: 'AdditionalInfo2', date: '01/01/2001', authorId: '100001598152759'
		},
		{
			id: 3, singer: 'Fernando e Sorocaba', likes: 500, unlikes: 2,
			location: 'San Francisco - 1234 Anywhere St.', price: 100, gender: 'Rock/Blues',
			additionalInfo: 'AdditionalInfo3', date: '01/01/2002', authorId: '100001598152759'
		},
		{
			id: 4, singer: 'Calipso', likes: 0, unlikes: 1000,
			location: 'Pernambuco', price: 5, gender: 'Brega',
			additionalInfo: 'AdditionalInfo4', date: '01/01/2003', authorId: '1'
		},
		{
			id: 5, singer: 'John Mayer', likes: 1500, unlikes: 10,
			location: 'San Diego - 1234 Anyplace St.', price: 100, gender: 'Rock/Blues',
			additionalInfo: 'AdditionalInfo5', date: '01/01/2004', authorId: '1'
		},
		{
			id: 6, singer: 'Skank', likes: 500, unlikes: 2,
			location: 'Belo Horizonte - Mineirão', price: 100, gender: 'Pop',
			additionalInfo: 'AdditionalInfo6', date: '01/01/2005', authorId: '2'
		},
		{
			id: 7, singer: 'Capital Inicial', likes: 100, unlikes: 2,
			location: 'Miami', price: 150, gender: 'Pop',
			additionalInfo: 'AdditionalInfo7', date: '01/01/2007', authorId: '2'
		},
		{
			id: 8, singer: 'Bon Jovi', likes: 0, unlikes: 0,
			location: 'San Juan', price: 200, gender: 'Rock/Blues',
			additionalInfo: 'AdditionalInfo8', date: '01/01/2006', authorId: '2'
		},
		{
			id: 9, singer: 'AC/DC', likes: 500, unlikes: 2,
			location: 'New York', price: 300, gender: 'Rock',
			additionalInfo: 'AdditionalInfo1', date: '04/28/2014', authorId: '0', time: '07:00 am' 
		},
		{
			id: 10, singer: 'Metalica', likes: 500, unlikes: 2,
			location: 'São Paulo', price: 500, gender: 'Metal',
			additionalInfo: 'AdditionalInfo1', date: '04/28/2009', authorId: '2' 
		},        
    ];*/	
});