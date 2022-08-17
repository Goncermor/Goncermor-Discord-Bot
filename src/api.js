 const main = require("./main.js");
 const logger = require("./logger.js");
 module.exports = class {
     static Logger = logger.Plugin; 
     static addCommands(commands) {
        commands.forEach((command) => {
            if (!main.commands.has(command))
            {
                main.commands.set(aliase, this.CommandObject);
            }
        });
        return 0;
    }
 }