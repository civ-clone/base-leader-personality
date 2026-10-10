import Advance from '@civ-clone/core-science/Advance';
import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

// The advances the player's leader wants before it stops researching for good. Every match's advances are wanted
//  (`union`). With no match at all, a computer player never stops.
export class WantedAdvances extends Rule<[Player], (typeof Advance)[]> {}

export default WantedAdvances;
