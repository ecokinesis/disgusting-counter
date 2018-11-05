const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", async () => {
  console.log("I am ready!");
});

//var count = 86;


 
client.on("message", async message => {
  
  //var msg = message.content.toLowercase();
  //let stripped = message.content.replace(".","").replace("!","");
  if ( (message.author.id == 446811259254341633) && (stripDown(message.content.trim()).includes("disgusting"))) {
    process.env.COUNT++;
    message.channel.send("<@446811259254341633> has said 'disgusting' " + process.env.COUNT + " times.");
  }
});
 
//client.login("SuperSecretBotTokenHere");


client.login(process.env.TOKEN);

function stripDown(whatever) {
  var lowercase = whatever.replace(/A/g,"a").replace(/B/g,"b").replace(/C/g,"c").replace(/D/g,"d").replace(/E/g,"e")
.replace(/F/g,"f").replace(/G/g,"g").replace(/H/g,"h").replace(/I/g,"i").replace(/J/g,"j").replace(/K/g,"k")
.replace(/L/g,"l").replace(/M/g,"m").replace(/N/g,"n").replace(/O/g,"o").replace(/P/g,"p").replace(/Q/g,"q")
.replace(/R/g,"r").replace(/S/g,"s").replace(/T/g,"t").replace(/U/g,"u").replace(/V/g,"v").replace(/W/g,"w")
.replace(/X/g,"x").replace(/Y/g,"y").replace(/Z/g,"z");
  lowercase = lowercase.replace(/\*/g,"i");
  if(lowercase.includes("disgisting") || lowercase.includes("isgust") || lowercase.includes("dis*") || (lowercase.includes("disgus") && lowercase.includes("**"))){
       lowercase = "disgusting";
  }
  return lowercase;
}
