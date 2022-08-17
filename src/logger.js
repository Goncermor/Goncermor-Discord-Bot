const log4js = require("log4js");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/lastest.log" }, stdout: { type: "console" } },
    categories: { 
        Discord: { appenders: ["file","stdout"], level: "ALL" }, 
        Volcano: { appenders: ["file","stdout"], level: "ALL" }, 
        App: { appenders: ["file","stdout"], level: "ALL" }, 
        Plugin: { appenders: ["file","stdout"], level: "ALL"},
        PluginLoader: { appenders: ["file","stdout"], level: "ALL"},
        default: { appenders: ["file","stdout"], level: "ALL"}
    }
});
module.exports.Discord = log4js.getLogger("Discord");
module.exports.App = log4js.getLogger("App");
module.exports.Plugin = log4js.getLogger("Plugin");
module.exports.PluginLoader = log4js.getLogger("PluginLoader");