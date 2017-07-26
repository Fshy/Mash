const Discord   = require('discord.js');
const config    = require('./config.json');

// Helper Functions
class Lib {
  embed(embed,message){
    return ({embed:
        new Discord.RichEmbed()
        .setAuthor(config.name,message.client.user.displayAvatarURL)
        .setDescription(`${embed.description ? embed.description:''}`)
        .setImage(`${embed.image ? embed.image:''}`)
        .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.hexColour}`)
      });
  }

}

module.exports = new Lib();
