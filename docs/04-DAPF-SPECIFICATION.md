# DAPF Specification

DAPF = **Discourse-Adaptive Prompting Framework**.

## Dimensions
1. **Task grounding:** domain, goal, stakes, requested outcome.
2. **Audience context:** roles, relationship, register, setting.
3. **Linguistic mode:** primary language, code-switching, formality and supported variant signals.
4. **Discourse strategy:** choose an appropriate response mode.
5. **Cultural grounding:** use cultural references only when relevant and grounded.
6. **Action close:** give a useful next step when appropriate.

## Strategies
`DIRECT`, `CLARIFY`, `QUESTION_FIRST`, `ANALOGY`, `STORY_FIRST`, `COMMUNITY_REFERENCE`, `PROVERB`, `MULTIPLE_INTERPRETATIONS`, `REPAIR`, `ESCALATE`, `NONE`.

DAPF **must** be able to select `NONE`.

## Cultural evidence status
`validated`, `user_provided`, `source_derived`, `unavailable`, `disputed`.

## Separate uncertainty dimensions
- `interpretation_confidence`
- `context_sufficiency`
- `evidence_coverage`
- `discourse_alignment`
- `cultural_relevance`

Normalize each to 0–1 for evaluation. Never collapse them into one confidence number.

## Mandatory policy
Never infer discourse strategy solely from ethnicity, nationality, name, location, religion, class or presumed cultural identity. If evidence is insufficient, choose a non-cultural strategy or clarify.