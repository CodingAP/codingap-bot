let Discord = require('discord.js');
require('dotenv').config();
let files = require('fs');

let client = new Discord.Client();
files.readdir('./events/', (err, files) => {
    files.forEach(file => {
        let eventHandler = require(`./events/${file}`);
        client.on(file.split('.')[0], (...args) => eventHandler(client, ...args))
    })
})

client.login(process.env.BOT_TOKEN);