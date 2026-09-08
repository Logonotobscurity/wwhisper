# Implementation Prompt 01 — Bootstrap

You are implementing `wwhisper` from an empty repository.

## Objective
Create the smallest production-shaped TypeScript project supporting the architecture in `docs/03-SYSTEM-ARCHITECTURE.md`.

## Requirements
1. Read `AGENTS.md`.
2. Create a TypeScript Node project.
3. Add formatting, linting, type checking and test infrastructure.
4. Create the documented directory structure.
5. Add environment validation for `ASSEMBLYAI_API_KEY` and `PORT`.
6. Create typed contracts for conversation state, DAPF decision, audit result, knowledge record, correction, failure case and evaluation event.
7. Keep AssemblyAI types under `src/voice/assemblyai`.
8. Do not implement the voice WebSocket yet.
9. Add unit tests for contract validation.
10. Document exact local setup commands.

## Acceptance
Install, typecheck, lint and tests pass. No secrets are committed. Documentation does not claim unimplemented behavior.