var MidiConvert = require("midiconvert");
var commandLineArgs = require("command-line-args");

var cmdArgs = require("./cmdArgs.js");
var file = require("./file.js");
var midiSimplifier = require("./midiSimplifier.js");

const optionDefinitions = [
    {name: 'source', alias: 's', type: String},
    {name: 'target', alias: 't', type: String},
    {name: 'originaljson', type: String},
    {name: 'simplifiedjson', type: String}
];

const cmdOptions = commandLineArgs(optionDefinitions);
cmdArgs.build(cmdOptions);


file.openMidi(cmdOptions.source)
    .then((blob) => {
        let midi = MidiConvert.parse(blob);
        return file.saveJson(cmdOptions.originaljson, midi);
    })
    .then((jsonedMidi) => {
        return midiSimplifier.simplify(jsonedMidi);
    })
    .then((simplifiedMidi) => {
        return file.saveJson(cmdOptions.simplifiedjson, simplifiedMidi)
    })
    .then((simplifiedMidi) => {
        console.log("it's' finished, don't know what to say");
    });