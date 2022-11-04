const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rrplay')
		.setDescription('Play some Russian Roulette with your friends')
		.addUserOption(option =>
			option.setName('friend1')
				.setDescription('First Friend')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};