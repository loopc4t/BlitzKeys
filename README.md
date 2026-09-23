# ⚡ BlitzKeys

**Active recall vocabulary practice for English learners.**

BlitzKeys is a browser-based typing trainer built for intermediate English learners who understand more than they can produce. It pairs fill-in-the-blank vocabulary exercises with full-sentence typing, so you're not just recognizing the right word — you're producing it, under a little time pressure, until it becomes automatic.

Live at: **[loopc4t.github.io/BlitzKeys](https://loopc4t.github.io/BlitzKeys/)**

## Why it works

Most self-taught learners get plenty of comprehensible input (shows, podcasts, books) and even some production (writing, speaking), but rarely drill pure fluency — taking language they already half-know and speeding it up until it's fast and automatic. That's the one strand BlitzKeys focuses on.

Each round shows a sentence with a word missing and a few options. Pick the right one, then **type the entire sentence** and press Enter. Typing the full sentence, not just the blank, forces you to notice what you don't yet control and correct it immediately.

## Features

- **2,603 exercises** built from 47,327 words, covering collocations, idioms, phrasal verbs, American English expressions, and literary/noir vocabulary
- **WPM-based scoring** with streak tracking and an estimated **EFL level** (A2 → B1 → B2 → C1) inferred from sustained typing-speed streaks
- **Level progression** — every 1,000 points levels you up, with a Zelda (NES)–inspired color palette (Hyrule Castle, Hyrule Field, Death Mountain, Zora's Domain, Lost Woods, Ganon's Tower, Gerudo Desert, Triforce Chamber)
- **Postcard achievement cards** — 9 collectible cards with rarity tiers, unlocked by hitting typing-speed streak milestones, complete with a Balatro-style reveal animation
- **Bonus round** — after every 10 correct sentences, a 2-minute free-typing round starts (10 points per word), seeded with inspirational sentence-starter prompts
- Quick links to LDOCE, Oxford, Urban Dictionary, and YouGlish for looking up anything unfamiliar mid-session

## Tech

Plain HTML/CSS/JS, no build step, no dependencies. Runs entirely client-side.

```
index.html    – markup and modals (About, Cards)
styles.css    – theming and layout
script.js     – game logic (scoring, leveling, EFL estimation, bonus round, cards)
data.js       – exercise bank
free_texts.js – bonus-round writing prompts
words.js      – vocabulary data
```

## Running locally

No build tools required — just serve the folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## The pedagogy, briefly

- **Stephen Krashen** — comprehensible input is the foundation; BlitzKeys is a complement to it, not a replacement.
- **Merrill Swain** — comprehension alone isn't enough; being pushed to produce language exposes the gap between passive knowledge and active use.
- **Paul Nation** — a balanced routine needs input, output, deliberate study, and fluency development. Fluency is the strand most self-directed learners skip, and it's what BlitzKeys drills.

## License

Personal project — no license specified yet.
