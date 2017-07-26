const config    = require('./config.json');
const lib       = require('./lib');

// Methods to export
class Commands {

  ping(client,message){
    message.channel.send(lib.embed({description:`Mash is here! Took me ${Math.round(client.ping)}ms to see your message`},message));
  }

  lewd(client,message){
    message.channel.send(lib.embed({image:`http://i.imgur.com/o16TM4O.png`},message));
  }

}

module.exports = new Commands();
