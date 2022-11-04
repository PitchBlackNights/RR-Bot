module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;


		// fetch the command, and see if it is valid
		const command = interaction.client.commands.get(interaction.commandName);
		if (!command) return;

		// execute the command, if err then don't
		console.log(`'${interaction.user.tag}' in '#${interaction.channel.name}' triggered '/${interaction.commandName}'`);
		try {
			// console.log(command);
			await command.execute(interaction);
		}
		catch (error) {
			console.log(`\x1b[1m\x1b[31m └── ${error}\x1b[0m`);
			console.trace();
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};