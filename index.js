const keepAlive = require("./server")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("5 accounts┃95 servers┃https://github.com/Uunkn0wnN", { type: "WATCHING"})
   console.log(`berhasil masuk ke akun ${client.user.username}`)
})

keepAlive()
client.login(TOKEN);
