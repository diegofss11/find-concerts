app.service('concertService', function () {
	this.findAll = function () {
        return concerts;
    };
	
	this.addConcert = function (newConcert) {
        var topID = concerts.length + 1;
        concerts.push({
            id: topID,
            singer: newConcert.singer,
            location: newConcert.location,
            price: newConcert.price,
			gender: newConcert.gender,
			additionalInfo: newConcert.additionalInfo,
			date: newConcert.date + newConcert.time,
			likes: 0,
			unlikes: 0
        });
		
		console.log("Saving - Singer: " + newConcert.singer + 
					", Location: " + newConcert.location + ", Price: " + newConcert.price + 
					", Date: " + newConcert.date + ", Time: " + newConcert.time + 
					", Gender: " + newConcert.gender + ", Additional Info: " + newConcert.additionalInfo);
    };
	
	this.getConcert = function (id) {
        for (var i = 0; i < concerts.length; i++) {
            if (concerts[i].id === id) {
                return concerts[i];
            }
        }
        return null;
    };
	
	this.searchBy = function (concert) {
		var singer = concert.singer,
			gender = concert.gender,
			concertsMatched = {};
			
		console.log("Searching for: " + singer + " and " + gender);
        
		for (var i = 0; i < concerts.length; i++) {
            if (concerts[i].singer === singer && concerts[i].gender == gender) {
                concertsMatched.push{concerts[i]};
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
	
	
	
    var concerts = [
		{
			id: 1, singer: 'Eric Johnson', likes: 500, unlikes: 2,
			location: 'San Francisco - 1234 Anywhere St.', price: 100, gender: 'Rock/Blues',
			additionalInfo: 'AdditionalInfo1', date: '01/01/2000'
		},
		{
			id: 2, singer: 'Gustavo Lima', likes: 2, unlikes: 500,
			location: 'Betim - Minas Gerais', price: 50, gender: 'Sertanejo',
			additionalInfo: 'AdditionalInfo2', date: '01/01/2001'
		},
		{
			id: 3, singer: 'Fernando e Sorocaba', likes: 500, unlikes: 2,
			location: 'San Francisco - 1234 Anywhere St.', price: 100, gender: 'Rock/Blues',
			additionalInfo: 'AdditionalInfo3', date: '01/01/2002'
		},
		{
			id: 4, singer: 'Calipso', likes: 0, unlikes: 1000,
			location: 'Pernambuco', price: 5, gender: 'Brega',
			additionalInfo: 'AdditionalInfo4', date: '01/01/2003'
		},
		{
			id: 5, singer: 'John Mayer', likes: 1500, unlikes: 10,
			location: 'San Diego - 1234 Anyplace St.', price: 100, gender: 'Rock/Blues',
			additionalInfo: 'AdditionalInfo5', date: '01/01/2004'
		},
		{
			id: 6, singer: 'Skank', likes: 500, unlikes: 2,
			location: 'Belo Horizonte - Mineirão', price: 100, gender: 'Pop',
			additionalInfo: 'AdditionalInfo6', date: '01/01/2005'
		},
		{
			id: 7, singer: 'Capital Inicial', likes: 100, unlikes: 2,
			location: 'Miami', price: 150, gender: 'Pop',
			additionalInfo: 'AdditionalInfo7', date: '01/01/2007'
		},
		{
			id: 8, singer: 'Bon Jovi', likes: 0, unlikes: 0,
			location: 'San Juan', price: 200, gender: 'Rock/Blues',
			additionalInfo: 'AdditionalInfo8', date: '01/01/2006'
		},
		{
			id: 9, singer: 'AC/DC', likes: 500, unlikes: 2,
			location: 'New York', price: 300, gender: 'Rock',
			additionalInfo: 'AdditionalInfo1', date: '01/01/2008' 
		},
		{
			id: 10, singer: 'Metalica', likes: 500, unlikes: 2,
			location: 'São Paulo', price: 500, gender: 'Metal',
			additionalInfo: 'AdditionalInfo1', date: '01/01/2009' 
		},        
    ];	
});