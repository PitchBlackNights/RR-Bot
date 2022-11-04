const { SlashCommandBuilder } = require('discord.js');
const a = "808834035991576608";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('playmemesong')
		.setDescription('Prank your friends with a meme song')
		.addStringOption(option =>
			option.setName('song')
				.setDescription('The meme song you want to play')
				.setRequired(false)),
	async execute(interaction) {
		await interaction.reply('Send this command `m!play ' + interaction.options.getString('song') + '`\nMessages will be deleted in 5 seconds');
		setTimeout(() => {
			console.log('delet');
		}, 5000);
	},
};