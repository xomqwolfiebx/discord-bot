module.exports = {
  name: 'clear',
  permissions: ['MANAGE_MESSAGES'],
  description: 'clears messages',
  usage: `${process.env.PREFIX}clear <amount of messages you want to clear>`,
  async execute(client, message, args) {
    if (!message.member.roles.cache.has('811315076492427304'))
      return message.author.send('you do not have access to this command.');
    else if (!args[0])
      return message.reply(
        'please enter the amount of messages you want to clear'
      );
    if (isNaN(args[0])) return message.reply('please enter a real number');
    if (args[0] > 100)
      return message.reply(
        'you cannot clear that amount of messages. please try a lower amount'
      );
    if (args[0] < 1) return message.reply('you must clear at least 1 message');
    await message.channel.messages
      .fetch({ limit: args[0] })
      .then((messages) => {
        message.channel.bulkDelete(messages);
      });
  },
};
