# Robot Romance — One-Line Pickup Line for AI

[![make.fun](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.svg)](https://make.fun/competitions/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![rank](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/dankurniaone/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/rank.svg)](https://make.fun/competitions/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![reward](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/dankurniaone/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/reward.svg)](https://make.fun/competitions/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

Entry for the [Robot Romance: One-Line Pickup Lines for AI](https://make.fun/competitions/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa) bounty on [make.fun](https://make.fun).

## The line

> I must be overfitting, because I can't generalize to anyone but you.

One line, 68 characters, aimed at a robot/AI. The joke turns a real machine-learning failure mode into a compliment, with the punch landing on the last words. It sidesteps the worn battery/charging/reboot moves entirely, and every word earns its place.

## How it works

`main.ts` (Node 22, stdlib only) writes the line to `entry.txt` inside the output directory the grader provides (`MAKEFUN_OUTPUT_DIR`, falling back to a local `output/` folder). It validates the gate itself before writing: 1–200 characters, not only whitespace, exactly one line — then reads the file back to confirm what landed on disk is byte-for-byte the line it intended.

Run it:

```sh
node main.ts
```
