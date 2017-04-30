var MidiConvert = require("midiconvert");
var commandLineArgs = require("command-line-args");

var cmdArgs = require("./cmdArgs.js");
var file = require("./file.js");

const optionDefinitions = [
    {name: 'source', alias: 's', type: String},
    {name: 'target', alias: 't', type: String},
    {name: 'originaljson', type: String},
    {name: 'simplifiedjson', type: String}
];

const cmdOptions = commandLineArgs(optionDefinitions);
cmdArgs.build(cmdOptions);

file.openMidi(cmdOptions.source).then((blob) => {
    let midi = MidiConvert.parse(blob);
    console.log(midi);
});




// function parse(blob) {
//     let parsedMidi = MidiConvert.parse(blob);
//     return parsedMidi;
// }

// function simplify(json) {
    
//     return json;
// }



// function saveAsMidi(path, content) {
//     return new Promise((resolve, reject) => {
//         fs.writeFileSync(path, content.encode(), "binary");
//     });
// }