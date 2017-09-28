require(
    ['observer/init'],
    function (observer) {
        'use strict';

        var examples = {
            observer: observer
        };

        window.runExample = function (example) {
            examples[example].init();
        };
    }
);