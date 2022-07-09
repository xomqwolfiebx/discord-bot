module.exports = {
  name: 'ban',
  Permissions: ['BAN_MEMBERS'],
  description:
    'bans people if staff is not satisfied with a certain users action (for staff only)',
  usage: `${process.env.PREFIX}ban <user you want to ban from the server> <reason for banning the user>`,
  async execute(client, message, args) {
    const { MessageEmbed } = require('discord.js');

    if (!message.member.roles.cache.has('811315076492427304')) {
      return message.author.send('you do not have access to this command.');
    } else {
      let member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!member) return message.channel.send('please specify a user to ban!');
      if (member.roles.highest.position > message.member.roles.highest.position)
        return message.channel.send(
          'You cannot ban someone with more power than you!'
        );
      let reason = args.slice(1).join(' ');
      if (!reason) {
        reason = 'No reason provided';
      }

      const BanEmbed = new MessageEmbed()
        .setColor('RED')
        .setTitle(`ban`)
        .addFields(
          { name: 'offender', value: `${member}` },
          { name: 'reason', value: `${reason}` },
          { name: 'staff responsible', value: `${message.author}` }
        )
        .setTimestamp();

      member.ban({ reason: reason, days: 7 });
      message.channel.send(
        `**${member.user.tag}** has been banned for ${reason}`
      );
      channel = client.channels.cache.get('811343375893528586');
      channel.send(BanEmbed);
    }
  },
};
