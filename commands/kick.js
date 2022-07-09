module.exports = {
  name: 'kick',
  permissions: ['KICK_MEMBERS'],
  description:
    'kicks people if staff is not satisfied with a certain user(for staff only)',
  usage: `${process.env.PREFIX}kick <user you want to kick from the server> <reason for kick>`,

  execute(client, message, args, discord) {
    const { MessageEmbed } = require('discord.js');
    if (!message.member.roles.cache.has('811315076492427304'))
      return message.channel.send(
        'You do not have permission to execute this command!'
      );
    let member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!member) return message.channel.send('please specify a user to kick!');
    let reason = args.slice(1).join(' ');
    if (member.roles.highest.position > message.member.roles.highest.position)
      return message.channel.send(
        'You cannot ban someone with more power than you!'
      );
    if (!reason) {
      reason = 'No reason provided';
    }

    const kickEmbed = new MessageEmbed()
      .setColor('RED')
      .setTitle(`kick`)
      .addFields(
        { name: 'offender', value: `${member}` },
        { name: 'reason', value: `${reason}` },
        { name: 'staff responsible', value: `${message.author}` }
      )
      .setTimestamp();

    member.kick(reason);
    channel = client.channels.cache.get('811343375893528586');
    channel.send(kickEmbed);
  },
};
