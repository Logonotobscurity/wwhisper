# wwhisper

## Discourse-Adaptive Voice Agent

`wwhisper` is a research-oriented voice-agent system built on AssemblyAI's Voice Agent API. Its purpose is not merely to make a voice agent sound culturally fluent. It is designed to detect when ordinary interpretation may be missing context, evidence, discourse conventions, or culturally significant meaning — and to respond by adapting, asking, repairing, or escalating rather than guessing.

### Core thesis

> Culture should be treated as contextual evidence, not as a demographic shortcut.

### MVP

- Domain: SMME customer communication
- Scenario: delayed B2B delivery
- Language experiment: English with validated Yoruba/code-switching cases
- Killer behavior: the agent knows when it should ask rather than assume

### Build order

1. Repository and contracts
2. Conversation state
3. DAPF decision engine
4. Epistemic auditor
5. Decision/repair engine
6. AssemblyAI realtime integration
7. Evidence/provenance layer
8. Human correction and failure cases
9. Benchmark and regression suite
10. Demo telemetry
11. Hardening and submission

See `AGENTS.md` and `docs/13-ROADMAP.md`.
