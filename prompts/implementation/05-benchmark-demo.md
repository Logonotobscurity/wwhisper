# Implementation Prompt 05 — Benchmark and Demo

Implement the first research benchmark and demo.

## Build
1. 20–30 authored benchmark cases.
2. Four conditions: generic baseline, structured baseline, DAPF, naive culturalization.
3. Scoring rubric.
4. Replay runner.
5. Regression runner.
6. Demo telemetry.

## Metrics
Record separately: interpretation confidence, context sufficiency, evidence coverage, discourse alignment, cultural relevance, action clarity, clarification quality, appropriateness, respect, over-culturalization and response length.

## Demo
Implement the delayed-delivery scenario:

`ambiguous input -> uncertainty detected -> concise clarification -> user explanation -> repair -> useful action -> evaluation/failure event`

Do not claim statistical significance from the initial small benchmark. The benchmark is an engineering/research instrument, not evidence of universal cultural superiority.