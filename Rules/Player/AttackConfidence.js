"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackConfidence = void 0;
const Rule_1 = require("@civ-clone/core-rule/Rule");
// How readily the player's leader picks a fight with another player: its military strength is multiplied by this
//  before it is weighed against the other's. The matches are multiplied together (`product`); above 1 is bolder,
//  below 1 more cautious.
class AttackConfidence extends Rule_1.default {
}
exports.AttackConfidence = AttackConfidence;
exports.default = AttackConfidence;
//# sourceMappingURL=AttackConfidence.js.map