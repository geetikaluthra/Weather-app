console.log('starting App');

setTimeout(()=>{
	console.log('Inside of callback');
},2000);

setTimeout(()=>{
	console.log('Inside of second callback');
},0);

console.log('finishing App');