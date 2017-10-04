require(
    ['observer/init', 'decorator/init'],
    function (observer, decorator) {
        'use strict';

        var examples = {
            observer: observer,
            decorator: decorator
        };

        window.runExample = function (example) {
            examples[example].init();
        };
    }
);