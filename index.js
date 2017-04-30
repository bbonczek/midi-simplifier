var MidiConvert = require("midiconvert");
var commandLineArgs = require('command-line-args');
var fs = require("fs");

const optionDefinitions = [
    {name: 'source', alias: 's', type: String},
    {name: 'target', alias: 't', type: String},
    {name: 'originaljson', type: String},
    {name: 'simplifiedjson', type: String}
];


const cmdOptions = commandLineArgs(optionDefinitions);

if (!cmdOptions.target) {
    let path = cmdOptions.source.split('/');
 
    path[path.length - 1] = path[path.length - 1].replace('.mid', '_simple.mid');
    cmdOptions.target = path.join('/');
}

if (!cmdOptions.originaljson) {
    let path = cmdOptions.source.split('/')

    path[path.length - 1] = path[path.length - 1].replace('.mid', '_original.json');
    cmdOptions.originaljson = path.join('/');
}

if (!cmdOptions.simplifiedjson) {
    let path = cmdOptions.source.split('/')

    path[path.length - 1] = path[path.length - 1].replace('.mid', '_original.json');
    cmdOptions.simplifiedjson = path.join('/');
}


// function getMidi(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, "binary", (err, data) => {
//             err ? reject(err) : resolve(data);
//         });
//     });
// }

// function parse(blob) {
//     let parsedMidi = MidiConvert.parse(blob);
//     return parsedMidi;
// }

// function simplify(json) {
    
//     return json;
// }

// function saveAsJson(path, content) {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(path, JSON.stringify(content, null, 2), (err) => {
//             err ? reject(err) : resolve();
//         });
//     });
// }

// function saveAsMidi(path, content) {
//     return new Promise((resolve, reject) => {
//         fs.writeFileSync(path, content.encode(), "binary");
//     });
// }

// getMidi("samples/solo_cello/cs1-1pre.mid").then((blob) => {
//     let midi = simplify(parse(blob));

//     saveAsJson("output/out.json", midi).then(() => {
//         saveAsMidi("gowno.mid", midi)
//     });
// }, (err) => {
//     console.log(err);
// });

