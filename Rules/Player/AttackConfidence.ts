import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

// How readily the player's leader picks a fight with another player: its military strength is multiplied by this
//  before it is weighed against the other's. The matches are multiplied together (`product`); above 1 is bolder,
//  below 1 more cautious.
export class AttackConfidence extends Rule<[Player, Player], number> {}

export default AttackConfidence;
