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
    .then((blob) => {                                                           // create special 'MidiConvert' object
        let midi = MidiConvert.parse(blob);
        return file.saveJson(cmdOptions.originaljson, midi);
    })
    .then((jsonedMidi) => {                                                     // simplify to neuron-friendly format
        return midiSimplifier.simplify(jsonedMidi);
    })
    .then((simplifiedJsonedMidi) => {                                           // save as json & as midi
        return file.saveJson(cmdOptions.simplifiedjson, simplifiedJsonedMidi)
    })
    .then((simplifiedJsonedMidi) => {
        return file.saveMidi(cmdOptions.target, simplifiedJsonedMidi);
    });