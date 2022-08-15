console.clear();
process.stdout.write("\033]0;Goncermor Discord Bot\007");
console.log('\x1b[36m%s\x1b[0m', "    ______\n   / ____/___  ____  ________  _________ ___  ____  _____\n  / / __/ __ \\/ __ \\/ ___/ _ \\/ ___/ __ `__ \\/ __ \\/ ___/\n / /_/ / /_/ / / / / /__/  __/ /  / / / / / / /_/ / /\n \\____/\\____/_/ /_/\\___/\\___/_/  /_/ /_/ /_/\\____/_/\n");
console.log('\x1b[0m', " Version: 1.0.0\n");


const logger = require("./logger.js");
const config = require("./config.js");
const { Collection, Client, MessageEmbed ,  GatewayIntentBits } = require("discord.js");
const client = new Client(
    { 
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.DirectMessages,
            
        ]
    }
);

const fs = require("fs");
const path = require("path");
const commands = new Map();

let CDIR = path.join(__dirname, "..", "src/plugins");
fs.readdir(CDIR, async (err, files) => {
  if (err)
    logger.App.error(err);
  else files.forEach( async(file) => {
    let cmd = require(CDIR + "/" + file);
    if (!commands.has(cmd.Command))
    {
      commands.set(cmd.Command, cmd);
      cmd.api.CommandObject = cmd;
      cmd.onload();
    }
    else {
      logger.App.info("Failed loading plugin");
    }
  });
});


require("./events.js")(client, logger, config, commands);
client.login(config.Token);
