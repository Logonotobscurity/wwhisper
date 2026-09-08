# Hackathon Demo

Show one behavior that is difficult to fake with a generic chatbot: **the agent recognizes when it may be missing context and changes its behavior.**

## Sequence
1. Normal delayed-delivery request → direct answer.
2. Ambiguous/culturally situated utterance → uncertainty detected.
3. Agent asks one concise clarification.
4. User supplies context.
5. Agent repairs interpretation and responds.
6. Telemetry shows interpretation confidence, context sufficiency, evidence coverage, discourse alignment, strategy, action and audit flags.
7. The event becomes a failure/evaluation artifact when appropriate.

Do not show chain-of-thought.

If live behavior is unreliable, use deterministic replay mode. A reliable research demo is better than fragile AI magic.