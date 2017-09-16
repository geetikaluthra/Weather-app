const request=require('request');
const yargs=require('yargs');

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

console.log(argv);
var add=encodeURIComponent(argv.a);
request({
	url:`https://maps.googleapis.com/maps/api/geocode/json?address='${add}`,
	json:true
},(error,response,body)=>{
	//console.log(JSON.stringify(error,undefined,2));//2 is the spaces for indentation
	console.log(`Address: ${body.results[0].formatted_address}`);
	console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
	console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
	});