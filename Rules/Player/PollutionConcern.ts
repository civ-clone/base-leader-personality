import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

// How much the player's leader minds pollution: it scales how keen a computer player's workers are to clean it up. The
//  matches are multiplied together (`product`); 1 is no preference.
export class PollutionConcern extends Rule<[Player], number> {}

export default PollutionConcern;
