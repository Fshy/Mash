/*jshint esversion: 6 */

const request   = require('request');
const Discord   = require('discord.js');
const _         = require('lodash/core');
const winston   = require('winston');
const config    = require('./config');
const commands  = require('./commands');

const client    = new Discord.Client();

client.login(config.token);

client.on('ready', () => {
  console.log(`\n\x1b[35m\x1b[1m~ ~ ~ ${config.name} Online ~ ~ ~\x1b[0m`);
});

client.on('message', (message)=>{
  if(message.author.bot) return;

  // Receive DM
  // if (message.channel.type===`dm`)

  // Client Mentioned
  let trigger = config.trigger.toLowerCase();
  if(!message.content.toLowerCase().match(trigger) && !message.mentions.users.get(client.user.id)) return;

  // Command Parsing
  console.log(`\x1b[36m[${message.guild}] \x1b[1m${message.author.username}: \x1b[0m${message.content}`);
  let command;
  if (message.content.toLowerCase().match(/lewd/)) command = 'lewd';

  switch (command) {
    case 'lewd':          return commands.lewd(client,message);
    default:              return commands.ping(client,message);
  }

});
