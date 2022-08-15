const main = require("./main.js");
const logger = require("./logger.js");
module.exports = {
    Client: main.client,
    Logger: logger.Plugin,
    Commands: {
        unload: async (command) => {
            if (main.commands.has(command))
            {
                main.commands.get("command").Aliases.forEach(aliase => {
                    main.commands.delete(aliase);
                });;
                main.commands.delete(command)
                return 0;
            } else return 1;  
        },
        load: async (command) => {
            // load code
        },
        reload: async (command) => {
            // reload code
        },
        addAliases: async (aliases) => {
                aliases.forEach((aliase) => {
                    if (!main.commands.has(aliase))
                    {
                        main.commands.set(aliase, this.CommandObject);
                    }
                });
                return 0;
        },
    },
    CommandObject: null
}