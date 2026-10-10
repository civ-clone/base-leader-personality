import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

// How lightly the player's leader takes the unhappiness its military units cause away from home, when it weighs up a
//  government that has them. The matches are added together (`sum`); 0 is no preference, and above 0 minds it less.
export class MilitaryUnhappinessTolerance extends Rule<[Player], number> {}

export default MilitaryUnhappinessTolerance;
