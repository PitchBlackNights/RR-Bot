module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`\n\n\x1b[1m\x1b[32mReady!\x1b[0m Logged in as ${client.user.tag}\n\n`);
	},
};