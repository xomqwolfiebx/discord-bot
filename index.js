const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const db = require('quick.db');
const mongoose = require('mongoose');
const ms = require('ms');
const fs = require('fs');
const message = require('./events/guild/message');
const { DiscordMenus, ButtonBuilder, MenuBuilder } = require('discord-menus');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

mongoose
  .connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to mongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

client.login(process.env.TOKEN);
