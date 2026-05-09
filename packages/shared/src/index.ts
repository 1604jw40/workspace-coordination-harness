export type WorkspaceSourceType =
  | "slack_message"
  | "github_pr"
  | "github_issue"
  | "github_review"
  | "github_comment"
  | "markdown_note";

export interface WorkspaceSource {
  readonly id: string;
  readonly type: WorkspaceSourceType;
  readonly author: string;
  readonly createdAt: string;
  readonly title?: string;
  readonly body: string;
}

export interface WorkspaceItem {
  readonly id: string;
  readonly source: WorkspaceSourceType;
  readonly participant: string;
  readonly createdAt: string;
  readonly topic: string;
  readonly content: string;
  readonly evidenceId: string;
}

export type OpinionKind = "proposal" | "concern" | "agreement" | "disagreement" | "blocker";

export interface ActivityFact {
  readonly id: string;
  readonly itemId: string;
  readonly participant: string;
  readonly action: string;
  readonly evidenceIds: readonly string[];
}

export interface OpinionSignal {
  readonly id: string;
  readonly itemId: string;
  readonly participant: string;
  readonly kind: OpinionKind;
  readonly topic: string;
  readonly evidenceIds: readonly string[];
}

export interface DecisionPoint {
  readonly topic: string;
  readonly summary: string;
  readonly evidenceIds: readonly string[];
}

export interface ConflictPoint {
  readonly topic: string;
  readonly summary: string;
  readonly evidenceIds: readonly string[];
}

export interface CoordinationBrief {
  readonly id: string;
  readonly evidenceIds: readonly string[];
  readonly decisions: readonly DecisionPoint[];
  readonly conflicts: readonly ConflictPoint[];
  readonly unresolvedQuestions: readonly DecisionPoint[];
  readonly nextActions: readonly DecisionPoint[];
}
