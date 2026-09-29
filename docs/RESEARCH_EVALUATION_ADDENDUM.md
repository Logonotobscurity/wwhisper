# Research Evaluation Addendum — 2026-09-29

## AfriSwitchCare contract

The current AfriSwitchCare dataset card describes:
- 108 simulated clinical conversations;
- 12.11 hours;
- nine African languages;
- a single test split;
- evaluation-only use.

It does not document a train/test split.

Therefore the benchmark runner must not construct or assume train/test speaker splitting from AfriSwitchCare. Any development split must use a separately documented dataset that actually provides one.

Source:
https://huggingface.co/datasets/intronhealth/AfriSwitchCare

## Benchmark strata

Keep these separate:
- AfriSwitch: in-the-wild code-switched speech
- AfriSwitchCare: simulated clinical code-switched speech
- controlled Nigerian utterances: internally authored/recorded evaluation

Never pool them into one headline performance number without explicit stratification.
