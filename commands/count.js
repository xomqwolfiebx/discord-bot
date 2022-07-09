module.exports = {
  name: 'count',
  permissions: [],
  description: 'tells you the amount of people in this server',
  execute(client, message, args, discord) {
    message.channel.send(
      `Total members:\n${message.guild.memberCount}\nbots\n${message.guild.bot}`
    );
  },
};
