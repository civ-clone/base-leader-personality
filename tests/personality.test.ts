import { product, sum, union } from '../lib/combine';
import AttackConfidence from '../Rules/Player/AttackConfidence';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Effect from '@civ-clone/core-rule/Effect';
import Expansion from '../Rules/Player/Expansion';
import Leader from '@civ-clone/core-civilization/Leader';
import Player from '@civ-clone/core-player/Player';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import ScienceBias from '../Rules/Player/ScienceBias';
import Trait from '@civ-clone/core-civilization/Trait';
import TraitRegistry from '@civ-clone/core-civilization/TraitRegistry';
import WantedAdvances from '../Rules/Player/WantedAdvances';
import Advance from '@civ-clone/core-science/Advance';
import { expect } from 'chai';
import leaderHas from '../lib/leaderHas';
import leaderTraits from '../lib/leaderTraits';

class Bold extends Trait {
  constructor(LeaderType: typeof Leader) {
    super(LeaderType, 1);
  }
}

class Studious extends Trait {
  constructor(LeaderType: typeof Leader) {
    super(LeaderType, 1);
  }
}

class Shy extends Trait {
  constructor(LeaderType: typeof Leader) {
    super(LeaderType, 0);
  }
}

class BoldLeader extends Leader {}
class StudiousLeader extends Leader {}

class Writing extends Advance {}
class Wheel extends Advance {}

const setUp = () => {
  const traitRegistry = new TraitRegistry(),
    ruleRegistry = new RuleRegistry();

  traitRegistry.register(
    new Bold(BoldLeader),
    new Studious(BoldLeader),
    new Studious(StudiousLeader)
  );

  const playerFor = (LeaderType: typeof Leader): Player => {
    const player = new Player(),
      civilization = new Civilization();

    player.setCivilization(civilization);
    civilization.setLeader(new LeaderType(traitRegistry));

    return player;
  };

  return { playerFor, ruleRegistry, traitRegistry };
};

describe('leaderTraits', (): void => {
  it('is empty for a player with no civilization', (): void => {
    const { traitRegistry } = setUp();

    expect(leaderTraits(traitRegistry, new Player())).empty;
  });

  it('is empty for a civilization with no leader', (): void => {
    const { traitRegistry } = setUp(),
      player = new Player();

    player.setCivilization(new Civilization());

    expect(leaderTraits(traitRegistry, player)).empty;
  });

  it('reads the registry when asked, not when the leader was created', (): void => {
    const { playerFor, traitRegistry } = setUp(),
      player = playerFor(StudiousLeader);

    traitRegistry.register(new Shy(StudiousLeader));

    expect(
      leaderTraits(traitRegistry, player).map((trait) => trait.constructor)
    ).members([Studious, Shy]);
  });
});

describe('leaderHas', (): void => {
  it("holds only for a leader with the trait's class", (): void => {
    const { playerFor, traitRegistry } = setUp(),
      criterion = leaderHas<[Player]>(traitRegistry, Bold);

    expect(criterion.validate(playerFor(BoldLeader))).true;
    expect(criterion.validate(playerFor(StudiousLeader))).false;
    expect(criterion.validate(new Player())).false;
  });
});

describe('combining traits', (): void => {
  it('adds, multiplies and joins the rules that match, one per trait', (): void => {
    const { playerFor, ruleRegistry, traitRegistry } = setUp(),
      bold = playerFor(BoldLeader),
      studious = playerFor(StudiousLeader);

    ruleRegistry.register(
      new ScienceBias(leaderHas(traitRegistry, Bold), new Effect(() => -1)),
      new ScienceBias(leaderHas(traitRegistry, Studious), new Effect(() => 2)),
      new Expansion(leaderHas(traitRegistry, Bold), new Effect(() => 1.5)),
      new Expansion(leaderHas(traitRegistry, Studious), new Effect(() => 2)),
      new WantedAdvances(new Effect(() => [Writing])),
      new WantedAdvances(
        leaderHas(traitRegistry, Studious),
        new Effect(() => [Writing, Wheel])
      )
    );

    expect(sum(ruleRegistry, ScienceBias, bold)).equal(1);
    expect(sum(ruleRegistry, ScienceBias, studious)).equal(2);
    expect(product(ruleRegistry, Expansion, bold)).equal(3);
    expect(union(ruleRegistry, WantedAdvances, studious)).members([
      Writing,
      Wheel,
    ]);
  });

  it('is 0, 1 or `null` when nothing matches', (): void => {
    const { playerFor, ruleRegistry } = setUp(),
      player = playerFor(BoldLeader);

    expect(sum(ruleRegistry, ScienceBias, player)).equal(0);
    expect(product(ruleRegistry, AttackConfidence, player, player)).equal(1);
    expect(union(ruleRegistry, WantedAdvances, player)).null;
  });

  it('is empty, not `null`, when the rules that match give nothing', (): void => {
    const { playerFor, ruleRegistry } = setUp();

    ruleRegistry.register(new WantedAdvances(new Effect(() => [])));

    expect(union(ruleRegistry, WantedAdvances, playerFor(BoldLeader))).empty;
  });
});
