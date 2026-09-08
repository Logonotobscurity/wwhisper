# System Architecture

```text
USER
  -> AssemblyAI Voice Layer
  -> Conversation State
  -> DAPF Orchestrator
       |-- Task Grounding
       |-- Audience Context
       |-- Linguistic Mode
       |-- Discourse Strategy
       `-- Cultural Grounding
  -> Epistemic Auditor
       |-- Coverage
       |-- Evidence
       |-- Representation
       `-- Frame Challenge
  -> Decision Engine
       |-- ANSWER
       |-- CLARIFY
       |-- REPAIR
       |-- MULTIPLE_INTERPRETATIONS
       `-- ESCALATE
  -> Response Generator
  -> AssemblyAI
  -> USER
  -> Correction / Failure Case / Evaluation
```

## Ownership

**AssemblyAI:** realtime WebSocket, speech recognition, voice synthesis, turn detection, interruptions, session lifecycle and tool transport.

**wwhisper:** conversation state, DAPF, evidence/provenance, uncertainty, auditing, correction, failure cases, evaluation and regression.

Keep the AssemblyAI adapter replaceable.

## Why not multi-agent?

A giant agent swarm adds latency, coordination failures, cost and debugging complexity without being required for the MVP. Use focused semantic modules/tool calls instead.