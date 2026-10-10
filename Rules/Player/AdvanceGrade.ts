import Advance from '@civ-clone/core-science/Advance';
import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

// How keen the player's leader is on researching an advance: the higher, the likelier a computer player chooses it.
//  The matches are added together (`sum`), and 0 means the leader is indifferent to it.
export class AdvanceGrade extends Rule<[Player, typeof Advance], number> {}

export default AdvanceGrade;
