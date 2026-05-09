# Harness 엔지니어링 기반

MVP는 합성 workspace 형태의 fixture를 구조화된 coordination brief로 변환하는 결정적 TypeScript harness입니다.

core package는 external API, live integration, credential, LLM, RAG, embedding, vector database, MCP runtime, local model dependency를 사용하지 않아야 합니다.

테스트는 합성 fixture와 결정적 assertion만 사용합니다.
