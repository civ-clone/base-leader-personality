import Advance from '@civ-clone/core-science/Advance';
import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';
export declare class AdvanceGrade extends Rule<
  [Player, typeof Advance],
  number
> {}
export default AdvanceGrade;
