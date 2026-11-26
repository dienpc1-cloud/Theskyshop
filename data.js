/* Skyshop catalog. SAMPLE DATA: replace prices, stock and dates with your own.
   One figure per line:  Name | game | element | type | condition | price | stock | added (YYYY-MM-DD) | photo (optional file path)
   game:      ssa giants swap trap super imag
   element:   fire water earth air life undead magic tech light dark kaos
   type:      core giant swapper trapmaster trap supercharger vehicle sensei crystal variant
   condition: loose boxed sealed
*/
window.SKYSHOP = {
  currency: 'EUR',
  freeShippingFrom: 50, // sample threshold for the cart progress bar
  /* Deals (SAMPLE): Name | condition | old price. The figure's price above is the deal price. */
  deals: `
Star Strike|loose|11.95
Ambush|loose|9.95
King Pen|loose|9.95
Barbella|loose|9.95
Pain-Yatta|loose|10.95
Air Strike|loose|10.95
Hot Head|loose|12.95
Wash Buckler|loose|14.95
Enigma|loose|27.95
Knight Light|loose|24.95
`,
  games: [
    { id: 'ssa',    name: "Spyro's Adventure", year: 2011 },
    { id: 'giants', name: 'Giants',            year: 2012 },
    { id: 'swap',   name: 'Swap Force',        year: 2013 },
    { id: 'trap',   name: 'Trap Team',         year: 2014 },
    { id: 'super',  name: 'SuperChargers',     year: 2015 },
    { id: 'imag',   name: 'Imaginators',       year: 2016 }
  ],
  figures: `
Spyro|ssa|magic|core|loose|8.95|4|2026-10-02
Trigger Happy|ssa|tech|core|loose|6.50|6|2026-09-14
Gill Grunt|ssa|water|core|loose|5.95|5|2026-09-14
Eruptor|ssa|fire|core|loose|5.95|3|2026-09-14
Stealth Elf|ssa|life|core|boxed|14.95|1|2026-11-18
Chop Chop|ssa|undead|core|loose|5.50|4|2026-09-14
Hex|ssa|undead|core|boxed|18.00|1|2026-10-21
Bash|ssa|earth|core|loose|4.95|7|2026-09-14
Dino-Rang|ssa|earth|core|loose|4.95|2|2026-09-20
Prism Break|ssa|earth|core|loose|5.50|3|2026-09-20
Terrafin|ssa|earth|core|sealed|24.95|1|2026-11-22
Sonic Boom|ssa|air|core|loose|7.95|2|2026-09-20
Whirlwind|ssa|air|core|loose|5.95|3|2026-09-20
Warnado|ssa|air|core|loose|4.95|0|2026-09-20
Lightning Rod|ssa|air|core|loose|5.50|4|2026-09-20
Wham-Shell|ssa|water|core|loose|4.95|2|2026-09-20
Zap|ssa|water|core|loose|5.50|3|2026-09-20
Slam Bam|ssa|water|core|loose|4.95|2|2026-09-20
Ignitor|ssa|fire|core|loose|4.95|3|2026-09-20
Flameslinger|ssa|fire|core|loose|5.50|2|2026-09-20
Sunburn|ssa|fire|core|boxed|16.50|1|2026-10-21
Drill Sergeant|ssa|tech|core|loose|4.95|3|2026-09-20
Drobot|ssa|tech|core|loose|6.95|2|2026-09-20
Boomer|ssa|tech|core|loose|4.95|0|2026-09-20
Double Trouble|ssa|magic|core|loose|5.95|2|2026-09-20
Wrecking Ball|ssa|magic|core|loose|5.50|3|2026-09-20
Voodood|ssa|magic|core|loose|4.95|2|2026-09-20
Zook|ssa|life|core|loose|4.95|4|2026-09-20
Stump Smash|ssa|life|core|loose|4.95|3|2026-09-20
Camo|ssa|life|core|loose|6.50|1|2026-09-20
Cynder|ssa|undead|core|loose|7.50|2|2026-10-02
Ghost Roaster|ssa|undead|core|loose|6.95|1|2026-10-02
Dark Spyro|ssa|magic|variant|loose|34.95|1|2026-11-24
Tree Rex|giants|life|giant|loose|8.95|3|2026-09-28
Bouncer|giants|tech|giant|loose|9.95|2|2026-09-28
Crusher|giants|earth|giant|loose|8.95|2|2026-09-28
Eye-Brawl|giants|undead|giant|boxed|22.50|1|2026-11-10
Hot Head|giants|fire|giant|loose|9.50|2|2026-09-28
Ninjini|giants|magic|giant|loose|10.95|2|2026-09-28
Swarm|giants|air|giant|loose|11.95|1|2026-10-12
Thumpback|giants|water|giant|sealed|32.00|1|2026-11-20
Pop Fizz|giants|magic|core|loose|7.25|5|2026-09-28
Jet-Vac|giants|air|core|loose|6.95|3|2026-09-28
Chill|giants|water|core|loose|5.95|2|2026-09-28
Shroomboom|giants|life|core|loose|5.95|2|2026-09-28
Sprocket|giants|tech|core|loose|6.50|3|2026-09-28
Fright Rider|giants|undead|core|loose|7.50|1|2026-09-28
Flashwing|giants|earth|core|boxed|17.95|1|2026-10-12
Legendary Bouncer|giants|tech|variant|loose|29.95|0|2026-10-12
Wash Buckler|swap|water|swapper|loose|11.95|2|2026-10-05
Blast Zone|swap|fire|swapper|loose|10.95|2|2026-10-05
Free Ranger|swap|air|swapper|loose|9.95|3|2026-10-05
Boom Jet|swap|air|swapper|loose|9.95|1|2026-10-05
Night Shift|swap|undead|swapper|boxed|24.95|1|2026-11-15
Rattle Shake|swap|undead|swapper|loose|10.50|2|2026-10-05
Stink Bomb|swap|life|swapper|loose|9.50|2|2026-10-05
Grilla Drilla|swap|life|swapper|loose|9.95|1|2026-10-05
Hoot Loop|swap|magic|swapper|loose|11.50|2|2026-10-05
Trap Shadow|swap|magic|swapper|loose|10.95|2|2026-10-05
Magna Charge|swap|tech|swapper|loose|12.50|1|2026-10-05
Spy Rise|swap|tech|swapper|sealed|29.95|1|2026-11-19
Doom Stone|swap|earth|swapper|loose|9.95|2|2026-10-05
Rubble Rouser|swap|earth|swapper|loose|9.95|1|2026-10-05
Fire Kraken|swap|fire|swapper|loose|10.50|0|2026-10-05
Freeze Blade|swap|water|swapper|loose|10.95|2|2026-10-05
Countdown|swap|tech|core|loose|6.95|2|2026-10-05
Wind-Up|swap|tech|core|loose|6.50|3|2026-10-05
Pop Thorn|swap|air|core|loose|5.95|2|2026-10-05
Scorp|swap|earth|core|loose|5.95|2|2026-10-05
Punk Shock|swap|water|core|loose|6.50|2|2026-10-05
Fryno|swap|fire|core|loose|5.95|1|2026-10-05
Smolderdash|swap|fire|core|loose|5.95|2|2026-10-05
Bumble Blast|swap|life|core|loose|5.95|2|2026-10-05
Zoo Lou|swap|life|core|loose|6.95|1|2026-10-05
Grim Creeper|swap|undead|core|loose|6.50|3|2026-10-05
Roller Brawl|swap|undead|core|loose|6.95|2|2026-10-05
Dune Bug|swap|magic|core|loose|5.50|2|2026-10-05
Star Strike|swap|magic|core|loose|8.95|1|2026-11-08
Lava Barf Eruptor|swap|fire|variant|loose|39.00|0|2026-11-08
Wildfire|trap|fire|trapmaster|loose|9.95|3|2026-10-18
Ka-Boom|trap|tech|trapmaster|sealed|24.95|1|2026-11-25
Jawbreaker|trap|tech|trapmaster|loose|9.50|2|2026-10-18
Gearshift|trap|tech|trapmaster|loose|10.95|2|2026-10-18
Krypt King|trap|undead|trapmaster|loose|9.95|2|2026-10-18
Short Cut|trap|undead|trapmaster|loose|10.50|1|2026-10-18
Bushwhack|trap|life|trapmaster|loose|9.95|2|2026-10-18
Tuff Luck|trap|life|trapmaster|boxed|21.50|1|2026-11-12
Snap Shot|trap|water|trapmaster|loose|9.95|4|2026-10-18
Lob-Star|trap|water|trapmaster|loose|10.50|2|2026-10-18
Head Rush|trap|earth|trapmaster|loose|9.95|2|2026-10-18
Wallop|trap|earth|trapmaster|loose|9.50|2|2026-10-18
Thunderbolt|trap|air|trapmaster|loose|10.95|1|2026-10-18
Blastermind|trap|magic|trapmaster|loose|11.50|2|2026-10-18
Enigma|trap|magic|trapmaster|loose|22.95|1|2026-10-30
Knight Light|trap|light|trapmaster|loose|19.95|1|2026-11-21
Knight Mare|trap|dark|trapmaster|boxed|34.95|1|2026-11-21
Torch|trap|fire|core|loose|6.95|3|2026-10-18
Trail Blazer|trap|fire|core|loose|6.50|2|2026-10-18
Gusto|trap|air|core|loose|6.50|2|2026-10-18
Fling Kong|trap|air|core|loose|6.95|2|2026-10-18
Food Fight|trap|life|core|loose|7.95|3|2026-10-18
Funny Bone|trap|undead|core|loose|7.50|2|2026-10-18
Cobra Cadabra|trap|magic|core|loose|6.95|2|2026-10-18
Spotlight|trap|light|core|loose|24.95|1|2026-11-03
Blackout|trap|dark|core|loose|26.95|1|2026-11-03
Echo|trap|water|core|loose|22.50|1|2026-11-03
Fire Trap|trap|fire|trap|loose|4.95|6|2026-10-18
Water Trap|trap|water|trap|loose|4.95|5|2026-10-18
Undead Trap|trap|undead|trap|loose|4.95|4|2026-10-18
Light Trap|trap|light|trap|loose|14.95|1|2026-11-03
Dark Trap|trap|dark|trap|loose|14.95|1|2026-11-03
Kaos Trap|trap|kaos|trap|loose|19.95|1|2026-11-03
Spitfire|super|fire|supercharger|boxed|12.50|2|2026-10-25
Splat|super|magic|supercharger|loose|7.95|2|2026-10-25
Stormblade|super|air|supercharger|loose|6.95|3|2026-10-25
Thrillipede|super|life|supercharger|loose|6.95|2|2026-10-25
Smash Hit|super|earth|supercharger|loose|6.50|2|2026-10-25
Nightfall|super|dark|supercharger|loose|8.95|1|2026-10-25
High Volt|super|tech|supercharger|loose|6.50|2|2026-10-25
Dive-Clops|super|water|supercharger|loose|6.95|1|2026-10-25
Fiesta|super|undead|supercharger|loose|7.50|2|2026-10-25
Astroblast|super|light|supercharger|loose|8.95|1|2026-10-25
Hot Streak|super|fire|vehicle|loose|7.95|2|2026-10-25
Shark Tank|super|earth|vehicle|loose|5.95|2|2026-10-25
Sky Slicer|super|air|vehicle|loose|5.95|2|2026-10-25
Dive Bomber|super|water|vehicle|loose|5.50|3|2026-10-25
Burn-Cycle|super|fire|vehicle|loose|5.95|1|2026-10-25
Soda Skimmer|super|magic|vehicle|loose|6.50|1|2026-10-25
Sea Shadow|super|dark|vehicle|loose|9.95|1|2026-10-25
Sun Runner|super|light|vehicle|loose|9.95|0|2026-10-25
Tomb Buggy|super|undead|vehicle|loose|5.50|2|2026-10-25
King Pen|imag|water|sensei|loose|7.95|3|2026-11-01
Golden Queen|imag|earth|sensei|loose|12.95|1|2026-11-01
Wolfgang|imag|undead|sensei|loose|9.95|2|2026-11-01
Pain-Yatta|imag|magic|sensei|loose|8.50|1|2026-11-01
Ambush|imag|life|sensei|loose|7.50|2|2026-11-01
Chopscotch|imag|undead|sensei|loose|9.50|1|2026-11-01
Barbella|imag|earth|sensei|loose|7.95|2|2026-11-01
Air Strike|imag|air|sensei|loose|8.50|1|2026-11-01
Aurora|imag|fire|sensei|loose|8.95|2|2026-11-01
Crash Bandicoot|imag|life|sensei|sealed|19.95|2|2026-11-23
Dr. Neo Cortex|imag|tech|sensei|boxed|16.95|1|2026-11-23
Mysticat|imag|magic|sensei|loose|8.95|1|2026-11-01
Wild Storm|imag|air|sensei|loose|9.50|1|2026-11-01
Hood Sickle|imag|undead|sensei|loose|8.50|1|2026-11-01
Starcast|imag|dark|sensei|loose|11.95|1|2026-11-01
Tidepool|imag|water|sensei|loose|8.95|2|2026-11-01
Blaster-Tron|imag|light|sensei|loose|12.50|1|2026-11-01
Kaos|imag|kaos|sensei|loose|14.95|1|2026-11-01
Fire Creation Crystal|imag|fire|crystal|loose|4.95|5|2026-11-01
Water Creation Crystal|imag|water|crystal|loose|4.95|4|2026-11-01
Life Creation Crystal|imag|life|crystal|loose|4.95|3|2026-11-01
Magic Creation Crystal|imag|magic|crystal|loose|5.50|3|2026-11-01
Light Creation Crystal|imag|light|crystal|loose|7.95|1|2026-11-01
Dark Creation Crystal|imag|dark|crystal|loose|7.95|1|2026-11-01
`
};
