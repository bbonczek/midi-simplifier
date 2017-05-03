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

const cmdOptions = commandLineArgs(optionDefinitions);
cmdArgs.build(cmdOptions, "json2midi");



file.openJson(cmdOptions.source)
    .then((blob) => {                                                           // create special 'MidiConvert' object
        // should convert json to MidiConvert object
    })
    .then((midi) => {
        // should save midiObject as midi file in cmdArgs.target location    
    });

   