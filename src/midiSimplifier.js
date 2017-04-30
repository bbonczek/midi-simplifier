const midiSimplifier = {
    simplify: (midi) => {
        return new Promise((resolve, reject) => {
            
            // obviously there is no error now
            let err = null;
            let simplifiedMidi = midi;
            err ? reject(err) : resolve(simplifiedMidi);
        });
    }
}

module.exports = midiSimplifier;