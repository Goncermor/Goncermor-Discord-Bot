module.exports = (client, config) => {
    // activates discord.js debug event if the program is started with --debug flag
    if (process.argv.includes("--debug")){client.on('debug', (debug) => {log.Discord.debug(debug)});log.App.info("Loaded DEBUG event");}
    client.on('error', (e) => {log.Discord.error(e.message)});
    client.on('warn', (info) => {log.Discord.warn(info)});
    client.on('ready', () => {
        log.Discord.info("Discord client ready");
        log.Discord.info(`Logged in as ${client.user.username}#${client.user.discriminator} (${client.user.id})`);
        client.user.setPresence({activities: [{ name: config.Presence.Default.Name,type: config.Presence.Default.Type}],status: config.Presence.Default.Status});
        log.Discord.info(`Activity set (${config.Presence.Default.Status}, ${config.Presence.Default.Type}, ${config.Presence.Default.Name})`);
    });
    client.on('messageCreate', async (message) => {
        // check if the message is the bot
        if (message.author.bot) return;
        log.Discord.info(`Message created ${message.author.username}#${message.author.discriminator} -> ${message.channelId}`);
        if (message.content.startsWith('!'))
        {
            // check if the command is internal
            switch (message.content.replace(config.Prefix,''))
            {
                case "help":
                    {
                        message.reply("This command shows help with the commands");
                        return;
                    }
                case "ping":
                    {
                        message.reply("Pong!");
                        return;
                    }
            }
            // check in loaded commands
            
            message.reply(config.Responses.CommandNotFound);
        }
    });
    process.on('SIGINT', () => {
        log.Discord.info("Logged out");
        client.destroy();
        log.App.info("Stopping...");
        process.exit();
    });
    log.App.info("Events loaded");
}