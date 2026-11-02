# Feature scope

## Product objective

Help a user prepare and improve a presentation by measuring observable speech and delivery signals, reviewing presentation content, and optionally comparing spoken content with uploaded slides. Coaching must be traceable to collected evidence.

## In scope

### Speech and transcript
- Microphone recording after clear disclosure and explicit permission.
- Transcription and transcript-linked analysis.
- Deterministic speaking speed, filler-word counts, pauses, and speech-rhythm metrics.
- Clear handling of unavailable or low-quality transcription/timing evidence.

### Visual delivery signals
- Optional camera permission for posture and hand-gesture analysis.
- Local processing with MediaPipe Tasks Vision.
- Observable, documented posture/gesture indicators only; no raw camera video upload or storage.
- Explicit camera-disabled, denied, unsupported, and insufficient-visibility states.

### Presentation and slides
- Feedback on presentation content and structure based on submitted content/transcript.
- Optional supported slide file upload and Officeparser extraction.
- Evidence-based spoken-content-to-slide alignment using real slide and transcript references.
- Clear unsupported-file, parse-failure, and missing-evidence states.

### Coaching and reporting
- Server-side OpenAI interpretation of validated evidence.
- Recommendations linked to real metric, transcript, or slide evidence.
- Zod validation and evidence-reference checks before model output is returned.
- Recharts visualizations of deterministic metrics.
- Clear loading, empty, permission-denied, success, and recoverable error states.

## Out of scope

- General-purpose open-ended chatbot unrelated to presentation evidence.
- Fabricated, estimated, or LLM-generated numeric analytics presented as measurements.
- Inferring anxiety, personality, emotion, or internal confidence from appearance or facial expression.
- Uploading, streaming, or storing camera video or frames.
- Retaining raw microphone recordings after processing.
- Unsupported slide formats or arbitrary document processing without an explicit scoped decision.
- Social feeds, public profiles, leaderboards, coaching marketplaces, payments, calendar integrations, or unrelated productivity features.
- Claims of professional, medical, psychological, or guaranteed performance outcomes.

## Product invariants

1. Metrics come from deterministic code with documented inputs, units, and limitations.
2. AI may interpret evidence and draft advice, but cannot invent metrics or source references.
3. Every recommendation resolves to evidence present in the current analysis.
4. Secrets stay server-side; client bundles contain no API keys.
5. Camera processing stays on-device and raw video is never retained.
6. Audio is uploaded only when speech analysis is requested and is deleted after processing.
7. Users receive understandable consent, progress, empty, and failure feedback.
8. Mock data is isolated and visibly identified as development-only; it is never used as production analysis.
