var fs = require("fs");


const file = {
    openJson: (path) => {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf-8', (err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    },
    
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
                err ? reject(err) : resolve(content);
            });
        });
    },

    saveMidi: (path, content) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, content.encode(), "binary", (err) => {
                err ? reject(err) : resolve(content);
            });
        });
    }
}

module.exports = file;