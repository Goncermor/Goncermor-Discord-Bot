 const main = require("./main.js");
 module.exports = class {
     static Logger = log.Plugin; 
     static addCommands(commands) {
        commands.forEach((command) => {
            if (!main.commands.has(command))
            {
                main.commands.set(command);
            }
        });
        return 0;
    }
 }