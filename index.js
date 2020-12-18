require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login("Nzg5MjYzNDQ0MTc5MTU3MDEy.X9vg3A.HkCmQf6UKxBIAcVN9KtFJIAi8Hg");

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