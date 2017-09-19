const request=require('request');

var getTemperature=(latitude,longitude,callback)=>{
	request({
	url:`https://api.darksky.net/forecast/ea544f30d37752b911a842b9e3c36164/${latitude},${longitude}`,
	json:true
},(error,response,body)=>{
	if(!error && response.statusCode===200){
		callback(undefined,{
			temperature:body.currently.temperature,
			actualTemperature:body.currently.apparentTemperature});
	}else{
		callback('Unable to fetch weather');
	}
	
});
};


module.exports.getTemperature=getTemperature;