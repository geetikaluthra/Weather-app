const yargs=require('yargs');
const request=require('request');
const geocode=require('./geocode/geocode.js');
const weather=require('./weather/weather.js');

const argv=yargs
.options({
	address:{
		demand:true,
		alias:'a',
		describe:'Address to fetch weather for',
		string :true
	}
})
.help()
.alias('help','h')
.argv;


geocode.geocodeAddress(argv.a,(errorMessage,results)=>{
	if(errorMessage){
		console.log(errorMessage);
	}else{
		console.log(results.address);
		weather.getTemperature(results.latitude,results.longitude,(errorMessage,results)=>{
		if(errorMessage){
			console.log(errorMessage);
		}else{
			console.log(`Temperature is ${results.temperature} but it feels like ${results.actualTemperature}`);
		}
});
		
	}
});




