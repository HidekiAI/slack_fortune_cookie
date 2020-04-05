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

//					await web.chat.postMessage({
//						channel: '#bot-tests',
//						blocks: [
//							{
//								"type": "section",
//								"text": {
//									"type": "mrkdwn",
//									"text": `${motd}`
//								}
//							},
//						]
//					});
					
//					await web.chat.postMessage({
//						channel: '#bot-tests',
//						blocks: [
//							{
//								"type": "section",
//								"text": {
//									"type": "mrkdwn",
//									"text": `${motd}`
//								}
//							},
//							{
//								"type": "divider"
//							},
//							{
//								"type": "section",
//								"text": {
//									"type": "mrkdwn",
//									"text": "This is a sentence with some `inline *code*` in it. "
//								}
//							},
//							{
//								"type": "divider"
//							},
//							{
//								"type": "section",
//								"text": {
//									"type": "mrkdwn",
//									"text": "```This is a code block\nAnd it's multi-line```"
//								}
//							},
//							{
//								"type": "divider"
//							},
//							{
//								"type": "actions",
//								"elements": [
//									{
//										"type": "button",
//										"text": {
//											"type": "plain_text",
//											"text": "Button",
//											"emoji": true
//										},
//										"value": "click_me_123"
//									}
//								]
//							},
//							{
//									"type": "context",
//									"elements": [
//										{
//											"type": "mrkdwn",
//											"text": "Last updated: Jan 1, 2019"
//										}
//									]
//							},
//							{
//								"type": "section",
//								"fields": [
//									{
//										"type": "plain_text",
//										"text": "1. *this is plain_text text*",
//										"emoji": true
//									},
//									{
//										"type": "plain_text",
//										"text": "2. *this is plain_text text*",
//										"emoji": true
//									},
//									{
//										"type": "plain_text",
//										"text": "3. *this is plain_text text*",
//										"emoji": true
//									},
//									{
//										"type": "plain_text",
//										"text": "4. *this is plain_text text*",
//										"emoji": true
//									},
//									{
//										"type": "plain_text",
//										"text": "5. *this is plain_text text*",
//										"emoji": true
//									}
//								]
//							},
//							{
//								"type": "section",
//								"text": {
//									"type": "mrkdwn",
//									"text": "Pick one or more items from the list"
//								},
//								"accessory": {
//										"type": "multi_static_select",
//										"placeholder": {
//											"type": "plain_text",
//											"text": "Select items",
//											"emoji": true
//										},
//										"options": [
//											{
//												"text": {
//													"type": "plain_text",
//													"text": "Choice 1",
//													"emoji": true
//												},
//												"value": "value-0"
//											},
//											{
//												"text": {
//													"type": "plain_text",
//													"text": "Choice 2",
//													"emoji": true
//												},
//												"value": "value-1"
//											},
//											{
//												"text": {
//													"type": "plain_text",
//													"text": "Choice 3",
//													"emoji": true
//												},
//												"value": "value-2"
//											}
//										]
//									}
//							},
//							{
//								"type": "section",
//										"text": {
//												"type": "mrkdwn",
//												"text": "Pick an item from the dropdown list"
//										},
//										"accessory": {
//												"type": "static_select",
//												"placeholder": {
//														"type": "plain_text",
//														"text": "Select an item",
//														"emoji": true
//												},
//												"options": [
//														{
//																"text": {
//																		"type": "plain_text",
//																		"text": "Choice 1",
//																		"emoji": true
//																},
//																"value": "value-0"
//														},
//														{
//																"text": {
//																		"type": "plain_text",
//																		"text": "Choice 2",
//																		"emoji": true
//																},
//																"value": "value-1"
//														},
//														{
//																"text": {
//																		"type": "plain_text",
//																		"text": "Choice 3",
//																		"emoji": true
//																},
//																"value": "value-2"
//														}
//												]
//										}
//							},
//							{
//										"type": "section",
//										"text": {
//												"type": "mrkdwn",
//												"text": "This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>"
//										}
//							},
//							{
//										"type": "section",
//										"text": {
//												"type": "mrkdwn",
//												"text": "Take a look at this image."
//										},
//										"accessory": {
//												"type": "image",
//												"image_url": "https://api.slack.com/img/blocks/bkb_template_images/palmtree.png",
//												"alt_text": "palm tree"
//										}
//							},
//							{
//										"type": "section",
//										"text": {
//												"type": "mrkdwn",
//												"text": "This block has an overflow menu."
//										},
//										"accessory": {
//												"type": "overflow",
//												"options": [
//														{
//																"text": {
//																		"type": "plain_text",
//																		"text": "Option 1",
//																		"emoji": true
//																},
//																"value": "value-0"
//														},
//														{
//																"text": {
//																		"type": "plain_text",
//																		"text": "Option 2",
//																		"emoji": true
//																},
//																"value": "value-1"
//														},
//														{
//																"text": {
//																		"type": "plain_text",
//																		"text": "Option 3",
//																		"emoji": true
//																},
//																"value": "value-2"
//														},
//														{
//																"text": {
//																		"type": "plain_text",
//																		"text": "Option 4",
//																		"emoji": true
//																},
//																"value": "value-3"
//														}
//												]
//										}
//							},
//							{
//										"type": "section",
//										"text": {
//												"type": "mrkdwn",
//												"text": "Pick a date for the deadline."
//										},
//										"accessory": {
//												"type": "datepicker",
//												"initial_date": "1990-04-28",
//												"placeholder": {
//														"type": "plain_text",
//														"text": "Select a date",
//														"emoji": true
//												}
//										}
//							},
//							{
//								"type": "divider"
//							},
//							{
//										"type": "section",
//										"text": {
//												"type": "plain_text",
//												"text": "This is a plain text section block.",
//												"emoji": true
//										}
//							},
//							{
//								"type": "divider"
//							},
//							{
//										"type": "image",
//										"title": {
//												"type": "plain_text",
//												"text": "Example Image",
//												"emoji": true
//										},
//										"image_url": "https://api.slack.com/img/blocks/bkb_template_images/goldengate.png",
//										"alt_text": "Example Image"
//							},
//							{
//								"type": "divider"
//							},
//							{
//								"type": "context",
//								"elements": [
//										{
//												"type": "mrkdwn",
//												"text": "Last updated: Jan 1, 2019"
//										}
//								]
//							},
//							{
//								"type": "divider"
//							},
//							{
//								"type": "actions",
//								"elements": [
//										{
//												"type": "button",
//												"text": {
//														"type": "plain_text",
//														"text": "Button",
//														"emoji": true
//												},
//												"value": "click_me_123"
//										}
//								]
//							},
//							{
//								"type": "divider"
//							},
//							{
//								"type": "section",
//								"text": {
//										"type": "plain_text",
//										"text": "This is a plain text section block.",
//										"emoji": true
//								}
//							}
//						]
//					});

			} catch (error) {
					console.log(error);
			}

			console.log('Message posted!');
	})();
});

