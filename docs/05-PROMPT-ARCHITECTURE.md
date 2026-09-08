# Prompt Architecture

Prompts are versioned artifacts, not scattered strings.

```text
Constitution
  -> Core Voice System
  -> DAPF Orchestrator
  -> Epistemic Auditor
  -> Decision / Repair
  -> Response Generator
```

Each prompt should document purpose, input contract, output contract, invariants, examples, failure modes and version.

The final response generator receives the structured decision state required to respond. It must not receive or expose hidden chain-of-thought.

Prompt changes should be evaluated against regression cases.