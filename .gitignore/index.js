// Discord.js
var Discord = require("discord.js");

// autoReconnect is enabed
var bot = new Discord.Client({autoReconnect: true});

// Set the prefix
let Prefix = "/";
var prefix = "/"

// Ready? Set? Go!
bot.on('ready', () => {

  bot.user.setStatus("online"); //dnd , online , ldle
  bot.user.setActivity("se triturer le bout de pain");
  //bot.user.setGame("In Dev");
  console.log("Newston ! Le bot est en ligne");
});

bot.login('NDk0MjM0ODMzOTQ2NTQyMTAx.DowsOg.NXN8F53ugrP11pK2Dj3D92s42tk');

bot.on("message", msg => {

      // Command /help
     if (msg.content.startsWith(Prefix + "help")) {
      msg.author.send("```Liste des commandes : \n\n /version  | Version du bot \n /help | Toute les commandes \n /boulanger | Phrase de Panthéon \n /ban | Bannir des gens mais pour l'instant pour la déco \n /cancer | seulement pour l'administration !!! \n .kick | pour kicker les gens bande d'illetrer \n .ban | comme sont nom l'indique il ban les gens gros con  ```");
      console.log("Command executed: /help")
    }
    // Command /version
    if (msg.content.startsWith(Prefix + "version")) {
      msg.author.send("``` Bot Panthéon \n Créateur : Profcreep |v.0.0.2```");
      console.log("Command executed : /version")
    }

});


bot.on('message', message => {
    if (message.content === "/boulanger"){
        message.reply("** Mon métier enfaite j'ai toujours voulu devenir boulanger !**");
        console.log('pantheon');
    }
});

bot.on('message', message => {
    if (message.content === "/ban"){
        message.reply(`** Désoler je veux bien tester mais ma lance n'atteins pas encore le ban **`);
        console.log('ban');
    }
});

bot.on('message', message => {
  if (message.content === "octopussy"){
      message.reply("OMG un BRYAN sauvage apparaît (YAAAAAAAA)");
      console.log('Octopussy');
  }
});



bot.on('message', message => {
  let command = message.content.split(" ")[0]
  const args = message.content.slice(prefix.length).split(/ +/);
  command = args.shift().toLowerCase();

  if (command === "kick") {
    if(!message.member.hasPermission(`KICK_MEMBERS`)){
    
      message.author.send("Tu n'as pas la permission du Saint Fourneau pour faire cette commande.").catch(console.error);
    }
    if(message.mentions.users.size ===0) {
        return message.author.send("merci de mettre le nom aussi du gland je suis pas dieu -_-").catch(console.error);
    }
    let kickMember = message.guild.member (message.mentions.users.first());
    if(!kickMember) {
      return message.author.send("Cet Utilisateur ne se trouve pas dans la base se Spec-Games")
    }
    if(!message.member.hasPermission(`KICK_MEMBERS`)) {
      return message.reply("Tu n'as pas la Permission de Kicker les Joueurs ....").catch(console.error);
    }
    kickMember.kick().then(member => {
      message.reply(`${member.user.username} a été expluser avec succès https://i.makeagif.com/media/5-17-2015/8mrPwo.gif`).catch(console.error);
    message.guild.channels.find("name", "discution-temporaire").send(`**${member.username} a été expluser par **${message.authpr.username}https://i.makeagif.com/media/5-17-2015/8mrPwo.gif**`)
    }).catch(console.error)
  
  }

 if (command === "ban") {
  if(!message.member.hasPermission("BAN_MEMBERS")){
   return message.reply("** Désoler je veux bien tester mais ma lance n'atteins pas encore le ban **");
  }
  const member = message.mentions.members.first();
  if (!member) message.author.send("merci de mentionner l'utilisateur BAKA!!!");
  member.ban().then(member => {
    message.reply(`${member.user.username} à été ban avec brio !!! http://pa1.narvii.com/5783/9eba64b8fa3e198db2e124c223b038b468299120_00.gif`).catch(console.error);
    message.guild.channel.find("name", "discution-temporaire").send(`**${member.user.username}** a fait un 1vs1 avec **${message.author.username}**http://pa1.narvii.com/5783/9eba64b8fa3e198db2e124c223b038b468299120_00.gif`)
  }).catch(console.error);
}})


