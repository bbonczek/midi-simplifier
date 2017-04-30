var MidiConvert = require("midiconvert");
var fs = require("fs");
var commandLineArgs = require("command-line-args");
var cmdArgs = require("./cmdArgs.js");

const optionDefinitions = [
    {name: 'source', alias: 's', type: String},
    {name: 'target', alias: 't', type: String},
    {name: 'originaljson', type: String},
    {name: 'simplifiedjson', type: String}
];

const cmdOptions = commandLineArgs(optionDefinitions);

cmdArgs.build(cmdOptions);

console.log(cmdOptions);



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

