// How the effects of a leader's traits add up: one rule may match for each of its traits, or none at all, so each
//  kind of rule says how its matches combine and what it comes to when nothing matches.
import Rule from '@civ-clone/core-rule/Rule';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import { IConstructor } from '@civ-clone/core-registry/Registry';

type RuleArgs<T extends Rule> = T extends Rule<infer C, any> ? C : never;

// The matches added together, 0 if none.
export const sum = <RuleType extends Rule<any[], number>>(
  ruleRegistry: RuleRegistry,
  RuleType: IConstructor<RuleType>,
  ...args: RuleArgs<RuleType>
): number =>
  ruleRegistry
    .process(RuleType, ...args)
    .reduce((total: number, value: number): number => total + value, 0);

// The matches multiplied together, 1 if none.
export const product = <RuleType extends Rule<any[], number>>(
  ruleRegistry: RuleRegistry,
  RuleType: IConstructor<RuleType>,
  ...args: RuleArgs<RuleType>
): number =>
  ruleRegistry
    .process(RuleType, ...args)
    .reduce((total: number, value: number): number => total * value, 1);

// Every item the matches give, each once, in the order they're given, or `null` if no rule matched: no rules at all
//  isn't the same as rules that give nothing.
export const union = <Item, RuleType extends Rule<any[], Item[]>>(
  ruleRegistry: RuleRegistry,
  RuleType: IConstructor<RuleType>,
  ...args: RuleArgs<RuleType>
): Item[] | null => {
  const results = ruleRegistry.process(RuleType, ...args) as Item[][];

  return results.length === 0 ? null : [...new Set(results.flat())];
};
