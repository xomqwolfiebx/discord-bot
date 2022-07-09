module.exports = {
  name: 'reaction_role',
  permissions: ['ADMINSTRATOR'],
  description: 'sets up a reaction role(for staff only)',
  usage: `${process.env.PREFIX}reaction_role`,
  async execute(client, message, args, Discord) {
    if (!message.member.roles.cache.has('811315076492427304')) {
      return message.author.send('you do not have access to this command.');
    } else {
      const Channel = '820678880816791593';
      const giveawayRole = message.guild.roles.cache.find(
        (role) => role.name === 'giveaway ping'
      );
      const streamRole = message.guild.roles.cache.find(
        (role) => role.name === 'stream'
      );

      const giveawayemoji = '🟢';
      const streamemoji = '⚪';

      let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('pick the roles you want to get')
        .setDescription(
          `React with 🟢 to get notified of new giveaways \nreact with ⚪ to get notified every time @xomqwolfiebx will go live `
        );

      let MessageEmbed = await message.channel.send(embed);
      MessageEmbed.react(giveawayemoji);
      MessageEmbed.react(streamemoji);

      client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch;
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == Channel) {
          if (reaction.emoji.name === giveawayemoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.add(giveawayRole);
          }
          if (reaction.message.channel.id == Channel) {
            if (reaction.emoji.name === streamemoji) {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add(streamRole);
            }
          } else {
            return;
          }
        }
      });

      client.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch;
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == Channel) {
          if (reaction.emoji.name === giveawayemoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.remove(giveawayRole);
          }
          if (reaction.message.channel.id == Channel) {
            if (reaction.emoji.name === streamemoji) {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(streamRole);
            }
          } else {
            return;
          }
        }
      });
    }
  },
};
