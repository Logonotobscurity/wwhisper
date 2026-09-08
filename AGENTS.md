# AGENTS.md

## Mission
Build `wwhisper` as a research-grade, demoable discourse-adaptive voice agent on top of AssemblyAI's Voice Agent API.

Core claim: **the agent can detect when conventional AI may be missing culturally or contextually significant meaning.**

## Source of truth
Before changing AssemblyAI integration, read the current official Voice Agent API docs. Do not rely on remembered event names, payloads, authentication, audio formats, or tool semantics.

- https://www.assemblyai.com/docs/voice-agents/voice-agent-api
- https://www.assemblyai.com/docs/voice-agents/voice-agent-api/session-configuration
- https://www.assemblyai.com/docs/voice-agents/voice-agent-api/events-reference
- https://www.assemblyai.com/docs/coding-agent-prompts

## Architecture invariants
1. AssemblyAI owns realtime voice transport, STT, TTS, turn detection, interruptions and session mechanics.
2. `wwhisper` owns semantic interpretation, discourse adaptation, evidence, uncertainty, audit, correction and evaluation.
3. Culture is contextual evidence, never a demographic shortcut.
4. DAPF must be able to select `NONE`.
5. User corrections are scoped interaction evidence, not universal cultural truth.
6. Cultural references require provenance or explicit user grounding.
7. Interpretation confidence and context sufficiency are separate.
8. The auditor may disagree with the interpreter.
9. Material uncertainty should trigger clarification rather than invention.
10. Never expose chain-of-thought; expose only structured decision telemetry.
11. Reusable failures become regression tests.
12. Keep the first demo narrow and reliable.

## Engineering rules
- TypeScript by default.
- Small modules and explicit interfaces.
- Validate external inputs at boundaries.
- Keep provider-specific code under `src/voice/assemblyai`.
- Keep DAPF provider-agnostic.
- Version prompts as readable Markdown.
- Never commit secrets or log API keys.
- Prefer structured event logs and explicit uncertainty.
- Avoid premature abstractions and unnecessary dependencies.

## DAPF strategies
`DIRECT`, `CLARIFY`, `QUESTION_FIRST`, `ANALOGY`, `STORY_FIRST`, `COMMUNITY_REFERENCE`, `PROVERB`, `MULTIPLE_INTERPRETATIONS`, `REPAIR`, `ESCALATE`, `NONE`.

Never select a strategy solely from ethnicity, nationality, name, location, religion, class, or presumed cultural identity.

## Definition of done
A user can speak to the agent; the system detects an ambiguous/culturally situated utterance; it clarifies instead of guessing; receives clarification; repairs its interpretation; produces a concise spoken response; and records the event for evaluation/regression.

## Change discipline
For significant changes: state the invariant, implement the smallest coherent change, add/update tests, run checks, update docs, and record unresolved limitations.
