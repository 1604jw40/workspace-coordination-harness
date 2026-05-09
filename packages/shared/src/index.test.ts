import { describe, expect, it } from "vitest";
import type { WorkspaceSource, WorkspaceSourceType } from "./index.js";

describe("shared workspace domain types", () => {
  it("accepts deterministic fixture source types", () => {
    const sourceTypes: WorkspaceSourceType[] = [
      "slack_message",
      "github_pr",
      "github_issue",
      "github_review",
      "github_comment",
      "markdown_note"
    ];

    const fixture: WorkspaceSource = {
      id: "slack-1",
      type: sourceTypes[0],
      author: "Avery",
      createdAt: "2026-01-01T00:00:00.000Z",
      body: "Proposal: use synthetic fixtures for the harness."
    };

    expect(fixture.type).toBe("slack_message");
    expect(sourceTypes).toHaveLength(6);
  });
});
