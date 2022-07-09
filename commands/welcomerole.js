module.exports = {
  name: 'welcomerole',
  permissions: ['ADMINSTRATOR'],
  description: 'sets up a reaction role (for staff only)',
  usage: `${process.env.PREFIX}welcomerole`,
  async execute(client, message, args, Discord) {
    if (!message.member.roles.cache.has('811315076492427304')) {
      return message.author.send('you do not have access to this command.');
    } else {
      const Channel = '811323176738095146';
      const wolfpack = message.guild.roles.cache.find(
        (role) => role.name === 'wolfpack'
      );

      const welcomeroleemoji = '✅';

      let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('verify')
        .setDescription(`please accept the rules by reacting with ✅`);

      let MessageEmbed = await message.channel.send(embed);
      MessageEmbed.react(welcomeroleemoji);

      client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch;
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == Channel) {
          if (reaction.emoji.name === welcomeroleemoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.add(wolfpack);
          }
        } else {
          return;
        }
      });

      client.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch;
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == Channel) {
          if (reaction.emoji.name === welcomeroleemoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.remove(wolfpack);
          }
        } else {
          return;
        }
      });
    }
  },
};
