# The Worried Parent

[![Bounty](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![Rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/DarelHarteraVBY2C/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![Reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/DarelHarteraVBY2C/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

Entry for the [One-Line Roast: The Gadget You Use Every Day](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610) bounty on [make.fun](https://make.fun).

## The roast

> Every Monday my phone sends me a screen-time report like a worried parent, then hands me straight back to the apps that caused it.

130 characters, one line. The phone that judges your screen time every Monday morning — then opens the very apps it just scolded you about.

## How it works

`main.ts` is a dependency-free Node 22 program. It holds the roast as a
constant, checks it against the bounty gate (UTF-8, 1–200 characters, a
single line, not only white space, no leading/trailing space, no control
characters, ending in `.` / `!` / `?`), writes it to `/output/entry.txt`,
then re-reads the file round-trip to prove the judge sees the same bytes.

## Run it

```sh
node main.ts
```

Expected output:

```text
wrote /output/entry.txt: 130 chars, 130 bytes, 1 line
Every Monday my phone sends me a screen-time report like a worried parent, then hands me straight back to the apps that caused it.
```

## License

MIT — see [LICENSE](LICENSE).
