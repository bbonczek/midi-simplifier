var MidiConvert = require("midiconvert");
var commandLineArgs = require("command-line-args");

var cmdArgs = require("./cmdArgs.js");
var file = require("./file.js");
var midiSimplifier = require("./midiSimplifier.js");

const optionDefinitions = [
    {name: 'source', alias: 's', type: String},
    {name: 'target', alias: 't', type: String},
    {name: 'simplifiedjson', type: String}
];

console.log(optionDefinitions);

const cmdOptions = commandLineArgs(optionDefinitions);
cmdArgs.build(cmdOptions, "json2midi");



file.openJson(cmdOptions.source)
    .then((json) => {
        return midiSimplifier.simplify(json);
    })
    .then((simplifiedJson) => {
        return file.saveJson(cmdOptions.simplifiedjson, simplifiedJson)
    })
    .then((simplifiedJson) => {
        let midi = MidiConvert.fromJSON(simplifiedJson);
        return file.saveMidi(cmdOptions.target, midi);
    });

   