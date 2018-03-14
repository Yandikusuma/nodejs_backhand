//import { startserver } from './server';

//---Anonymus function--

//var waterair = function(air){
//	console.log(air);
//}

/*function waterair(air){
	console.log(air);
}*/
//waterair("hello world");

//function manywater(watermain, value){
//	watermain(value);
//}
//manywater(function(air){console.log(air);},"hello yandik")

//---Global object n timers--

//console.log(__filename);
//console.log(__dirname);

//function printstuff(){
//	console.log("This was from setInterval");
//}

//setTimeout(printstuff,4000);

//setInterval(printstuff,2000);


//----- Callback function--

/*console.log("User 1 made a pizaa");
setTimeout(callback, 3000);

console.log("User 2 made a pizaa");
setTimeout(callback, 3000);

console.log("User 3 made a pizaa");
setTimeout(callback, 3000);

function callback(){
	console.log("queried database and delivered data in 5");
}
*/

//---Module import--

/*var athletic = require('./athletic');
athletic.relay();
athletic.shortjump();
*/

//------http Module--

//var http = require('http');
//http.createServer(function(request, response){
//	response.writeHead(200,{"Content-type": "text/plain"});
//	response.write("Hello Yandik");
//	response.end();
//
//}).listen(8888);


//-----Events---

/*var events = require('events');
var eventEmitter = new  events.EventEmitter();

var ringbell = function(){
	console.log("Ring ring ring");
	eventEmitter.emit('bellring', 'welcome')
}

eventEmitter.on('doorOpen', ringbell);
eventEmitter.on('bellring',function(message){
	console.log(message)
})
eventEmitter.emit('doorOpen');
*/

//----fs Module---

/*var fs = require('fs');

fs.readFile('input.txt', function(err, data){
	if(err){
		console.log(err);
	}else{
		console.log("Async data is " + data.toString());
	}
});

var data = fs.readFileSync('input.txt');
console.log("Sync data is " + data.toString());
console.log("This is the end")
*/

//----streams-----

/*var fs = require('fs');

var readableStream = fs.createReadStream('input.txt');
var data = '';
readableStream.setEncoding('UTF8');
readableStream.on('data', function(chunk){
		data +=chunk;
});
readableStream.on('end', function(){
	console.log(data);
});

var writeData = "Hello Yandi";
var writeableStream = fs.createWriteStream('output.txt');
writeableStream.write(writeData, 'UTF8');
writeableStream.end();
writeableStream.on('finish', function(){
	console.log("write succes")
})
*/


//-----Pipes----

/*var fs = require('fs');
var readableStream = fs.createReadStream('in.txt');
var writeableStream = fs.createWriteStream('out.txt');
readableStream.pipe(writeableStream);
*/

