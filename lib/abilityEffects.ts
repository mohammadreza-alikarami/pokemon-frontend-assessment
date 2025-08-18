// Comprehensive ability effects database - includes ALL Pokémon abilities
const abilityEffects: Record<
  string,
  Record<string, { multiplier?: number; boost?: number; effect: string }>
> = {
  // === ATTACK BOOSTING ABILITIES ===
  hugepower: {
    attack: { multiplier: 2, effect: 'Doubles Attack stat' },
  },
  purepower: {
    attack: { multiplier: 2, effect: 'Doubles Attack stat' },
  },
  guts: {
    attack: {
      multiplier: 1.5,
      effect: '+50% Attack when statused (shown as if statused)',
    },
  },
  hustle: {
    attack: {
      multiplier: 1.5,
      effect: '+50% Attack, -20% accuracy (attack boost shown)',
    },
  },
  adaptability: {
    attack: {
      multiplier: 1.33,
      effect:
        'STAB moves deal 2× damage instead of 1.5× (effective +33% power)',
    },
    specialattack: {
      multiplier: 1.33,
      effect:
        'STAB moves deal 2× damage instead of 1.5× (effective +33% power)',
    },
  },
  technician: {
    attack: {
      multiplier: 1.5,
      effect: '+50% power to moves with 60 BP or less',
    },
    specialattack: {
      multiplier: 1.5,
      effect: '+50% power to moves with 60 BP or less',
    },
  },
  skilllink: {
    attack: {
      multiplier: 1.67,
      effect: 'Multi-hit moves always hit 5 times (effective +67% power)',
    },
  },
  strongjaw: {
    attack: { multiplier: 1.5, effect: '+50% power to biting moves' },
  },
  toughclaws: {
    attack: { multiplier: 1.3, effect: '+30% power to contact moves' },
  },
  ironfist: {
    attack: { multiplier: 1.2, effect: '+20% power to punching moves' },
  },
  sheerforce: {
    attack: {
      multiplier: 1.3,
      effect: '+30% power to moves with secondary effects',
    },
    specialattack: {
      multiplier: 1.3,
      effect: '+30% power to moves with secondary effects',
    },
  },
  reckless: {
    attack: { multiplier: 1.2, effect: '+20% power to recoil moves' },
  },
  rivalry: {
    attack: {
      multiplier: 1.25,
      effect: '+25% power vs same gender, -25% vs opposite',
    },
    specialattack: {
      multiplier: 1.25,
      effect: '+25% power vs same gender, -25% vs opposite',
    },
  },
  analytic: {
    attack: { multiplier: 1.3, effect: '+30% power when moving last' },
    specialattack: { multiplier: 1.3, effect: '+30% power when moving last' },
  },
  waterbubble: {
    attack: {
      multiplier: 2,
      effect: 'Doubles Water move power, halves Fire damage taken',
    },
  },
  sapsipper: {
    attack: { multiplier: 1.5, effect: '+1 Attack when hit by Grass moves' },
  },
  justified: {
    attack: { multiplier: 1.5, effect: '+1 Attack when hit by Dark moves' },
  },
  defiant: {
    attack: { multiplier: 2, effect: '+2 Attack when stats are lowered' },
  },
  moxie: {
    attack: { multiplier: 1.5, effect: '+1 Attack when KOing an opponent' },
  },
  beastboost: {
    attack: {
      multiplier: 1.5,
      effect:
        '+1 highest stat when KOing an opponent (assuming Attack is highest)',
    },
  },
  download: {
    attack: {
      multiplier: 1.5,
      effect: '+1 Attack if opponent has lower Defense',
    },
    specialattack: {
      multiplier: 1.5,
      effect: '+1 Sp. Attack if opponent has lower Sp. Defense',
    },
  },
  flowergift: {
    attack: { multiplier: 1.5, effect: '+50% Attack in sun (for team)' },
  },
  leafguard: {
    attack: {
      multiplier: 1.1,
      effect: 'Prevents status in sun (effective +10% consistency)',
    },
  },
  normalize: {
    attack: {
      multiplier: 1.2,
      effect: 'All moves become Normal-type and gain 20% power',
    },
    specialattack: {
      multiplier: 1.2,
      effect: 'All moves become Normal-type and gain 20% power',
    },
  },
  pixilate: {
    specialattack: {
      multiplier: 1.2,
      effect: 'Normal moves become Fairy-type and gain 20% power',
    },
  },
  refrigerate: {
    specialattack: {
      multiplier: 1.2,
      effect: 'Normal moves become Ice-type and gain 20% power',
    },
  },
  aerilate: {
    specialattack: {
      multiplier: 1.2,
      effect: 'Normal moves become Flying-type and gain 20% power',
    },
  },
  galvanize: {
    specialattack: {
      multiplier: 1.2,
      effect: 'Normal moves become Electric-type and gain 20% power',
    },
  },
  liquidvoice: {
    specialattack: {
      multiplier: 1.1,
      effect: 'Sound moves become Water-type (effective +10% power)',
    },
  },

  // === SPECIAL ATTACK BOOSTING ABILITIES ===
  solarpower: {
    specialattack: {
      multiplier: 1.5,
      effect: '+50% Sp. Attack in sun (shown as if sunny)',
    },
  },
  plus: {
    specialattack: {
      multiplier: 1.5,
      effect: '+50% Sp. Attack with Minus ally (shown as if paired)',
    },
  },
  minus: {
    specialattack: {
      multiplier: 1.5,
      effect: '+50% Sp. Attack with Plus ally (shown as if paired)',
    },
  },
  competitive: {
    specialattack: {
      multiplier: 2,
      effect: '+2 Sp. Attack when stats are lowered',
    },
  },
  flashfire: {
    specialattack: {
      multiplier: 1.5,
      effect: '+50% Fire move power after being hit by Fire move',
    },
  },
  drought: {
    specialattack: {
      multiplier: 1.5,
      effect: 'Sets sun on entry (+50% Fire moves, -50% Water moves)',
    },
  },
  drizzle: {
    specialattack: {
      multiplier: 1.5,
      effect: 'Sets rain on entry (+50% Water moves, -50% Fire moves)',
    },
  },
  desolateland: {
    specialattack: {
      multiplier: 1.5,
      effect: 'Sets harsh sun (+50% Fire moves, nullifies Water moves)',
    },
  },
  primordialsea: {
    specialattack: {
      multiplier: 1.5,
      effect: 'Sets heavy rain (+50% Water moves, nullifies Fire moves)',
    },
  },
  neuroforce: {
    attack: {
      multiplier: 1.25,
      effect: '+25% damage with super effective moves',
    },
    specialattack: {
      multiplier: 1.25,
      effect: '+25% damage with super effective moves',
    },
  },
  tintedlens: {
    attack: {
      multiplier: 2,
      effect: 'Doubles damage of not very effective moves',
    },
    specialattack: {
      multiplier: 2,
      effect: 'Doubles damage of not very effective moves',
    },
  },
  scrappy: {
    attack: {
      multiplier: 1.2,
      effect:
        'Can hit Ghost types with Normal/Fighting moves (+20% effective coverage)',
    },
    specialattack: {
      multiplier: 1.2,
      effect:
        'Can hit Ghost types with Normal/Fighting moves (+20% effective coverage)',
    },
  },

  // === DEFENSE BOOSTING ABILITIES ===
  marvelscale: {
    defense: {
      multiplier: 1.5,
      effect: '+50% Defense when statused (shown as if statused)',
    },
  },
  thickfat: {
    defense: {
      multiplier: 1.5,
      effect: 'Halves Fire/Ice damage taken (effective +50% bulk vs Fire/Ice)',
    },
    specialdefense: {
      multiplier: 1.5,
      effect: 'Halves Fire/Ice damage taken (effective +50% bulk vs Fire/Ice)',
    },
  },
  fluffy: {
    defense: {
      multiplier: 2,
      effect: 'Halves contact damage taken, doubles Fire damage taken',
    },
  },
  furcoat: {
    defense: { multiplier: 2, effect: 'Halves physical damage taken' },
  },
  multiscale: {
    defense: {
      multiplier: 2,
      effect: 'Halves damage when at full HP (shown as if at full HP)',
    },
    specialdefense: {
      multiplier: 2,
      effect: 'Halves damage when at full HP (shown as if at full HP)',
    },
  },
  shadowshield: {
    defense: {
      multiplier: 2,
      effect: 'Halves damage when at full HP (shown as if at full HP)',
    },
    specialdefense: {
      multiplier: 2,
      effect: 'Halves damage when at full HP (shown as if at full HP)',
    },
  },
  filter: {
    defense: {
      multiplier: 1.33,
      effect: 'Reduces super effective damage by 25% (effective +33% bulk)',
    },
    specialdefense: {
      multiplier: 1.33,
      effect: 'Reduces super effective damage by 25% (effective +33% bulk)',
    },
  },
  solidrock: {
    defense: {
      multiplier: 1.33,
      effect: 'Reduces super effective damage by 25% (effective +33% bulk)',
    },
    specialdefense: {
      multiplier: 1.33,
      effect: 'Reduces super effective damage by 25% (effective +33% bulk)',
    },
  },
  prismarmor: {
    defense: {
      multiplier: 1.33,
      effect: 'Reduces super effective damage by 25% (effective +33% bulk)',
    },
    specialdefense: {
      multiplier: 1.33,
      effect: 'Reduces super effective damage by 25% (effective +33% bulk)',
    },
  },
  heatproof: {
    specialdefense: { multiplier: 2, effect: 'Halves Fire damage taken' },
  },
  dryskin: {
    specialdefense: {
      multiplier: 1.25,
      effect: 'Heals from Water, takes extra Fire damage',
    },
  },
  wonderguard: {
    defense: {
      multiplier: 10,
      effect: 'Only super effective moves can damage',
    },
    specialdefense: {
      multiplier: 10,
      effect: 'Only super effective moves can damage',
    },
  },
  battlearmor: {
    defense: {
      multiplier: 1.25,
      effect: 'Prevents critical hits (effective +25% bulk)',
    },
  },
  shellarmor: {
    defense: {
      multiplier: 1.25,
      effect: 'Prevents critical hits (effective +25% bulk)',
    },
  },
  waterveil: {
    defense: {
      multiplier: 1.1,
      effect: 'Prevents burn (effective +10% physical bulk)',
    },
  },
  immunity: {
    hp: { multiplier: 1.1, effect: 'Prevents poison (effective +10% HP)' },
  },
  limber: {
    speed: {
      multiplier: 1.1,
      effect: 'Prevents paralysis (effective +10% speed consistency)',
    },
  },
  insomnia: {
    hp: { multiplier: 1.05, effect: 'Prevents sleep (effective +5% HP)' },
  },
  vitalspirit: {
    hp: { multiplier: 1.05, effect: 'Prevents sleep (effective +5% HP)' },
  },
  owntempo: {
    attack: {
      multiplier: 1.05,
      effect: 'Prevents confusion (effective +5% attack consistency)',
    },
  },
  oblivious: {
    attack: {
      multiplier: 1.05,
      effect: 'Prevents infatuation and taunt (effective +5% consistency)',
    },
  },
  innerfocus: {
    attack: {
      multiplier: 1.05,
      effect: 'Prevents flinching (effective +5% attack consistency)',
    },
  },
  keeneye: {
    attack: {
      multiplier: 1.1,
      effect: 'Prevents accuracy reduction (effective +10% attack consistency)',
    },
  },
  hypercutter: {
    attack: {
      multiplier: 1.1,
      effect: 'Prevents Attack reduction (effective +10% attack consistency)',
    },
  },
  clearbody: {
    attack: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
    defense: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
    specialattack: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
    specialdefense: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
    speed: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
  },
  whitesmoke: {
    attack: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
    defense: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
    specialattack: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
    specialdefense: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
    speed: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
  },
  fullmetalbody: {
    attack: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
    defense: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
    specialattack: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
    specialdefense: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
    speed: {
      multiplier: 1.1,
      effect: 'Prevents stat reduction (effective +10% all stats)',
    },
  },

  // === SPEED BOOSTING ABILITIES ===
  speedboost: {
    speed: {
      multiplier: 1.5,
      effect: '+1 Speed stage each turn (shown after 1 turn)',
    },
  },
  quickfeet: {
    speed: {
      multiplier: 1.5,
      effect: '+50% Speed when statused (shown as if statused)',
    },
  },
  chlorophyll: {
    speed: {
      multiplier: 2,
      effect: 'Doubles Speed in sun (shown as if sunny)',
    },
  },
  swiftswim: {
    speed: {
      multiplier: 2,
      effect: 'Doubles Speed in rain (shown as if raining)',
    },
  },
  sandrush: {
    speed: {
      multiplier: 2,
      effect: 'Doubles Speed in sandstorm (shown as if sandstorm)',
    },
  },
  slushrush: {
    speed: {
      multiplier: 2,
      effect: 'Doubles Speed in hail (shown as if hailing)',
    },
  },
  unburden: {
    speed: {
      multiplier: 2,
      effect: 'Doubles Speed after using/losing held item',
    },
  },
  motordrive: {
    speed: { multiplier: 1.5, effect: '+1 Speed when hit by Electric move' },
  },
  steamengine: {
    speed: {
      multiplier: 3,
      effect: '+6 Speed when hit by Fire/Water move (shown as +200%)',
    },
  },
  weakarmor: {
    defense: {
      multiplier: 0.8,
      effect: '-1 Defense when hit by physical move',
    },
    speed: { multiplier: 1.5, effect: '+2 Speed when hit by physical move' },
  },
  rattled: {
    speed: {
      multiplier: 1.5,
      effect: '+1 Speed when hit by Bug/Dark/Ghost moves',
    },
  },
  surgesurfer: {
    speed: { multiplier: 2, effect: 'Doubles Speed on Electric Terrain' },
  },
  quickdraw: {
    speed: {
      multiplier: 1.3,
      effect:
        '30% chance to move first in priority bracket (effective +30% speed)',
    },
  },

  // === HP/RECOVERY ABILITIES ===
  icebody: {
    hp: {
      multiplier: 1.16,
      effect:
        'Recovers 1/16 HP each turn in hail (effective +16% HP over time)',
    },
  },
  raindish: {
    hp: {
      multiplier: 1.16,
      effect:
        'Recovers 1/16 HP each turn in rain (effective +16% HP over time)',
    },
  },
  poisonheal: {
    hp: {
      multiplier: 1.125,
      effect: 'Heals 1/8 HP when poisoned instead of taking damage',
    },
  },
  magicguard: {
    hp: {
      multiplier: 1.5,
      effect: 'Only takes damage from direct attacks (effective +50% HP)',
    },
  },
  voltabsorb: {
    hp: {
      multiplier: 1.25,
      effect:
        'Heals when hit by Electric moves (effective +25% HP vs Electric)',
    },
  },
  waterabsorb: {
    hp: {
      multiplier: 1.25,
      effect: 'Heals when hit by Water moves (effective +25% HP vs Water)',
    },
  },
  levitate: {
    defense: {
      multiplier: 1.2,
      effect: 'Immune to Ground moves (effective +20% physical bulk)',
    },
  },
  wonderskin: {
    specialdefense: {
      multiplier: 1.5,
      effect:
        'Status moves have 50% accuracy (effective +50% status resistance)',
    },
  },
  magicbounce: {
    specialdefense: {
      multiplier: 1.3,
      effect: 'Reflects status moves (effective +30% status immunity)',
    },
  },
  naturalcure: {
    hp: {
      multiplier: 1.1,
      effect: 'Cures status on switch out (effective +10% HP)',
    },
  },
  regenerator: {
    hp: {
      multiplier: 1.33,
      effect: 'Recovers 1/3 HP on switch out (effective +33% HP)',
    },
  },
  leftovers: {
    hp: {
      multiplier: 1.0625,
      effect: 'Recovers 1/16 HP each turn (effective +6.25% HP over time)',
    },
  },

  // === NEGATIVE EFFECT ABILITIES ===
  slowstart: {
    attack: {
      multiplier: 0.5,
      effect: 'Halves Attack and Speed for 5 turns (shown as halved)',
    },
    speed: {
      multiplier: 0.5,
      effect: 'Halves Attack and Speed for 5 turns (shown as halved)',
    },
  },
  defeatist: {
    attack: {
      multiplier: 0.5,
      effect: 'Halves Attack and Sp. Attack when HP ≤ 50% (shown as if low HP)',
    },
    specialattack: {
      multiplier: 0.5,
      effect: 'Halves Attack and Sp. Attack when HP ≤ 50% (shown as if low HP)',
    },
  },
  truant: {
    attack: {
      multiplier: 0.5,
      effect: 'Can only move every other turn (effective 50% damage output)',
    },
    specialattack: {
      multiplier: 0.5,
      effect: 'Can only move every other turn (effective 50% damage output)',
    },
  },
  klutz: {
    attack: {
      multiplier: 0.9,
      effect: 'Cannot use held items (loses item benefits)',
    },
    specialattack: {
      multiplier: 0.9,
      effect: 'Cannot use held items (loses item benefits)',
    },
  },
  stall: {
    speed: {
      multiplier: 0.1,
      effect: 'Always moves last (regardless of speed)',
    },
  },

  // === STAT MANIPULATION ABILITIES ===
  contrary: {
    attack: {
      multiplier: 0.67,
      effect: 'Stat changes are reversed (Attack boosts become drops)',
    },
    defense: {
      multiplier: 0.67,
      effect: 'Stat changes are reversed (Defense boosts become drops)',
    },
    specialattack: {
      multiplier: 0.67,
      effect: 'Stat changes are reversed (Sp. Attack boosts become drops)',
    },
    specialdefense: {
      multiplier: 0.67,
      effect: 'Stat changes are reversed (Sp. Defense boosts become drops)',
    },
    speed: {
      multiplier: 0.67,
      effect: 'Stat changes are reversed (Speed boosts become drops)',
    },
  },
  simple: {
    attack: {
      multiplier: 2,
      effect: 'Stat changes are doubled (shown as if +2 stages)',
    },
    defense: {
      multiplier: 2,
      effect: 'Stat changes are doubled (shown as if +2 stages)',
    },
    specialattack: {
      multiplier: 2,
      effect: 'Stat changes are doubled (shown as if +2 stages)',
    },
    specialdefense: {
      multiplier: 2,
      effect: 'Stat changes are doubled (shown as if +2 stages)',
    },
    speed: {
      multiplier: 2,
      effect: 'Stat changes are doubled (shown as if +2 stages)',
    },
  },
  unaware: {
    defense: {
      multiplier: 1.5,
      effect:
        'Ignores opponent stat changes when defending (effective +50% bulk)',
    },
    specialdefense: {
      multiplier: 1.5,
      effect:
        'Ignores opponent stat changes when defending (effective +50% bulk)',
    },
  },

  // === WEATHER/TERRAIN ABILITIES ===
  sandstream: {
    specialdefense: {
      multiplier: 1.5,
      effect: 'Sets sandstorm (+50% Sp. Defense for Rock types)',
    },
  },
  snowwarning: {
    defense: {
      multiplier: 1.5,
      effect: 'Sets hail (+50% Defense for Ice types)',
    },
  },
  electricsurge: {
    speed: {
      multiplier: 1.5,
      effect: 'Sets Electric Terrain (+50% speed for grounded Electric types)',
    },
  },
  grassysurge: {
    hp: {
      multiplier: 1.0625,
      effect: 'Sets Grassy Terrain (heals 1/16 HP per turn)',
    },
  },
  mistysurge: {
    specialdefense: {
      multiplier: 1.5,
      effect: 'Sets Misty Terrain (halves Dragon damage to grounded)',
    },
  },
  psychicsurge: {
    specialattack: {
      multiplier: 1.5,
      effect: 'Sets Psychic Terrain (+50% Psychic moves for grounded)',
    },
  },

  // === UTILITY/PASSIVE ABILITIES (with minimal stat effects) ===
  pressure: {
    hp: {
      multiplier: 1.05,
      effect: 'Opponent uses 2 PP per move (effective +5% longevity)',
    },
  },
  unnerve: {
    attack: {
      multiplier: 1.05,
      effect:
        'Prevents opponent from eating berries (effective +5% consistency)',
    },
  },
  intimidate: {
    defense: {
      multiplier: 1.5,
      effect: 'Lowers opponent Attack on entry (effective +50% physical bulk)',
    },
  },
  trace: {
    attack: {
      multiplier: 1.1,
      effect: 'Copies opponent ability (effective +10% adaptability)',
    },
    defense: {
      multiplier: 1.1,
      effect: 'Copies opponent ability (effective +10% adaptability)',
    },
    specialattack: {
      multiplier: 1.1,
      effect: 'Copies opponent ability (effective +10% adaptability)',
    },
    specialdefense: {
      multiplier: 1.1,
      effect: 'Copies opponent ability (effective +10% adaptability)',
    },
    speed: {
      multiplier: 1.1,
      effect: 'Copies opponent ability (effective +10% adaptability)',
    },
  },
  forecast: {
    attack: {
      multiplier: 1.2,
      effect: 'Changes type based on weather (effective +20% STAB coverage)',
    },
    specialattack: {
      multiplier: 1.2,
      effect: 'Changes type based on weather (effective +20% STAB coverage)',
    },
  },
  colorchange: {
    defense: {
      multiplier: 1.3,
      effect: 'Changes type to resist last move hit by (effective +30% bulk)',
    },
    specialdefense: {
      multiplier: 1.3,
      effect: 'Changes type to resist last move hit by (effective +30% bulk)',
    },
  },
  protean: {
    attack: {
      multiplier: 1.5,
      effect: 'Changes type to match move used (always STAB, +50% power)',
    },
    specialattack: {
      multiplier: 1.5,
      effect: 'Changes type to match move used (always STAB, +50% power)',
    },
  },
  libero: {
    attack: {
      multiplier: 1.5,
      effect: 'Changes type to match move used (always STAB, +50% power)',
    },
    specialattack: {
      multiplier: 1.5,
      effect: 'Changes type to match move used (always STAB, +50% power)',
    },
  },
  multitype: {
    attack: {
      multiplier: 1.2,
      effect: 'Type changes with held plate (effective +20% STAB coverage)',
    },
    specialattack: {
      multiplier: 1.2,
      effect: 'Type changes with held plate (effective +20% STAB coverage)',
    },
  },
  rkssystem: {
    attack: {
      multiplier: 1.2,
      effect: 'Type changes with held memory (effective +20% STAB coverage)',
    },
    specialattack: {
      multiplier: 1.2,
      effect: 'Type changes with held memory (effective +20% STAB coverage)',
    },
  },
  zenmode: {
    attack: {
      multiplier: 1.5,
      effect: 'Changes form when HP ≤ 50% (shown as transformed)',
    },
    specialattack: {
      multiplier: 1.5,
      effect: 'Changes form when HP ≤ 50% (shown as transformed)',
    },
  },
  schooling: {
    attack: {
      multiplier: 1.5,
      effect: 'School form when HP > 25% (shown as schooled)',
    },
    defense: {
      multiplier: 1.5,
      effect: 'School form when HP > 25% (shown as schooled)',
    },
    specialattack: {
      multiplier: 1.5,
      effect: 'School form when HP > 25% (shown as schooled)',
    },
    specialdefense: {
      multiplier: 1.5,
      effect: 'School form when HP > 25% (shown as schooled)',
    },
    speed: {
      multiplier: 1.5,
      effect: 'School form when HP > 25% (shown as schooled)',
    },
  },
  shieldsdown: {
    attack: {
      multiplier: 1.5,
      effect: 'Core form when HP ≤ 50% (shown as core form)',
    },
    specialattack: {
      multiplier: 1.5,
      effect: 'Core form when HP ≤ 50% (shown as core form)',
    },
    speed: {
      multiplier: 1.5,
      effect: 'Core form when HP ≤ 50% (shown as core form)',
    },
  },
  powerconstruct: {
    hp: {
      multiplier: 1.5,
      effect: 'Complete form when HP ≤ 50% (shown as complete)',
    },
    attack: {
      multiplier: 1.5,
      effect: 'Complete form when HP ≤ 50% (shown as complete)',
    },
    defense: {
      multiplier: 1.5,
      effect: 'Complete form when HP ≤ 50% (shown as complete)',
    },
    specialattack: {
      multiplier: 1.5,
      effect: 'Complete form when HP ≤ 50% (shown as complete)',
    },
    specialdefense: {
      multiplier: 1.5,
      effect: 'Complete form when HP ≤ 50% (shown as complete)',
    },
    speed: {
      multiplier: 1.5,
      effect: 'Complete form when HP ≤ 50% (shown as complete)',
    },
  },
  battleform: {
    attack: {
      multiplier: 1.5,
      effect: 'Battle form when using damaging move (shown as battle form)',
    },
    specialattack: {
      multiplier: 1.5,
      effect: 'Battle form when using damaging move (shown as battle form)',
    },
    speed: {
      multiplier: 1.5,
      effect: 'Battle form when using damaging move (shown as battle form)',
    },
  },
  disguise: {
    hp: {
      multiplier: 1.5,
      effect: 'Blocks first damaging move (effective +50% HP for first hit)',
    },
  },
  iceface: {
    defense: {
      multiplier: 2,
      effect:
        'Blocks first physical move (effective double physical bulk for first hit)',
    },
  },

  // === STARTER ABILITIES ===
  // Attack boosting abilities
  overgrow: {
    attack: {
      multiplier: 1.5,
      effect: '+50% Grass moves when HP ≤ 1/3 (shown as if low HP)',
    },
    specialattack: {
      multiplier: 1.5,
      effect: '+50% Grass moves when HP ≤ 1/3 (shown as if low HP)',
    },
  },
  blaze: {
    attack: {
      multiplier: 1.5,
      effect: '+50% Fire moves when HP ≤ 1/3 (shown as if low HP)',
    },
    specialattack: {
      multiplier: 1.5,
      effect: '+50% Fire moves when HP ≤ 1/3 (shown as if low HP)',
    },
  },
  torrent: {
    attack: {
      multiplier: 1.5,
      effect: '+50% Water moves when HP ≤ 1/3 (shown as if low HP)',
    },
    specialattack: {
      multiplier: 1.5,
      effect: '+50% Water moves when HP ≤ 1/3 (shown as if low HP)',
    },
  },
  swarm: {
    attack: {
      multiplier: 1.5,
      effect: '+50% Bug moves when HP ≤ 1/3 (shown as if low HP)',
    },
    specialattack: {
      multiplier: 1.5,
      effect: '+50% Bug moves when HP ≤ 1/3 (shown as if low HP)',
    },
  },

  // === MISCELLANEOUS ABILITIES ===
  static: {
    defense: {
      multiplier: 1.3,
      effect:
        '30% chance to paralyze on contact (effective +30% physical deterrent)',
    },
  },
  flamebody: {
    defense: {
      multiplier: 1.3,
      effect:
        '30% chance to burn on contact (effective +30% physical deterrent)',
    },
  },
  poisonpoint: {
    defense: {
      multiplier: 1.3,
      effect:
        '30% chance to poison on contact (effective +30% physical deterrent)',
    },
  },
  effectspore: {
    defense: {
      multiplier: 1.3,
      effect:
        '30% chance to inflict status on contact (effective +30% physical deterrent)',
    },
  },
  roughskin: {
    defense: {
      multiplier: 1.125,
      effect: 'Damages attackers on contact (effective +12.5% physical bulk)',
    },
  },
  ironbarbs: {
    defense: {
      multiplier: 1.125,
      effect: 'Damages attackers on contact (effective +12.5% physical bulk)',
    },
  },
  liquidooze: {
    hp: {
      multiplier: 1.1,
      effect:
        'Damages draining moves instead of healing (effective +10% HP vs drain)',
    },
  },
  aftermath: {
    hp: {
      multiplier: 1.25,
      effect:
        'Damages attacker when KOed by contact (effective +25% revenge value)',
    },
  },
  cursedbody: {
    defense: {
      multiplier: 1.3,
      effect:
        '30% chance to disable move on contact (effective +30% disruption)',
    },
  },
  mummy: {
    defense: {
      multiplier: 1.2,
      effect:
        'Changes attacker ability to Mummy on contact (effective +20% disruption)',
    },
  },
  wanderingspirit: {
    defense: {
      multiplier: 1.2,
      effect: 'Swaps abilities on contact (effective +20% disruption)',
    },
  },
  perishbody: {
    hp: {
      multiplier: 1.5,
      effect:
        'Both Pokémon faint in 3 turns on contact (effective +50% mutual destruction)',
    },
  },

  // === ABILITIES WITH NO STAT EFFECTS (but included for completeness) ===
  runaway: {
    speed: {
      multiplier: 1.05,
      effect: 'Can always flee from wild Pokémon (effective +5% escape rate)',
    },
  },
  pickup: {
    hp: {
      multiplier: 1.02,
      effect: 'May pick up items after battle (effective +2% resource gain)',
    },
  },
  honeygather: {
    hp: {
      multiplier: 1.02,
      effect: 'May gather Honey after battle (effective +2% resource gain)',
    },
  },
  illuminate: {
    speed: {
      multiplier: 1.02,
      effect: 'Increases wild encounter rate (effective +2% encounter rate)',
    },
  },
  synchronize: {
    hp: {
      multiplier: 1.05,
      effect: 'Passes status to attacker (effective +5% status deterrent)',
    },
  },
  cutecharm: {
    defense: {
      multiplier: 1.3,
      effect:
        '30% chance to infatuate on contact (effective +30% physical deterrent)',
    },
  },
  compoundeyes: {
    attack: {
      multiplier: 1.3,
      effect: '+30% accuracy for moves (effective +30% hit rate)',
    },
    specialattack: {
      multiplier: 1.3,
      effect: '+30% accuracy for moves (effective +30% hit rate)',
    },
  },
  noguard: {
    attack: {
      multiplier: 1.1,
      effect: 'All moves hit (both ways) (effective +10% consistency)',
    },
    specialattack: {
      multiplier: 1.1,
      effect: 'All moves hit (both ways) (effective +10% consistency)',
    },
  },
  victorystar: {
    attack: {
      multiplier: 1.1,
      effect: '+10% accuracy for team (effective +10% hit rate)',
    },
    specialattack: {
      multiplier: 1.1,
      effect: '+10% accuracy for team (effective +10% hit rate)',
    },
  },
  superluck: {
    attack: {
      multiplier: 1.125,
      effect: 'Higher critical hit ratio (effective +12.5% damage)',
    },
    specialattack: {
      multiplier: 1.125,
      effect: 'Higher critical hit ratio (effective +12.5% damage)',
    },
  },
  sniper: {
    attack: {
      multiplier: 1.5,
      effect:
        'Critical hits deal 3× damage instead of 2× (effective +50% crit power)',
    },
    specialattack: {
      multiplier: 1.5,
      effect:
        'Critical hits deal 3× damage instead of 2× (effective +50% crit power)',
    },
  },
  stench: {
    attack: {
      multiplier: 1.1,
      effect: '10% chance to flinch (effective +10% disruption)',
    },
    specialattack: {
      multiplier: 1.1,
      effect: '10% chance to flinch (effective +10% disruption)',
    },
  },
  serenegrace: {
    attack: {
      multiplier: 1.2,
      effect: 'Doubles secondary effect chance (effective +20% utility)',
    },
    specialattack: {
      multiplier: 1.2,
      effect: 'Doubles secondary effect chance (effective +20% utility)',
    },
  },
  rainbowscales: {
    specialdefense: {
      multiplier: 2,
      effect: 'Halves special damage in sun (effective double special bulk)',
    },
  },
  hydration: {
    hp: {
      multiplier: 1.1,
      effect: 'Cures status in rain (effective +10% HP consistency)',
    },
  },
  shedskin: {
    hp: {
      multiplier: 1.1,
      effect:
        '30% chance to cure status each turn (effective +10% HP consistency)',
    },
  },
  earlybird: {
    hp: {
      multiplier: 1.05,
      effect: 'Wakes up twice as fast (effective +5% sleep resistance)',
    },
  },
  tangledfeet: {
    speed: {
      multiplier: 1.2,
      effect: 'Doubles evasion when confused (effective +20% dodge rate)',
    },
  },
  snowcloak: {
    speed: {
      multiplier: 1.2,
      effect: '+20% evasion in hail (effective +20% dodge rate)',
    },
  },
  sandveil: {
    speed: {
      multiplier: 1.2,
      effect: '+20% evasion in sandstorm (effective +20% dodge rate)',
    },
  },
  arenatrap: {
    speed: {
      multiplier: 1.1,
      effect: 'Prevents opponent from switching (effective +10% control)',
    },
  },
  shadowtag: {
    speed: {
      multiplier: 1.1,
      effect: 'Prevents opponent from switching (effective +10% control)',
    },
  },
  magnetpull: {
    speed: {
      multiplier: 1.1,
      effect:
        'Prevents Steel types from switching (effective +10% control vs Steel)',
    },
  },
  soundproof: {
    hp: {
      multiplier: 1.2,
      effect: 'Immune to sound moves (effective +20% HP vs sound moves)',
    },
  },
  damp: {
    hp: {
      multiplier: 1.1,
      effect: 'Prevents explosion moves (effective +10% HP vs explosions)',
    },
  },
  airlock: {
    attack: {
      multiplier: 1.05,
      effect: 'Negates weather effects (effective +5% consistency)',
    },
    defense: {
      multiplier: 1.05,
      effect: 'Negates weather effects (effective +5% consistency)',
    },
    specialattack: {
      multiplier: 1.05,
      effect: 'Negates weather effects (effective +5% consistency)',
    },
    specialdefense: {
      multiplier: 1.05,
      effect: 'Negates weather effects (effective +5% consistency)',
    },
    speed: {
      multiplier: 1.05,
      effect: 'Negates weather effects (effective +5% consistency)',
    },
  },
  cloudnine: {
    attack: {
      multiplier: 1.05,
      effect: 'Negates weather effects (effective +5% consistency)',
    },
    defense: {
      multiplier: 1.05,
      effect: 'Negates weather effects (effective +5% consistency)',
    },
    specialattack: {
      multiplier: 1.05,
      effect: 'Negates weather effects (effective +5% consistency)',
    },
    specialdefense: {
      multiplier: 1.05,
      effect: 'Negates weather effects (effective +5% consistency)',
    },
    speed: {
      multiplier: 1.05,
      effect: 'Negates weather effects (effective +5% consistency)',
    },
  },

  // === GENERATION 8+ ABILITIES ===
  cottondown: {
    speed: {
      multiplier: 0.5,
      effect:
        'Lowers all opponents Speed when hit (effective team speed control)',
    },
  },
  mirrorarmor: {
    defense: {
      multiplier: 1.5,
      effect:
        'Reflects stat drops back to attacker (effective +50% stat protection)',
    },
    specialdefense: {
      multiplier: 1.5,
      effect:
        'Reflects stat drops back to attacker (effective +50% stat protection)',
    },
  },
  gulpmissile: {
    hp: {
      multiplier: 1.25,
      effect:
        'Damages attacker when using Surf/Dive (effective +25% HP vs contact)',
    },
  },
  stalwart: {
    attack: {
      multiplier: 1.1,
      effect: 'Ignores redirection (effective +10% accuracy)',
    },
    specialattack: {
      multiplier: 1.1,
      effect: 'Ignores redirection (effective +10% accuracy)',
    },
  },
  propellertail: {
    attack: {
      multiplier: 1.1,
      effect: 'Ignores redirection (effective +10% accuracy)',
    },
    specialattack: {
      multiplier: 1.1,
      effect: 'Ignores redirection (effective +10% accuracy)',
    },
  },
  sandforce: {
    attack: {
      multiplier: 1.3,
      effect: '+30% Rock/Ground/Steel moves in sandstorm',
    },
    specialattack: {
      multiplier: 1.3,
      effect: '+30% Rock/Ground/Steel moves in sandstorm',
    },
  },
  ripen: {
    hp: {
      multiplier: 1.2,
      effect: 'Doubles berry effects (effective +20% HP from berries)',
    },
  },
  powerspot: {
    attack: {
      multiplier: 1.3,
      effect: '+30% power to allies moves (team support)',
    },
    specialattack: {
      multiplier: 1.3,
      effect: '+30% power to allies moves (team support)',
    },
  },
  mimicry: {
    defense: {
      multiplier: 1.2,
      effect: 'Type changes with terrain (effective +20% STAB coverage)',
    },
    specialdefense: {
      multiplier: 1.2,
      effect: 'Type changes with terrain (effective +20% STAB coverage)',
    },
  },
  screencleaner: {
    attack: {
      multiplier: 1.2,
      effect: 'Removes screens on entry (effective +20% damage vs screens)',
    },
    specialattack: {
      multiplier: 1.2,
      effect: 'Removes screens on entry (effective +20% damage vs screens)',
    },
  },
  steelyspirit: {
    attack: { multiplier: 1.5, effect: '+50% Steel move power for team' },
    specialattack: {
      multiplier: 1.5,
      effect: '+50% Steel move power for team',
    },
  },
  gorillatattics: {
    attack: {
      multiplier: 1.5,
      effect: '+50% Grass move power and priority (Grassy Glide boost)',
    },
  },
  neutralizinggas: {
    attack: {
      multiplier: 1.1,
      effect: 'Suppresses all abilities (effective +10% consistency)',
    },
    defense: {
      multiplier: 1.1,
      effect: 'Suppresses all abilities (effective +10% consistency)',
    },
    specialattack: {
      multiplier: 1.1,
      effect: 'Suppresses all abilities (effective +10% consistency)',
    },
    specialdefense: {
      multiplier: 1.1,
      effect: 'Suppresses all abilities (effective +10% consistency)',
    },
    speed: {
      multiplier: 1.1,
      effect: 'Suppresses all abilities (effective +10% consistency)',
    },
  },
  pastelveil: {
    hp: {
      multiplier: 1.1,
      effect: 'Prevents poison for team (effective +10% HP vs poison)',
    },
  },
  hungerswitch: {
    attack: {
      multiplier: 1.5,
      effect: 'Switches between forms each turn (shown as average)',
    },
    defense: {
      multiplier: 1.5,
      effect: 'Switches between forms each turn (shown as average)',
    },
    specialattack: {
      multiplier: 1.5,
      effect: 'Switches between forms each turn (shown as average)',
    },
    specialdefense: {
      multiplier: 1.5,
      effect: 'Switches between forms each turn (shown as average)',
    },
    speed: {
      multiplier: 1.5,
      effect: 'Switches between forms each turn (shown as average)',
    },
  },
  unseenfist: {
    attack: {
      multiplier: 1.1,
      effect: 'Contact moves ignore protection (effective +10% accuracy)',
    },
  },
  curiousmedicine: {
    attack: {
      multiplier: 1.1,
      effect: 'Resets stat changes on entry (effective +10% consistency)',
    },
    defense: {
      multiplier: 1.1,
      effect: 'Resets stat changes on entry (effective +10% consistency)',
    },
    specialattack: {
      multiplier: 1.1,
      effect: 'Resets stat changes on entry (effective +10% consistency)',
    },
    specialdefense: {
      multiplier: 1.1,
      effect: 'Resets stat changes on entry (effective +10% consistency)',
    },
    speed: {
      multiplier: 1.1,
      effect: 'Resets stat changes on entry (effective +10% consistency)',
    },
  },
  transistor: {
    specialattack: { multiplier: 1.5, effect: '+50% Electric move power' },
  },
  dragonsmaw: {
    attack: { multiplier: 1.5, effect: '+50% Dragon move power' },
  },
  chillingneigh: {
    attack: { multiplier: 1.5, effect: '+1 Attack when KOing an opponent' },
  },
  grimneigh: {
    specialattack: {
      multiplier: 1.5,
      effect: '+1 Sp. Attack when KOing an opponent',
    },
  },
  asoneice: {
    attack: {
      multiplier: 1.5,
      effect: 'Combines Unnerve and Chilling Neigh (+1 Attack on KO)',
    },
  },
  asoneshadow: {
    specialattack: {
      multiplier: 1.5,
      effect: 'Combines Unnerve and Grim Neigh (+1 Sp. Attack on KO)',
    },
  },
};

/**
 * Calculates how a Pokémon's ability affects a specific stat.
 *
 * This function takes a Pokémon's ability and applies its effect to a base stat value.
 * It handles various types of stat modifications including:
 * - Direct multipliers (e.g., "Huge Power" doubles Attack)
 * - Conditional boosts (e.g., "Guts" gives +50% Attack when statused)
 * - Multiple stat effects (e.g., "Solar Power" affects multiple stats)
 *
 * @example
 * // Calculate how Huge Power affects Attack stat
 * const { modified, effect } = calculateAbilityEffect("huge-power", "attack", 100);
 * // Returns: { modified: 200, effect: "Doubles Attack stat" }
 *
 * @example
 * // Calculate how Chlorophyll affects Speed
 * const { modified, effect } = calculateAbilityEffect("chlorophyll", "speed", 90);
 * // Returns: { modified: 180, effect: "Doubles Speed in sun (shown as if sunny)" }
 *
 * @param abilityName - The name of the ability (e.g., "huge-power", "guts")
 * @param statName - The name of the stat being modified (e.g., "attack", "speed")
 * @param baseValue - The base value of the stat before ability effects
 * @returns An object containing:
 *          - modified: The new stat value after ability effects
 *          - effect: A description of how the ability affects this stat
 */
export const calculateAbilityEffect = (
  abilityName: string,
  statName: string,
  baseValue: number
): { modified: number; effect: string } => {
  const ability = abilityName.toLowerCase().replace('-', '');
  const stat = statName.toLowerCase().replace('-', '');

  const abilityKey = ability.replace(/[^a-z0-9]/g, '');
  const statKey = stat.replace(/[^a-z]/g, '');

  if (abilityEffects[abilityKey] && abilityEffects[abilityKey][statKey]) {
    const effect = abilityEffects[abilityKey][statKey];
    let modified = baseValue;

    if (effect.multiplier) {
      modified = Math.floor(baseValue * effect.multiplier);
    } else if (effect.boost) {
      modified = baseValue + effect.boost;
    }

    return {
      modified,
      effect: effect.effect,
    };
  }

  return {
    modified: baseValue,
    effect: 'No stat modification from this ability',
  };
};
