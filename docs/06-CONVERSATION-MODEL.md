# Conversation Model

## Turn lifecycle
`INPUT_STARTED -> PARTIAL_TRANSCRIPT -> FINAL_TRANSCRIPT -> CONTEXT_UPDATE -> DAPF_DECISION -> AUDIT -> RESPONSE_DECISION -> RESPONSE -> FEEDBACK`

## Minimum state
- session ID
- turn ID
- latest user utterance
- task
- audience/relationship context
- language mode
- known context
- unresolved ambiguity
- DAPF decision
- audit result
- response action
- correction/failure events
- timestamps and latency

## Rules
1. Stale context must not silently become current fact.
2. User facts and model inferences are distinct.
3. Unresolved ambiguity is explicit.
4. Provider event payloads stay outside semantic state.
5. State is serializable for replay.

For interruptions, distinguish generated-but-not-spoken, spoken, interrupted and superseded output. Do not record interrupted tool results as completed conversational actions.