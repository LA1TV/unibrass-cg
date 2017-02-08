'use strict';

module.exports = function (nodecg) {
    nodecg.Replicant('showHashtag', {defaultValue: true});

    try {
        require('./lowerthird')(nodecg);
    } catch (e) {
        nodecg.log.error('Failed to load lowerthird lib:', e.stack);
        process.exit(1);
    }
};
