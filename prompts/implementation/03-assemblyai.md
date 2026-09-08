# Implementation Prompt 03 — AssemblyAI Voice Layer

Before coding, read the current official AssemblyAI Voice Agent API documentation:

- https://www.assemblyai.com/docs/voice-agents/voice-agent-api
- https://www.assemblyai.com/docs/voice-agents/voice-agent-api/session-configuration
- https://www.assemblyai.com/docs/voice-agents/voice-agent-api/events-reference
- https://www.assemblyai.com/docs/coding-agent-prompts

Do not rely on remembered API details.

## Objective
Implement `audio -> AssemblyAI -> normalized internal events -> semantic core -> response/tool actions -> AssemblyAI`.

## Requirements
- isolate WebSocket code
- handle session lifecycle
- partial/final user transcripts
- agent transcripts and reply audio
- interruptions
- tool calls
- session errors
- reconnect/resume according to current docs
- never expose API keys to browser clients
- keep provider event types separate from domain events

Initial semantic tools:
- `analyze_conversation`
- `audit_interpretation`
- `record_correction`
- `record_failure_case`

Use the current AssemblyAI tool schema exactly.

## Acceptance
A local voice session can connect, become ready, receive speech, produce a final transcript, invoke semantic processing, respond, speak, survive interruption, and emit structured telemetry.