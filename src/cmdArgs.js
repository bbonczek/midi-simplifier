
const cmdArgs = {
    build: (cmdOptions) => {

        if (!cmdOptions.target) {
            let path = cmdOptions.source.split('/');
 
            path[path.length - 1] = path[path.length - 1].replace('.mid', '_simple.mid');
            cmdOptions.target = path.join('/');
        }

        if (!cmdOptions.originaljson) {
            let path = cmdOptions.source.split('/');
        
            path[path.length - 1] = path[path.length - 1].replace('.mid', '_original.json');
            cmdOptions.originaljson = path.join('/');
        }

        if (!cmdOptions.simplifiedjson) {
            let path = cmdOptions.source.split('/');

            path[path.length - 1] = path[path.length - 1].replace('.mid', '_simplified.json');
            cmdOptions.simplifiedjson = path.join('/');
        }
    }
}

module.exports = cmdArgs;