const request=require('request');
var geocodeAddress=(address,callback)=>{
		
	var add=encodeURIComponent(address);
	request({
	url:`https://maps.googleapis.com/maps/api/geocode/json?address='${add}`,
	json:true
},(error,response,body)=>{
	if(error){
		callback('Unable to connect to google servers');
	}else if(body.status==='ZERO_RESULTS'){
		callback('Unable to find that address');
	}else if(body.status==='OK'){
		callback(undefined,{
			address:body.results[0].formatted_address,
			latitude:body.results[0].geometry.location.lat,
			longitude:body.results[0].geometry.location.lng
		});
		//console.log(JSON.stringify(error,undefined,2));//2 is the spaces for indentation
		//console.log(`Address: ${body.results[0].formatted_address}`);
		//console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
		//console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
	}
	
	});
	
};

var temperature=(latitude,longitude)=>{
	request({
	url:`https://api.darksky.net/forecast/ea544f30d37752b911a842b9e3c36164/${latitude},${longitude}`,
	json:true
},(error,response,body)=>{
	if(!error && response.statusCode===200){
		console.log(body.currently.temperature);
	}else{
		console.log('Unable to fetch weather');
	}
	
});
};

module.exports={
	geocodeAddress,
	temperature
};
	
