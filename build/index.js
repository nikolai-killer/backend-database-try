"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
var function_1 = require("./function");
var function_2 = require("./function");
Object.defineProperty(exports, "greet", { enumerable: true, get: function () { return function_2.greet; } });
exports.hello = function () {
    return 'if';
};
console.log(function_1.greet());
console.log('hello ihr');
