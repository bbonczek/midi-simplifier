const midiSimplifier = {
    simplify: (midi) => {
        return new Promise((resolve, reject) => {
            
            let err = null;

            // trim all tracks, that do not contain 'notes' property
            for (i = 0; i < midi.tracks.length; i++) {
                if (!midi.tracks[i].notes) {
                    midi.tracks.splice(i--, 1);
                }
            }

            
            console.log(midi);

            err ? reject(err) : resolve(midi);
        });
    }
}

module.exports = midiSimplifier;