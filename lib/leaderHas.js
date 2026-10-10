"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaderHas = void 0;
const Criterion_1 = require("@civ-clone/core-rule/Criterion");
const leaderTraits_1 = require("./leaderTraits");
// A `Criterion` that holds when the leader of the player a rule is asked about (its first argument, as it is for every
//  rule here) has a `TraitType` trait.
const leaderHas = (traitRegistry, TraitType) => new Criterion_1.default((...[player]) => (0, leaderTraits_1.default)(traitRegistry, player).some((trait) => trait instanceof TraitType));
exports.leaderHas = leaderHas;
exports.default = exports.leaderHas;
//# sourceMappingURL=leaderHas.js.map