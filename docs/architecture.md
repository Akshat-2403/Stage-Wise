# Architecture

## Goals and constraints

StageWise provides useful, evidence-based presentation coaching while keeping media processing narrow and credentials private. The architecture separates browser UI, media/data processing, deterministic analytics, and server-side AI services. API boundaries use validated, versionable types.

## Proposed module boundaries

```text
src/
  app/                         App Router pages and route handlers
  components/                  Reusable presentation, capture, upload, and report UI
  features/
    practice/                  Session setup, permissions, recording workflow
    analysis/                  Analysis orchestration and report presentation
    slides/                    Slide upload and alignment UI
  lib/
    media/                     Browser capture adapters and lifecycle helpers
    vision/                    Local MediaPipe Tasks Vision processing
    audio/                     Web Audio feature extraction and audio utilities
    transcription/             Server adapter and transcript normalization
    analytics/                 Deterministic metric calculations and schemas
    slides/                    Officeparser adapter and text/structure extraction
    coaching/                  Prompt construction, OpenAI adapter, output validation
    evidence/                  Evidence IDs, references, and recommendation checks
    validation/                Shared Zod schemas at trust boundaries
```

These are planned boundaries, not a requirement to create empty directories. Add a module when its phase begins. Keep client-only browser APIs out of server modules; keep OpenAI credentials and SDK calls in server-only code. Route handlers should authenticate/validate requests, call services, and return validated response shapes rather than contain domain logic.

## Analysis flow

1. **Consent and setup:** Explain what will be captured, why, and what is sent. Ask for explicit microphone permission for speech recording and separate camera permission for posture/gesture analysis. Users can continue without camera analysis.
2. **Capture:** Record microphone audio with MediaRecorder only for a speech-analysis session. Use Web Audio API as needed for local signal features. Run camera frames through MediaPipe locally; do not upload or store frames or video. Stop tracks and release resources on stop, error, and unmount.
3. **Speech processing:** Upload only the audio recording needed for transcription/speech analysis. Use a server-side transcription adapter. Treat the transcript and timing as source data, not model-generated analytics.
4. **Deterministic analytics:** Calculate speaking speed, filler counts, pause durations, and rhythm from defined transcript/audio inputs. Compute posture/gesture indicators from local vision landmarks using documented rules. Each metric records its method, units, source, and any limitations.
5. **Optional slides:** Validate file type and size, extract supported content with Officeparser, and map extracted slide identifiers/text to transcript evidence. Do not claim alignment where evidence is missing.
6. **AI interpretation:** Send only the minimum validated analysis evidence required to the server-side OpenAI service. Ask for explanations and recommendations grounded in supplied evidence; do not ask it to calculate metrics.
7. **Validation and response:** Validate model output with Zod. Check each recommendation's evidence references against the analysis record; reject or omit unsupported recommendations. Return a typed report with explicit unavailable/insufficient evidence states.
8. **Retention:** Delete transient raw audio after processing. Do not persist raw camera video at any stage. Store only a future, explicitly designed set of derived results if a user-facing history feature is approved and its retention behavior is documented.

## Evidence model

Represent evidence as stable IDs with typed sources, for example a metric result, transcript span with timestamps, or extracted slide reference. A recommendation contains a concise claim, an actionable next step, and one or more existing evidence IDs. The response validator ensures all IDs resolve and any transcript quotes match source spans. Missing evidence results in no recommendation for that claim, not a guessed value.

Numerical values are produced by deterministic functions with explicit input/output types and testable rules. The AI service may summarize those values but may not alter them. Avoid subjective labels about emotion, anxiety, confidence as an internal state, or personality; delivery guidance must refer to observable behavior.

## UI states and failure handling

Practice and analysis flows need explicit idle/empty, permission request, permission denied, recording, processing/loading, success, and recoverable error states. Handle unsupported browser APIs and unavailable camera/microphone gracefully. Show when camera analysis is disabled and do not block audio-only practice. Validate uploads before parsing and convert parser/model/network errors into safe, user-readable states without leaking secrets.

## Initial development checklist

### Phase 0 — project foundations
- [ ] Confirm actual app root and supported Node/npm versions.
- [ ] Keep App Router, TypeScript strict mode, Tailwind, ESLint, `src/`, and `@/*` alias configured.
- [ ] Establish typed domain contracts and Zod schemas for analysis inputs, metric evidence, and reports.
- [ ] Define threat/privacy boundaries, data retention, supported file types/limits, and error taxonomy.
- [ ] Add `.env.example`; verify secrets are server-only and ignored by git.

### Phase 1 — practice setup and consent
- [ ] Build an accessible session setup and recording/processing explanation.
- [ ] Request microphone and camera permission separately and only when the user enables those inputs.
- [ ] Implement media lifecycle cleanup and clear empty, denied, loading, and error UI states.
- [ ] Verify camera frames remain local and no video upload path exists.

### Phase 2 — deterministic speech analysis
- [ ] Add microphone recording and server-side transcription adapter.
- [ ] Define transcript/timing normalization and deterministic rules for rate, fillers, pauses, and rhythm.
- [ ] Attach source and method metadata to each metric; add focused unit coverage.
- [ ] Ensure transient audio deletion after processing, including failure paths.

### Phase 3 — local delivery signals
- [ ] Integrate MediaPipe Tasks Vision behind a client-only adapter.
- [ ] Define interpretable, observable posture/gesture indicators and insufficient-visibility states.
- [ ] Do not infer emotion, anxiety, or personality.

### Phase 4 — slides and alignment
- [ ] Validate upload limits and supported formats.
- [ ] Extract content with Officeparser and preserve stable slide references.
- [ ] Align only available transcript/slide evidence; report unavailable alignment explicitly.

### Phase 5 — evidence-backed coaching and reports
- [ ] Implement a server-only OpenAI adapter with minimal input and structured output.
- [ ] Validate output with Zod and resolve every evidence reference against the analysis record.
- [ ] Build report visualizations with Recharts from deterministic metrics only.
- [ ] Verify no fabricated measurements, quotes, timestamps, or slide references reach the UI.

At every phase boundary, run `npm run lint` and `npm run build`, fix issues, and update these documents when scope or contracts change. Add tests for deterministic analytics and validation as those modules are implemented.
