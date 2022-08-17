// Plugin example

module.exports.metadata = {
    // plugin metadata
    Name: "Example plugin",
    Description: "example description", 
    Author: "Goncermor",  
    Version: "1.1",   
    PluginFunctions: ["COMMAND","API"],
    API: 1.0
}
module.exports.plugin = class {
    /*
    Executed on the plugin load 
    Return false if the plugin fails and it will not be loaded
    */
    static load() {
        API.Logger.info("Example plugin v1.1");
        
        return true;
    }
    // Executes when the plugin is being unloaded
    static unload() {
        API.Logger.info("Example plugin v1.1 - Goodbye");
    }
};
