import { Visual } from "../../src/visual";
var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];

var bPCE86B5001D2A3E4721B4F6C82D8FD9A411_DEBUG = {
    name: 'bPCE86B5001D2A3E4721B4F6C82D8FD9A411_DEBUG',
    displayName: 'BPCE',
    class: 'Visual',
    version: '1.0.0',
    apiVersion: '2.6.0',
    create: (options) => {
        if (Visual) {
            return new Visual(options);
        }

        console.error('Visual instance not found');
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["bPCE86B5001D2A3E4721B4F6C82D8FD9A411_DEBUG"] = bPCE86B5001D2A3E4721B4F6C82D8FD9A411_DEBUG;
}

export default bPCE86B5001D2A3E4721B4F6C82D8FD9A411_DEBUG;