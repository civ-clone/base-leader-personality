import Criterion from '@civ-clone/core-rule/Criterion';
import Player from '@civ-clone/core-player/Player';
import Trait from '@civ-clone/core-civilization/Trait';
import TraitRegistry from '@civ-clone/core-civilization/TraitRegistry';
export declare const leaderHas: <C extends [Player, ...any[]]>(
  traitRegistry: TraitRegistry,
  TraitType: typeof Trait
) => Criterion<C>;
export default leaderHas;
