import type {
  CoordinationBrief,
  WorkspaceItem,
  WorkspaceSource
} from "@workspace-coordination/shared";

export function normalizeWorkspaceSource(source: WorkspaceSource): WorkspaceItem {
  return {
    id: `item-${source.id}`,
    source: source.type,
    participant: source.author,
    createdAt: source.createdAt,
    topic: source.title ?? "general",
    content: source.body,
    evidenceId: source.id
  };
}

export function generateCoordinationBrief(items: readonly WorkspaceItem[]): CoordinationBrief {
  const evidenceIds = [...new Set(items.map((item) => item.evidenceId))];

  return {
    id: "brief-1",
    evidenceIds,
    decisions: [],
    conflicts: [],
    unresolvedQuestions: [],
    nextActions: []
  };
}
