const yargs=require('yargs');
const request=require('request');
const geocode=require('./geocode/geocode.js');
//ea544f30d37752b911a842b9e3c36164
const key="ea544f30d37752b911a842b9e3c36164";

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



var g=geocode.geocodeAddress(argv.a,(errorMessage,results)=>{
	if(errorMessage){
		console.log(errorMessage);
	}else{
		console.log(JSON.stringify(results,undefined,2));
		geocode.temperature(results.latitude,results.longitude);
	}
});

