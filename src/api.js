const main = require("./main.js");
const logger = require("./logger.js");
module.exports = {
    Client: main.client,
    Logger: logger.Plugin,
    Commands: {
        List: main.commands.keys(),
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
            if (main.commands.has(command))
            {
                main.commands.get("command").Aliases.forEach(aliase => {
                    main.commands.delete(aliase);
                });
                main.commands.delete(command)
                return 0;
            } else return 1;  
        },
        reload: async (command) => {
            if (main.commands.has(command))
            {
                main.commands.get("command").Aliases.forEach(aliase => {
                    main.commands.delete(aliase);
                });;
                main.commands.delete(command)
                return 0;
            } else return 1;  
        }
    }
}