"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmySize = void 0;
const Rule_1 = require("@civ-clone/core-rule/Rule");
// How big an army the player's leader keeps: it scales how many attackers a computer player wants. It's given the
//  rival the player could take on, a weaker player it has no peace with and could reach, or `null` with none. The
//  matches are multiplied together (`product`); 1 is no preference.
class ArmySize extends Rule_1.default {
}
exports.ArmySize = ArmySize;
exports.default = ArmySize;
//# sourceMappingURL=ArmySize.js.map