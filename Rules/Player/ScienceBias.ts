import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

// How far the player's leader leans towards science over tax when it sets its rates, in steps of the rates. The
//  matches are added together (`sum`); 0 is no preference.
export class ScienceBias extends Rule<[Player], number> {}

export default ScienceBias;
