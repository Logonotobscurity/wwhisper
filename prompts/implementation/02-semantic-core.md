# Implementation Prompt 02 — Semantic Core

Implement the DAPF semantic core without connecting to AssemblyAI.

## Build
`conversation state -> DAPF decision -> audit -> response action`

DAPF evaluates task, audience, relationship/register, linguistic mode, known/missing context, cultural relevance, evidence and uncertainty. It must be able to select `NONE`.

Auditor checks missing context, alternatives, evidence gaps, representation risks, discourse mismatch and unsupported cultural references.

Decision engine outputs `ANSWER`, `CLARIFY`, `REPAIR`, `MULTIPLE_INTERPRETATIONS` or `ESCALATE`.

## Tests
1. explicit business request -> ANSWER
2. material ambiguity -> CLARIFY
3. unsupported cultural reference -> avoid reference
4. high interpretation confidence + low context sufficiency -> CLARIFY
5. correction -> REPAIR
6. culturally themed but irrelevant case -> NONE

Never expose chain-of-thought.