import Leader from '@civ-clone/core-civilization/Leader';
import Player from '@civ-clone/core-player/Player';
import Trait from '@civ-clone/core-civilization/Trait';
import TraitRegistry from '@civ-clone/core-civilization/TraitRegistry';
export declare const leaderOf: (player: Player) => typeof Leader | null;
export declare const leaderTraits: (
  traitRegistry: TraitRegistry,
  player: Player
) => Trait[];
export default leaderTraits;
