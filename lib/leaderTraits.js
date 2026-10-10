"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaderTraits = exports.leaderOf = void 0;
// The class of the player's leader, or `null` for a player with no civilization or no leader yet.
const leaderOf = (player) => {
    var _a, _b;
    try {
        return (_b = (_a = player.civilization().leader()) === null || _a === void 0 ? void 0 : _a.sourceClass()) !== null && _b !== void 0 ? _b : null;
    }
    catch (e) {
        // `Player#civilization` throws until one is set.
        return null;
    }
};
exports.leaderOf = leaderOf;
// The traits of `player`'s leader, looked up by its class in the registry when asked rather than taken from the
//  leader, which keeps the ones registered when it was created.
const leaderTraits = (traitRegistry, player) => {
    const LeaderType = (0, exports.leaderOf)(player);
    return LeaderType === null ? [] : traitRegistry.getByLeader(LeaderType);
};
exports.leaderTraits = leaderTraits;
exports.default = exports.leaderTraits;
//# sourceMappingURL=leaderTraits.js.map