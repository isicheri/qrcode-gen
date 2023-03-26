// const http = require('http')
// const fs = require('fs')
// const url = require('url')
// const zlib = require('zlib')
// const gzip = zlib.createGzip()


// const writableStream = fs.createWriteStream('./index2.txt')

// const readeableStream = fs.createReadStream('./index.txt',{
//     encoding: "utf-8",
//     highWaterMark: 5
// })

// const server = http.createServer((req,res) => {

//     fs.readFile('./index.html',(err,data) => {

//         if(err) return;

//         res.writeHead(200,{
//             "Content-Type": "text/html"
//         })
//       res.write(data)
//       res.end()
//     })    
// })

// fs.appendFile('myFile.txt', 'hello from the server',(err) => {
//     if(err) throw err;
//     console.log('saved')
// })


// fs.unlink('myFile.txt',(err) => {
    //     if(err) throw err
    //     console.log('deleted')
    // })
    // readeableStream.pipe(gzip).pipe(fs.WriteStream("./index2.txt.zip"))

// readeableStream.on('data',(data) => {
//     console.log(data)
//     writableStream.write(data)
// })

// server.listen(4000,() => {
//     console.log('server is running')
// })

// Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side application using JavaScript.

// for(let i = 1; i <= 1000000000000000084848448484993393n; i++) {
//     console.log(i)
// }

// for(let i = 0; i < nums.length; i++) {
    //         for(let j = i + 1; j < nums.length; j++) {
    //             if(nums[i] + nums[j] === target) {
    //            return [i,j]
    //             }
    //         }
    // } 
//node js basics

// modules

// 1. core module - http,path,fs,url,util
// 2. local module - functions,object,string
// 3.export module


// export module--- module.exports exports

// exports.frac = () => {}

// const name = () => {
    
// }

// REPL => read eval print loop
//nodejs shell

// types of function

// named 
// arrow
// anonymous
// cb fucn
// function name() {}
// const nae = () => {}

// const fs = require('fs')

// fs ==> FILE SYSTEM

// fs.appendFile('der.html',"this is the tutorial",(err) => {
//  if(err) throw err;

//  console.log('created')
// })

// fs.writeFile('index.txt','ola codes',(err) => {
//      if(err) throw err;
// })

// process.env.UV_THREADPOOL_SIZE

// let main = document.querySelector('.main')
// let main2 = document.querySelector('.main2')
// let bulletHolder = document.querySelector('.bullet-holder')
// let bulletHolder1 = document.querySelector('.bullet-holder1')
// let bullet = document.querySelectorAll('.div')
// let bullet1 = document.querySelectorAll('.div1')


// main.addEventListener('click',(e) => {
//     console.log(e.path[0].attributes['0'].textContent )
// })

// let num =  bullet1.length - 1

// window.addEventListener('keypress',(e) => {
//     if(e.key == 'w') {
//         main.classList.toggle('game_move1')
//     }
//     else if(e.key == 'i') {
//         main2.classList.toggle('game_move')
//     }else if(e.key == 'u') {
//         console.log(num)
//        bullet1[num--].classList.add('shoot1')
//        setTimeout(() => {
//         bullet1[num].style.display = "none"
//        },1000)
//     }
// })

// function getSumOfAge(data) {
//     let num = 0;
//     for(let i = 0; i <= data.length - 1; i++) {
//         num += data[i].age
//     }
//     return num
// }

// function getData(data) {
//     return new Promise((resolve,reject) => {
//         if(!data) reject({
//             status: 'failed',
//             message: "data needs to be passed into the function"
//         });

//         resolve(data)
//     })
// }

// getData(data)
// .then((data) => {
// let sum = getSumOfAge(data)
//     console.log(sum)
// })
// .catch((err) => {
//     console.log(err)
// })


// ejs - embedded javaxcript template

const express = require("express");
const app = express();
const bp = require("body-parser");
const qr = require("qrcode");

app.set("view engine", "ejs");
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/scan", (req, res) => {
    const url = req.body.url;
    if (url.length === 0) res.send("Empty Data!");

    qr.toDataURL(url, (err, src) => {
        if (err) res.send("Error occured");
        res.render("scan", { src });
    });
});

const port = 5000;
app.listen(port, () => console.log("Server at 5000"));

// const QRCode = require('qrcode');

// QRCode.toString('Encode this text in QR code', {
//   errorCorrectionLevel: 'H',
//   type: 'jpeg'
// }, function(err, data) {
//   if (err) throw err;
//   console.log(data);
// });