"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.union = exports.product = exports.sum = void 0;
// The matches added together, 0 if none.
const sum = (ruleRegistry, RuleType, ...args) => ruleRegistry
    .process(RuleType, ...args)
    .reduce((total, value) => total + value, 0);
exports.sum = sum;
// The matches multiplied together, 1 if none.
const product = (ruleRegistry, RuleType, ...args) => ruleRegistry
    .process(RuleType, ...args)
    .reduce((total, value) => total * value, 1);
exports.product = product;
// Every item the matches give, each once, in the order they're given, or `null` if no rule matched: no rules at all
//  isn't the same as rules that give nothing.
const union = (ruleRegistry, RuleType, ...args) => {
    const results = ruleRegistry.process(RuleType, ...args);
    return results.length === 0 ? null : [...new Set(results.flat())];
};
exports.union = union;
//# sourceMappingURL=combine.js.map