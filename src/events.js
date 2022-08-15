module.exports = (client, logger, config, commands) => {
    // activates discord.js debug event if the program is started with --debug flag
    if (process.argv.includes("--debug")){client.on('debug', (debug) => {logger.Discord.debug(debug)});logger.App.info("Loaded DEBUG event");}
    client.on('error', (e) => {logger.Discord.error(e.message)});
    client.on('warn', (info) => {logger.Discord.warn(info)});
    client.on('ready', () => {
        logger.Discord.info("Discord client ready");
        logger.Discord.info(`Logged in as ${client.user.username}#${client.user.discriminator} (${client.user.id})`);
        client.user.setPresence({activities: [{ name: config.Presence.Default.Name,type: config.Presence.Default.Type}],status: config.Presence.Default.Status});
        logger.Discord.info(`Activity set (${config.Presence.Default.Status}, ${config.Presence.Default.Type}, ${config.Presence.Default.Name})`);
    });
    client.on('messageCreate', async (message) => {
        // check if the message is the bot
        if (message.author.bot) return;
        logger.Discord.info(`Message created ${message.author.username}#${message.author.discriminator} -> ${message.channelId}`);
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
            if (commands.has(message.content))
            { commands.get(message.content.replace(config.Prefix,'')).prefixrun(client, message, " args " ,logger);
            } else
            message.reply(config.Responses.CommandNotFound);
        }
    });
    process.on('SIGINT', () => {
        logger.Discord.info("Logged out");
        client.destroy();
        logger.App.info("Stopping...");
        process.exit();
    });
    logger.App.info("Events loaded");
}