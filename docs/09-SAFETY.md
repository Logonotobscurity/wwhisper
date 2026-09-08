# Safety

## Rules
- Never infer discourse strategy solely from demographic identity.
- Never fabricate proverbs, sayings, customs, community norms or linguistic meanings.
- Clarify when material uncertainty affects the requested action.
- Do not expose chain-of-thought.
- Treat user corrections as scoped interaction evidence.
- Do not autonomously execute high-impact financial, legal, medical, employment or security actions in the MVP.

## Correction handling
1. acknowledge
2. update local state
3. identify what was missing
4. optionally record a failure case
5. avoid generalizing beyond scope

Telemetry may expose selected strategy, uncertainty bands, evidence status, action and audit flags, but not hidden reasoning.