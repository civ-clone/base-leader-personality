import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

// How keen the player's leader is to found new cities: it scales how many city founders a computer player keeps. The
//  matches are multiplied together (`product`); 1 is no preference.
export class Expansion extends Rule<[Player], number> {}

export default Expansion;
