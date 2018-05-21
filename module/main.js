#!/usr/bin/env node
var program = require('commander');
+
program
.arguments('<file>')
.option('-u, --username <username>', 'The user to authenticate as')
.option('-p, --password <password>', 'The user\'s password')
.action(function(file) {
    console.log(program.username);
  console.log('user: %s pass: %s file: %s',
      program.username, program.password, file);
})
.parse(process.argv);

var ws = require("nodejs-websocket")
 
// Scream server example: "hi" -> "HI!!!" 
var server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("text", function (str) {
        console.log("Received "+str)
        conn.sendText(str.toUpperCase()+"!!!")
    })
    setInterval(() => conn.sendText("toggle-play"), 3000);
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(1402);
