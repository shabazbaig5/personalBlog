const util = require('util');
const fs = require('fs');
const http = require('http');
const { write } = util.promisify(fs.writeFile); 
const append = util.promisify(fs.appendFile);


const server = http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type' : 'text/plain'});

  // fs.readFile(__dirname + '/text', (err, data) => {

  //   // res.pipe(data);
  //   res.end(data);
  // });


  fs.createReadStream(__dirname + '/text').on('data', (buffer) => {

    console.log(buffer);

  }).pipe(res);
  

});


const writeStream = fs.createWriteStream(__dirname + '/text2');
process.stdin.pipe(writeStream);



server.listen(3001, '127.0.0.1', () => {

  console.log('Listening to port 3001');
  
});
// fs.readFile(__dirname + '/text','utf8', (err, data) => {

//   if(err){

//     console.log(err);

//   }else{

//     append('text2', data, (err,data) => {

//       console.log('writing the file to text2');

      
//     }).then((result) => {
//       console.log('written the file');
//     });

//     console.log(data);
//   }
// });