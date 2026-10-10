import Criterion from '@civ-clone/core-rule/Criterion';
import Player from '@civ-clone/core-player/Player';
import Trait from '@civ-clone/core-civilization/Trait';
import TraitRegistry from '@civ-clone/core-civilization/TraitRegistry';
import leaderTraits from './leaderTraits';

// A `Criterion` that holds when the leader of the player a rule is asked about (its first argument, as it is for every
//  rule here) has a `TraitType` trait.
export const leaderHas = <C extends [Player, ...any[]]>(
  traitRegistry: TraitRegistry,
  TraitType: typeof Trait
): Criterion<C> =>
  new Criterion<C>((...[player]: C): boolean =>
    leaderTraits(traitRegistry, player).some(
      (trait: Trait): boolean => trait instanceof TraitType
    )
  );

export default leaderHas;
