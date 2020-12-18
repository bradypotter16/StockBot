require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.ACC_TOKEN;

console.log(process.env.ACC_TOKEN);

bot.login(TOKEN);

bot.on('ready', () => 
{

    console.info('Logged in as ' + bot.user.tag)

});

bot.on('message', msg => 
{

    if (msg.content == 'ping')
    {

        msg.channel.send('pong');
        console.log();

    }

    else if (msg.content.startsWith('!bestStock'))
    {

        msg.channel.send('Air Canada');

    }

});