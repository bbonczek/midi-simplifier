var fs = require("fs");


const file = {
    openMidi: (path) => {

        return new Promise((resolve, reject) => {
            fs.readFile(path, "binary", (err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    },

    saveJson: (path, content) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, JSON.stringify(content, null, 2), (err) => {
                err ? reject(err) : resolver();
            });
        });
    }
}

module.exports = file;