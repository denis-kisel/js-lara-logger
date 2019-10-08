'use strict';

class  Logger
{
    static log(...log) {
        console.log(...log);
    }

    static debug(...log) {
        if (typeof(Meta) !== 'undefined') {
            if (Meta.env() != 'production') {
                console.log(...log);
            }
        } else {
            this.log('The package: [lara-meta] is not installed!')
        }
    }
}