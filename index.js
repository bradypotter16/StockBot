require('dotenv').config();


const Discord = require('discord.js');
const bot = new Discord.Client();
const request = require('request');
var finnhub = require('finnhub');
var express = require('express');
var bodyParser = require('body-parser')

const TOKEN = process.env.ACC_TOKEN;

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.APIKEY
const finnhubClient = new finnhub.DefaultApi()

bot.login(TOKEN);

bot.on('ready', () => 
{

    console.info('Logged in as ' + bot.user.tag)

});

bot.on('message', msg => 
{

    if (msg.content.startsWith('!show'))
    {

        let splitArray = msg.content.split(" ");

        ticker = splitArray[1];
        stockSymbol = ticker.toUpperCase();


        finnhubClient.companyProfile2({'symbol': stockSymbol}, (error, data, response) => 
        {
            
            let titleString = data.name + " (" + data.ticker + ")"

            var infoEmbed = new Discord.MessageEmbed()
                .setColor('#2832C2')
                .setThumbnail(data.logo)
                .setTitle(titleString)
                .addFields
                (

                    {name: "Website", value: data.weburl},
                    {name: "Phone", value: data.phone},


                )

                msg.channel.send({embed: infoEmbed});
        
        });
            
        setTimeout(function()
        {
        
            finnhubClient.quote(stockSymbol, (error, data, response) =>
            {

                let 

                var stockEmbed = new Discord.MessageEmbed()
                    .setColor('#2832C2')
                    .addFields
                    (

                        {name: "Current Value", value: data.c.toFixed(2)},
                        {name: "Day Open", value: data.o.toFixed(2), inline: true},
                        {name: "Day High", value: data.h.toFixed(2), inline: true},
                        {name: "Day Low", value: data.l.toFixed(2), inline: true},

                    );

                    msg.channel.send({embed: stockEmbed});
 
            });

        }, 200)

        setTimeout(function()
        {
        
            finnhubClient.quote(stockSymbol, (error, data, response) =>
            {

                let 

                var stockEmbed = new Discord.MessageEmbed()
                    .setColor('#2832C2')
                    .addFields
                    (

                        {name: "Current Value", value: data.c.toFixed(2)},
                        {name: "Day Open", value: data.o.toFixed(2), inline: true},
                        {name: "Day High", value: data.h.toFixed(2), inline: true},
                        {name: "Day Low", value: data.l.toFixed(2), inline: true},

                    );

                    msg.channel.send({embed: stockEmbed});
 
            });

        }, 200)

    }

});