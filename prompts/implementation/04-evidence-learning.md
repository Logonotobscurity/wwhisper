# Implementation Prompt 04 — Evidence and Learning

Implement the evidence, correction and failure-case loop.

## Requirements
Create provenance-bearing knowledge records, correction records, failure cases and regression serialization.

When a user corrects the system:
1. acknowledge
2. update current state
3. identify missing dimension
4. optionally create a failure case
5. never generalize the correction into a population-wide cultural rule automatically

Failure case minimum fields:
- `failure_type`
- `input`
- `agent_interpretation`
- `user_correction`
- `missing_dimension`
- `context`
- `regression_test`

Acceptance: a correction can be replayed as a regression test and the system distinguishes user-provided, validated, source-derived, disputed and unavailable evidence.