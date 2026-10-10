import Leader from '@civ-clone/core-civilization/Leader';
import Player from '@civ-clone/core-player/Player';
import Trait from '@civ-clone/core-civilization/Trait';
import TraitRegistry from '@civ-clone/core-civilization/TraitRegistry';

// The class of the player's leader, or `null` for a player with no civilization or no leader yet.
export const leaderOf = (player: Player): typeof Leader | null => {
  try {
    return player.civilization().leader()?.sourceClass<typeof Leader>() ?? null;
  } catch (e) {
    // `Player#civilization` throws until one is set.
    return null;
  }
};

// The traits of `player`'s leader, looked up by its class in the registry when asked rather than taken from the
//  leader, which keeps the ones registered when it was created.
export const leaderTraits = (
  traitRegistry: TraitRegistry,
  player: Player
): Trait[] => {
  const LeaderType = leaderOf(player);

  return LeaderType === null ? [] : traitRegistry.getByLeader(LeaderType);
};

export default leaderTraits;
