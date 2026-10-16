# base-leader-personality

What a leader's personality makes a computer player do, as `Rule`s keyed on the leader's traits.

Each rule type is one generic concern, such as how keen a leader is to found cities (`Expansion`) or how readily it
picks a fight (`AttackConfidence`). A ruleset registers rules of these types with `leaderHas(traitRegistry, TraitType)`
as a criterion, one for each trait that changes the value, and an AI reads them through `sum`, `product` or `union`,
which say how the rules for a leader's several traits combine and what nothing matching comes to. A new trait needs
only its own rules, and no change to the AI.

| Rule                           | Arguments                | Combines  | With no match |
| ------------------------------ | ------------------------ | --------- | ------------- |
| `AdvanceGrade`                 | `Player`, advance        | `sum`     | 0             |
| `AttackConfidence`             | `Player`, other `Player` | `product` | 1             |
| `BuildWeight`                  | `Player`, item           | `product` | 1             |
| `Expansion`                    | `Player`                 | `product` | 1             |
| `MilitaryUnhappinessTolerance` | `Player`                 | `sum`     | 0             |
| `PollutionConcern`             | `Player`                 | `product` | 1             |
| `ScienceBias`                  | `Player`                 | `sum`     | 0             |
| `WantedAdvances`               | `Player`                 | `union`   | `null`        |

Traits are looked up by the leader's class in the `TraitRegistry` when a rule is asked (`leaderTraits`), not taken from
the leader, which keeps the ones registered when it was created.
