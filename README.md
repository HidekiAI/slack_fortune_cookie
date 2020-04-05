# slack_fortune_cookie
cron script to slack message (chat.postMessage) fortune | cowsay to the channel

# Requirement:
* Linux with cron daemon (i.e. Anachron, etc)
* Nodejs
* cowsay
* fortune

# Installation:
1. Edit env.conf.sh file and set all the environment
   read the comments carefully
2. Open Slack
3. Create and/or go to #channel
4. '/invite @YourBotName' associated to SLACK_TOKEN
5. run Linux command `$ crontab -e`
	* add line `*/30 * * * * 	cd /dir/where/source/exits && /dir/where/source/exists/run.sh `
	* above example will cron every 30th minute
# Test:
* Assuming you're on Linux and Node.js is installed
* go to directory where 'run.sh' (index.js) resides
* either type `node index.sh` or `./run.sh`
* If all goes well, you will see a `fortune | cowsay` message on your slack channel

![GitHub Logo](/slack_fortune_cookie.png)
Format: ![Alt Text](url)
