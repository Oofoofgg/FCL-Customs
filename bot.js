const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjE3NjA5MzY4NTMxMTA3ODcx.XWtqBw.clDBaSz_YjNFnSL00PB18pCCYkc';

bot.on('ready', () =>{
    console.log('Ready to scrim!');
})   

bot.on('message', msg=>{
    if(msg.content === "Scrims?"){
        msg.reply('Whos ready to Scrim?!');
    }

bot.login(process.env.BOT_TOKEN);
