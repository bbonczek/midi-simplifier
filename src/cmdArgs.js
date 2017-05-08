
const cmdArgs = {
    build: (cmdOptions, toolName) => {
        if (!cmdOptions.target) {
            let path = cmdOptions.source.split('/');
 
            path[path.length - 1] = path[path.length - 1].replace(
                (toolName == 'midi2midi') ? '.mid' : '.json',
                '_simple.mid'
            );
            cmdOptions.target = path.join('/');
        }

        if (!cmdOptions.simplifiedjson) {
            let path = cmdOptions.source.split('/');

            path[path.length - 1] = path[path.length - 1].replace(
                (toolName == "midi2midi") ? '.mid' : '.json',
                '_simplified.json'
            );
            cmdOptions.simplifiedjson = path.join('/');
        }

        if (toolName == "midi2midi" && !cmdOptions.originaljson) {
            let path = cmdOptions.source.split('/');
        
            path[path.length - 1] = path[path.length - 1].replace('.mid', '_original.json');
            cmdOptions.originaljson = path.join('/');
        }
    }        
}

module.exports = cmdArgs;