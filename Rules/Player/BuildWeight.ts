import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

// How much the player's leader favours building an item (a unit type, improvement or Wonder) over the others a city
//  could build. The matches are multiplied together (`product`); 1 is no preference.
export class BuildWeight extends Rule<[Player, object], number> {}

export default BuildWeight;
