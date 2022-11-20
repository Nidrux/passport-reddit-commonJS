/**
 * Module dependencies.
 */
const Strategy = require('./strategy');
/**
 * Framework version.
 */
const package = require("../../package.json");
const version = package.version;
/**
 * Expose constructors.
 */
exports.Strategy = Strategy;
exports.version = version;
exports.RedditStrategy = Strategy;