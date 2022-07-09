module.exports = {
  name: 'live',
  permissions: ['ADMINISTRATOR'],
  description:
    'notifys people to watch new and upcoming streams(for staff only)',
  usage: `${process.env.PREFIX}live <time before being live>`,
  execute(client, message, args, discord) {
    const wrongstream =
      'please do not try and use this command as you are not permitted. please speak to a moderator to see if you need access.';

    channel = client.channels.cache.get('820669074417516584');

    if (!message.member.roles.cache.has('829359122759286825'))
      message.author.send(wrongstream);
    else channel = client.channels.cache.get('820669074417516584');
    channel.send(
      `<@&820668104866529353> xomqwolfiebx will go live in ${args[0]} minutes \nwatch him at https://xomqwolfiebx.ddns.net`
    );
  },
};
