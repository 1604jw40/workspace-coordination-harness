import { describe, expect, it } from "vitest";
import type { WorkspaceSource } from "@workspace-coordination/shared";
import { generateCoordinationBrief, normalizeWorkspaceSource } from "./index.js";

describe("deterministic harness setup", () => {
  it("normalizes synthetic workspace fixtures into evidence-backed items", () => {
    const fixture: WorkspaceSource = {
      id: "github-pr-1",
      type: "github_pr",
      author: "Blair",
      createdAt: "2026-01-02T00:00:00.000Z",
      title: "Fixture parser",
      body: "Proposal: normalize GitHub-like fixtures without live API calls."
    };

    const item = normalizeWorkspaceSource(fixture);

    expect(item).toMatchObject({
      id: "item-github-pr-1",
      source: "github_pr",
      participant: "Blair",
      topic: "Fixture parser",
      evidenceId: "github-pr-1"
    });
  });

  it("generates a coordination brief with traceable evidence ids", () => {
    const item = normalizeWorkspaceSource({
      id: "note-1",
      type: "markdown_note",
      author: "Casey",
      createdAt: "2026-01-03T00:00:00.000Z",
      body: "Next action: add deterministic golden tests."
    });

    const brief = generateCoordinationBrief([item]);

    expect(brief.evidenceIds).toEqual(["note-1"]);
    expect(brief.conflicts).toEqual([]);
    expect(brief.nextActions).toEqual([]);
  });
});
