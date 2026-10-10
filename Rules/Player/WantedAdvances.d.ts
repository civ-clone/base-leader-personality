import Advance from '@civ-clone/core-science/Advance';
import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';
export declare class WantedAdvances extends Rule<
  [Player],
  (typeof Advance)[]
> {}
export default WantedAdvances;
