import Rule from '@civ-clone/core-rule/Rule';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import { IConstructor } from '@civ-clone/core-registry/Registry';
type RuleArgs<T extends Rule> = T extends Rule<infer C, any> ? C : never;
export declare const sum: <RuleType extends Rule<any[], number>>(
  ruleRegistry: RuleRegistry,
  RuleType: IConstructor<RuleType>,
  ...args: RuleArgs<RuleType>
) => number;
export declare const product: <RuleType extends Rule<any[], number>>(
  ruleRegistry: RuleRegistry,
  RuleType: IConstructor<RuleType>,
  ...args: RuleArgs<RuleType>
) => number;
export declare const union: <Item, RuleType extends Rule<any[], Item[]>>(
  ruleRegistry: RuleRegistry,
  RuleType: IConstructor<RuleType>,
  ...args: RuleArgs<RuleType>
) => Item[] | null;
export {};
