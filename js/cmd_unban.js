const Discord = require("discord.js");

const Perm = require("./core_permissions.js");
const color = require('./core_colors.js')
const config = require('./config.json');

module.exports.run = async (bot, message, args) => {
	await message.delete(0).catch(O_o=>{})
	var channel = message.guild.channels.find(ch => ch.name === config.staffNotify);
  let user = args[1];
  if (!message.member.roles.some(Perm.isAdmin)) {
  		message.channel.send(new Discord.RichEmbed()
  		.setTitle("ERROR!")
  	  .setDescription("You are not an Admin!")
  		.setColor(color.red)).then(message => {message.delete(5000).catch(O_o=>{})})
	} else {
		let reason = args.slice(2).join(' ');
		if (!reason) {
				message.channel.send(new Discord.RichEmbed()
				.setTitle("ERROR!")
			  .setDescription(`Reason for unban is required. USAGE: !unban @Name Reason`)
				.setColor(color.red)).then(message => {message.delete(10000).catch(O_o=>{})});
		} else {
			if (user.unban) {
					let embed = new Discord.RichEmbed()
					.setTitle("ADMIN NOTICE")
				  .setDescription(`${message.author.toString()} has UNBANNED ${user.toString()} FOR: "${reason}"`)
					.setColor(color.matRed);
					message.channel.send(embed).then(message => {message.delete(10000).catch(O_o=>{})});
					channel.send(embed);
			} else {
					message.channel.send(new Discord.RichEmbed()
					.setTitle("CAUGHT ERROR!")
				  .setDescription(`${err}\n\n If this error persists then contact @Blaze#0666 or @Luke SwagWalker#1460`)
					.setColor(color.red)).then(message => {message.delete(15000).catch(O_o=>{})});
			}
		}
	}
}