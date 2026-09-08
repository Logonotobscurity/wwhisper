export const DAPF_STRATEGIES = [
  'DIRECT',
  'CLARIFY',
  'QUESTION_FIRST',
  'ANALOGY',
  'STORY_FIRST',
  'COMMUNITY_REFERENCE',
  'PROVERB',
  'MULTIPLE_INTERPRETATIONS',
  'REPAIR',
  'ESCALATE',
  'NONE',
] as const;

export type DAPFStrategy = (typeof DAPF_STRATEGIES)[number];

export type EvidenceStatus =
  | 'validated'
  | 'user_provided'
  | 'source_derived'
  | 'unavailable'
  | 'disputed';

export interface DAPFDecision {
  task: { domain?: string; goal?: string; stakes?: string };
  context: { known: string[]; missing: string[] };
  language: { primary?: string; register?: string; codeSwitching: boolean };
  discourse: { candidates: DAPFStrategy[]; selected: DAPFStrategy };
  culturalGrounding: {
    relevant: boolean;
    referenceType?: string;
    evidenceStatus: EvidenceStatus;
  };
  uncertainty: {
    interpretationConfidence: number;
    contextSufficiency: number;
    evidenceCoverage: number;
    discourseAlignment: number;
    culturalRelevance: number;
  };
}
