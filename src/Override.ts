import {Config} from "./Config";
let override: Config = {} as any; // tslint:disable-line:no-any

try {
    override = require("./override.json"); // tslint:disable-line
} catch (e) {
    console.log("Unable to read overriden configuration, use original one"); // tslint:disable-line
}

export {override};
