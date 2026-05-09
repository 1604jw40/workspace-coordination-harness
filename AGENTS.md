# AGENTS.md

## Project

This is a TypeScript workspace coordination platform.

The first MVP does not use LLM, RAG, Ollama, embeddings, vector databases, MCP runtime, or live Slack, Notion, GitHub integrations.

The first MVP is a deterministic harness that converts workspace-like fixtures into structured coordination briefs.

## Product Goal

The product helps teams coordinate opinions, proposals, concerns, blockers, decisions, and next actions.

This project must not become an employee ranking tool, surveillance tool, productivity scoring tool, or blame-generation system.

## Required Reading

Before making changes, read:

- docs/research/HARNESS_ENGINEERING_FOUNDATION.md
- docs/product/MVP_SCOPE.md
- docs/product/WORKSPACE_COORDINATION_PRINCIPLES.md

If one of these files does not exist yet, create a minimal version before implementing feature code.

## Development Loop

Always follow this loop:

1. Add or update fixture.
2. Write failing test.
3. Implement minimal code.
4. Run targeted tests.
5. Run full verification.
6. Update docs if behavior changes.
7. Summarize which tests prove the change.

Do not implement feature code before tests or fixtures exist.

## MVP Scope

Implement only:

- workspace domain types
- fixture loaders
- source parsers
- rule-based opinion extraction
- activity fact extraction
- map/reduce reducers
- coordination brief generation
- golden tests
- architecture boundary tests

## Out of Scope

Do not implement:

- LLM calls
- RAG
- Ollama integration
- embedding models
- vector database dependencies
- MCP runtime
- Slack OAuth
- Notion OAuth
- GitHub App installation
- external API calls
- production database
- employee scoring
- autonomous write-back

## Core Product Questions

The MVP must answer these questions using deterministic fixtures and tests:

- Who proposed what?
- Who raised which concern?
- Who agreed with which point?
- Who disagreed with which point?
- Where do opinions align?
- Where do opinions conflict?
- What remains unresolved?
- What next action is proposed?
- Which evidence items support the brief?

## Required Domain Concepts

The core package should define these concepts:

- WorkspaceItem
- WorkspaceSource
- ActivityFact
- OpinionSignal
- OpinionKind
- DecisionPoint
- ConflictPoint
- CoordinationBrief

## Source Types

The deterministic MVP should support fixture-based inputs only:

- slack_message
- github_pr
- github_issue
- github_review
- github_comment
- markdown_note

Live connectors must not be added in the first MVP.

## Expected Pipeline

The MVP pipeline is:

1. Load fixture data.
2. Parse source-specific fixture format.
3. Normalize into WorkspaceItem.
4. Extract ActivityFact.
5. Extract OpinionSignal.
6. Map signals by topic and participant.
7. Reduce signals into aligned points, conflicts, unresolved questions, and next actions.
8. Generate CoordinationBrief.
9. Assert output with golden tests.

## Testing Requirements

Tests must not require network access, live credentials, Ollama, external APIs, local models, vector databases, or Docker.

Use fixture-based tests.

Use deterministic assertions.

Golden tests should validate structure and evidence IDs, not fragile exact prose.

## Verification Commands

Before finishing a task, run:

- npm run typecheck
- npm run lint
- npm test

If these scripts do not exist yet, scaffold them first.

## Architecture Rules

The core package must remain deterministic.

The core package must not import backend code.

The core package must not call external APIs.

The core package must not depend on LLM, RAG, Ollama, MCP, vector DB, or live integrations.

Parsers must convert source-specific fixtures into WorkspaceItem objects.

Extractors must operate on WorkspaceItem objects.

Reducers must operate on ActivityFact and OpinionSignal objects.

Generators must produce CoordinationBrief objects.

## Evidence Requirements

Every generated CoordinationBrief must include evidence item IDs.

Every conflict must include evidence item IDs.

Every unresolved question should be linked to one or more evidence item IDs when possible.

Do not produce claims that cannot be traced to fixture evidence.

## Safety and Product Boundaries

The system may summarize participation context.

The system may identify proposals, concerns, blockers, decisions, and unresolved questions.

The system must not rank teammates.

The system must not assign productivity scores.

The system must not generate blame summaries.

The system must not infer intent beyond available evidence.

## Codex Behavior

When using Codex, keep tasks small.

Preferred task format:

- State the target behavior.
- State the fixture to add or modify.
- State the failing test to write.
- State the minimal implementation expected.
- State the verification commands to run.

Codex must not expand the scope unless explicitly instructed.

## First Task Prompt

Use this prompt for the first Codex task:

Read AGENTS.md.

We are building only the deterministic MVP harness.

Do not implement LLM, RAG, Ollama, embeddings, vector DB, MCP runtime, live Slack integration, live Notion integration, or live GitHub integration.

Create the initial TypeScript monorepo structure with packages/core and packages/shared.

Create fixtures for Slack-like, GitHub-like, and Markdown note inputs.

Write failing tests first for normalization and coordination brief generation.

Then implement the minimal deterministic code to pass those tests.

Run typecheck, lint, and tests before finishing.

## Notes

Keep this AGENTS.md compact.

Large research notes, architecture decisions, and design explanations belong in docs/, not in this file.

## Git Security Rules

Do not work directly on main.

All changes must be made on short-lived branches and merged through pull requests.

Branch prefixes:
- docs/
- chore/
- test/
- feat/
- refactor/
- security/

Never commit:
- .env files
- API keys
- access tokens
- refresh tokens
- private keys
- certificates
- production credentials
- real Slack exports
- real Notion exports
- real GitHub private data
- customer data
- employee private data

Use synthetic fixtures only.

If a secret is accidentally committed:
1. Stop work immediately.
2. Assume the secret is compromised.
3. Rotate or revoke the secret outside the repository.
4. Remove the secret from the codebase.
5. Add a regression rule or .gitignore entry.
6. Document the incident in a private security note.

Codex must not:
- bypass branch protection
- push directly to main
- add external API credentials
- add secrets to tests
- add live integration tokens
- disable security checks
- weaken GitHub Actions permissions
- add write permissions unless explicitly requested

GitHub Actions must use least privilege permissions.

Default workflow permissions should be read-only.

Any workflow requiring write permission must justify it in comments and scope it to the smallest possible job.

At the end of every task, Codex must write the final report in Korean using this format:

작업 요약:
- ...

변경된 파일:
- ...

검증:
- npm run typecheck: 통과/실패
- npm run lint: 통과/실패
- npm test: 통과/실패

보안 확인:
- secret 또는 credential 추가 없음
- 외부 API 호출 추가 없음
- main 직접 수정 없음
- GitHub Actions 권한 최소화 확인

다음 권장 작업:
- ...

## Mid-task Review Checkpoints

Codex must pause and ask for review before continuing when any of the following occurs:

- The requested scope appears larger than the current branch goal.
- A new dependency is needed.
- A new package, framework, or runtime is being introduced.
- A test requires changing the domain model.
- A security-related file is changed.
- GitHub Actions permissions need write access.
- The implementation would require external API access.
- The implementation would introduce LLM, RAG, Ollama, embeddings, vector DB, MCP runtime, or live integrations.
- The implementation changes AGENTS.md, .gitignore, CODEOWNERS, or CI configuration.
- The implementation changes public interfaces used by multiple packages.
- The implementation requires deleting or renaming files.
- Tests fail for reasons unrelated to the current task.

When asking for review, Codex must summarize:

- 현재까지 한 작업
- 막힌 지점 또는 결정이 필요한 부분
- 가능한 선택지
- 각 선택지의 장단점
- Codex의 추천안

The review request must be written in Korean.