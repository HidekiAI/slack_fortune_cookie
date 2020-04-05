var fs = require("fs");
const { WebClient } = require('@slack/web-api');
const channel = process.env._CHANNEL ;

fs.readFile("motd.txt", function(err, buf) {
	const motd = "```" + buf.toString() + "```";
	console.log(`${motd}`);
	// Create a new instance of the WebClient class with the token read from your environment variable
	const web = new WebClient(process.env.SLACK_TOKEN);

	(async () => {

			try {
					// Use the `chat.postMessage` method to send a message from this app
					await web.chat.postMessage({
//						channel: '#general',
						channel: channel,
						text: `${motd}`,
					});

			} catch (error) {
					console.log(error);
			}

			console.log('Message posted!');
	})();
});

