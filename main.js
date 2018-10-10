const Cleverbot = require("cleverbot.io");
const Discord = require("discord.js");
const cfg = require("./config.js");

const hookMulder = new Discord.WebhookClient(cfg.webhooks.mulder.id,cfg.webhooks.mulder.token);
const hookScully = new Discord.WebhookClient(cfg.webhooks.scully.id,cfg.webhooks.scully.token);

const mulder = new Cleverbot(cfg.cleverbot.user,cfg.cleverbot.key);
const scully = new Cleverbot(cfg.cleverbot.user,cfg.cleverbot.key);


mulder.setNick('Mulder');
scully.setNick('Scully');

var initialMessage = "Hi";

start();

function start(){
    mulder.create((errX, sessionX) => {
        scully.create((errY, sessionY) => {
            ask1(initialMessage);
            broadcast("chat","Mulder",initialMessage);
            console.log("Mulder: "+initialMessage);
        })
    })
}

function ask1(string){
    mulder.ask(string, function (err, response) {
        console.log("Scully: "+ response);
        broadcast("chat","Scully",response);
        ask2(response);
    });
}

function ask2(string){
    scully.ask(string, function (err, response) {
        console.log("Mulder: "+ response);
        broadcast("chat","Mulder",response);
        ask1(response);
    });
}

function broadcast(status,bot,msg) {
    if(bot === "Mulder"){hookMulder.send(msg);}
    if(bot === "Scully"){hookScully.send(msg);}
}