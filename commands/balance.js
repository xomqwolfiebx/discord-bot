const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'balance',
  Permissions: [''],
  aliases: ['bal', 'bl'],
  description: 'shows users balance',
  execute(client, message, args, Discord, profileData) {
    const embed = new MessageEmbed()
      .setTitle(`${message.author.username}`)
      .setDescription(
        `wallet bal:${profileData.coins}\nbank bal: ${profileData.bank}`
      )
      .setThumbnail(message.author.avatarURL());

    message.channel.send(embed);
  },
};
