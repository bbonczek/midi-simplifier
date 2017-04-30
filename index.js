var MidiConvert = require("midiconvert");
var fs = require("fs");

function getMidi(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "binary", (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}

function parse(blob) {
    let parsedMidi = MidiConvert.parse(blob);
    return parsedMidi;
}

function simplify(json) {
    
    return json;
}

function saveJson(path, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(content, null, 2), (err) => {
            err ? reject(err) : resolve();
        });
    });
}










getMidi("samples/solo_cello/cs1-1pre.mid").then((blob) => {
    let jsonedMidi = parse(blob);
    let simplifiedJson = simplify(jsonedMidi);
    saveJson("output/out.json", simplifiedJson).then(() => {
        console.log('sved');
    });
}, (err) => {
    console.log(err);
});

