const fs = require("fs");
const logger = require("../logger.js");
module.exports = class {
    #plugins = new Map();
    static LoadAllPlugins() {
        fs.readdir(__dirname + "\\plugins", (err, files) => {
            if (err) 
            {
                logger.PluginLoader.error("Error loading ");
            } else
            files.forEach( (file) => {
                let plugin = require(__dirname + "\\plugins\\" + file);
                // check if plugin has errors/can be loaded
                if (!plugin.metadata ||
                    !plugin.metadata.Name || 
                    !plugin.metadata.Description || 
                    !plugin.metadata.Author || 
                    !plugin.metadata.Version || 
                    !plugin.metadata.PluginFunctions ||
                    !plugin.metadata.API) {
                        logger.PluginLoader.error(`Can't load ${file}, metadata is broken`);
                        return;
                    }
                if (!plugin.plugin) {
                    logger.PluginLoader.error(`Can't load ${file}, plugin structure broken`);
                    return;
                }
                plugins.set(plugin.metadata.replace(' ','_'), plugin)
                plugin.plugin.load();
               
            });
        });
    }
    static UnloadAllPlugins() {



    }
    static LoadPlugin() {



    }
    static ReloadPlugin() {


        
    }
}





//   
//   const commands = new Map();
//   
//   let CDIR = path.join(__dirname, "..", "src/plugins");
//   fs.readdir(CDIR, async (err, files) => {
//     if (err)
//       logger.App.error(err);
//     else files.forEach( async(file) => {
//       let cmd = require(CDIR + "/" + file);
//       if (!commands.has(cmd.Command))
//       {
//         commands.set(cmd.Command, cmd);
//         cmd.Api.CommandObject = cmd;
//         cmd.onload();
//       }
//       else {
//         logger.App.info("Failed loading plugin");
//       }
//     });
//   });
//   