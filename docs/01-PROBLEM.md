# Problem Definition

Most voice agents optimize for transcription, intent detection and answer generation. That works for explicit requests but can fail when meaning depends on context, relationship, register, code-switching, local conventions or culturally situated references.

The critical failure is not only **wrong interpretation**. It is **failure to know that something may be missing**.

A fluent answer can still be incomplete, socially inappropriate, patronizing, culturally performative, unsupported, or operationally wrong.

## Design response

Instead of:

`utterance -> answer`

`wwhisper` uses:

`utterance -> context assessment -> discourse strategy -> evidence/uncertainty audit -> decision -> response`

## Foundational distinction

Interpretation confidence is not context sufficiency. An agent can be highly confident about a literal interpretation while lacking enough context to safely act on it.