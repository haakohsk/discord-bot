const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
	client.user.setPresence({
		activities: [{
			name: `with my toys`, 
			type: `PLAYING`
		}],
		status: `idle`
	});
});


client.on('messageCreate', (message) => {

	let quotes = [
		"Insert quote here",
		"Insert quote here",
		"Insert quote here",
		"Insert quote here"
	];

	let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];


	if (message.content.includes('someWord') || message.content.includes('someWord')) {
		message.channel.send({
		  files: [{
		    attachment: 'path/to/image',
		    name: 'image.jpg'
		  }]
		})
	} else if (message.content.includes('Landon')) {
		message.channel.send('Slip and land on deez nutz! :peanuts:')
	} else if (message.content.includes('kjøh') || message.content.includes('Kjøh')) {
		message.channel.send('KJØH!')
	} else if (message.content === '!coinflip') {
		message.channel.send(Math.random() >= 0.5 ? "Heads" : "Tails")
	} else if (message.content === "!quote") {
		message.channel.send(randomQuote)
	} else if (message.content === "!vimhelp") {
		message.channel.send("https://vim.rtorr.com/ <- Cheat sheet VIM")
	}
});

client.login('token');
