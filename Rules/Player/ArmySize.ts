import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

// How big an army the player's leader keeps: it scales how many attackers a computer player wants. It's given the
//  rival the player could take on, a weaker player it has no peace with and could reach, or `null` with none. The
//  matches are multiplied together (`product`); 1 is no preference.
export class ArmySize extends Rule<[Player, Player | null], number> {}

export default ArmySize;
