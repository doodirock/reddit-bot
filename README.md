# Reddit bot
A bot ripped off the guide bot work built on [GuidBot](https://github.com/AnIdiotsGuide/guidebot)

## Requirements

- `git` command line ([Windows](https://git-scm.com/download/win)|[Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)|[MacOS](https://git-scm.com/download/mac)) installed
- `node` [Version 8.0.0 or higher](https://nodejs.org)
- The node-gyp build tools. This is a pre-requisite for Enmap, but also for a **lot** of other modules. See [The Enmap Guide](https://enmap.evie.codes/install#pre-requisites) for details and requirements for your OS. Just follow what's in the tabbed block only, then come back here!

You also need your bot's token. This is obtained by creating an application in
the Developer section of discordapp.com. Check the [first section of this page](https://anidiots.guide/getting-started/the-long-version.html) 
for more info.

## Downloading

In a command prompt in your projects folder (wherever that may be) run the following:

`git clone https://github.com/doodirock/reddit-bot`

Once finished: 

- In the folder from where you ran the git command, run `cd reddit-bot` and then run `npm install`
- **If you get any error about python or msibuild.exe or binding, read the requirements section again!**
- Run `node setup.js` to generate a proper configuration file and settings.

## Starting the bot

To start the bot, in the command prompt, run the following command:
`node index.js`
