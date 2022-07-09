const { MessageEmbed } = require('discord.js');
const prefix = process.env.PREFIX;
module.exports = {
  name: 'help',
  Permissions: [],
  usage: `${prefix}help / ${prefix}help <command you want to know about>`,
  description: 'gives a list of commands you can run with live reminder bot',

  execute(client, message, args, discord) {
    if (!args[0]) {
      const embed = new MessageEmbed()
        .setColor('BLACK')
        .setTitle('commands you can run with live reminder bot');

      client.commands.forEach((command) => {
        embed.addField(command.name, command.description, command.usage);
      });
      message.channel.send(embed);
    } else {
      const command = client.commands.has(args[0]);

      if (command) {
        const cmd = client.commands.get(args[0]);
        const embed = new MessageEmbed()
          .setTitle(`infomation about ${cmd.name}`)
          .setDescription(
            `description: ${cmd.description}\nusage:${cmd.usage}`
          );
        message.channel.send(embed);
      } else {
        message.channel.send(
          `That command does not exist please use ${prefix}help to get a list of commands you can use`
        );
      }
    }
  },
};
