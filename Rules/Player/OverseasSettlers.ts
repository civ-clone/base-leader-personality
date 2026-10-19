import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

// The share of the player's leader's city founders that settle overseas while there are still sites for cities at
//  home, from 0 (only once home is full) to 1. The matches are added together (`sum`).
export class OverseasSettlers extends Rule<[Player], number> {}

export default OverseasSettlers;
