require('dotenv').config();


const Discord = require('discord.js');
const bot = new Discord.Client();
const request = require('request');
var finnhub = require('finnhub');
var express = require('express');
var bodyParser = require('body-parser')

const TOKEN = process.env.ACC_TOKEN;

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "bve5p2n48v6qmf0h32pg" // Replace this
const finnhubClient = new finnhub.DefaultApi()

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

    }

    else if (msg.content.startsWith('!show'))
    {

        let splitArray = msg.content.split(" ");

        stockSymbol = splitArray[1];

        finnhubClient.companyProfile2({'symbol': stockSymbol}, (error, data, response) => {
            msg.channel.send(data.name)
            msg.channel.send(data.ticker)
            msg.channel.send(data.weburl)
        });

    }

});
//test