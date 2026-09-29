# Research Literature Addendum — 2026-09-29

## 1. African-language task evaluation

INJONGO is a native-speaker-generated benchmark covering intent detection and slot filling across 16 African languages. It supports evaluating PAL/DAPF without treating African language performance as a simple translation of English benchmarks.

Source:
https://aclanthology.org/2025.acl-long.464/

## 2. Structured uncertainty for tool calling

Structured Uncertainty guided Clarification for LLM Agents defines uncertainty over tool parameters and uses Expected Value of Perfect Information (EVPI) to select clarifying questions. This is directly relevant to PAL's context-sufficiency and critical-field logic.

Source:
https://aclanthology.org/2026.findings-acl.2028/

## 3. African speech

Use African-language speech benchmarks and native-speaker evaluation as the evidence layer for PAL voice claims. Do not infer cultural robustness from ASR WER alone.

## 4. DAPF research boundary

DAPF remains a hypothesis-driven framework until controlled evaluation demonstrates gains over the specified baselines. A culturally decorated response is not automatically a culturally appropriate response.

## 5. Regression principle

Every confirmed cultural or tool-calling failure becomes a regression case. The benchmark corpus should grow from observed failures rather than only from theoretical categories.
