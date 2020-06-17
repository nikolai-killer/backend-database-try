"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
var function_1 = require("./function");
module.exports = function_1.greet();
exports.hello = function () {
    return 'if';
};
console.log(function_1.greet());
console.log('hello ihr');
