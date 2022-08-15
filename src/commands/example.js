//    ______
//   / ____/___  ____  ________  _________ ___  ____  _____
//  / / __/ __ \/ __ \/ ___/ _ \/ ___/ __ `__ \/ __ \/ ___/
// / /_/ / /_/ / / / / /__/  __/ /  / / / / / / /_/ / /
// \____/\____/_/ /_/\___/\___/_/  /_/ /_/ /_/\____/_/

// Command plugin example

module.exports = {
    Command: "example",                 // the command
    Aliases: ["ex", "expl"],            // aliases for the command (alternative commands)
    Description: "example description", // description of the command
    Value: "example",                   // value name if any 
    Slash: {
        CreateCommand: true,            // true if you want to make a / command
        Type: 3,                        // type of value (0 for none)
        Required: true                  // if the value is required
    },

    prefixrun: async (client, message, args) => {
        // place here the code for the command with prefix
        message.reply("this is an example");
    },

    slashrun: async (client, interaction, args) => {
        // place here the code for the command with slash
        interaction.reply("this is an example");
    },
};


// To know how to write code for this https://discord.js.org/docs#/docs/discord.js/main/general/welcome
