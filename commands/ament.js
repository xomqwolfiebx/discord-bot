module.exports = {
  name: 'ament',
  Permissions: ['MANAGE_MESSAGES'],
  description: 'sends an announcement message to #announcement(for staff only)',
  usage: `${process.env.PREFIX}ament <message you want to send to announcment channel>`,
  execute(client, message, args) {
    const channel = client.channels.cache.get('878033274302263336');

    if (!message.member.roles.cache.has('811315076492427304')) {
      message.author.send(
        `you do not have the right permissions to run this command`
      );
    } else {
      let announcement = args.slice(0).join(' ');
      channel.send(announcement);
    }
  },
};
