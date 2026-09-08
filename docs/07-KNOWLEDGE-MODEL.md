# Knowledge Model

Knowledge is evidence with provenance, not a bag of embeddings.

## Knowledge record
A record contains `id`, `claim`, `source_type`, `source`, `provenance`, `status`, `confidence`, `scope`, `created_at`, and `updated_at`.

Source types: `USER_PROVIDED`, `DOCUMENT`, `VALIDATED_REFERENCE`, `RESEARCH`, `SYSTEM_OBSERVATION`, `DISPUTED`.

## Cultural knowledge
Never store a broad cultural claim without scope. A user correction is evidence about the current interaction, not an automatic population-wide rule.

## Corrections
Record the original interpretation, user correction, context, missing dimension, validation status and whether it becomes a regression case.