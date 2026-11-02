<!-- BEGIN:nextjs-agent-rules -->

## Next.js version guidance

This repository uses Next.js 16. Its APIs and conventions may differ from older releases. Before changing application code, read the relevant guide under `node_modules/next/dist/docs/` from this repository and follow current guidance.

This block is maintained by Next.js and may be rewritten by `next dev`.

<!-- END:nextjs-agent-rules -->

# StageWise agent instructions

## Product and scope
- StageWise is an evidence-based AI presentation and public-speaking coach. Follow `docs/feature-scope.md`; do not add unrelated product features.
- Keep UI, media/data processing, deterministic analytics, and AI services in separate modules. Prefer small, typed, reusable units.
- Do not implement the full application in one pass. Work in reviewable phases and keep documentation aligned with implementation.
- Use mock data only for isolated UI development. Clearly label and separate mocks; never present mock metrics as product analytics.

## Evidence and AI
- Calculate all numeric metrics with deterministic code. The LLM may interpret validated evidence and draft recommendations; it must not calculate or invent metrics.
- Every coaching recommendation must cite evidence available in the analysis record. Never invent metric values, transcript quotations, timestamps, or slide references.
- Validate model inputs and outputs with Zod (or the agreed typed validation boundary) before returning data to the UI. Reject or safely handle unsupported claims.
- Never infer anxiety, personality, or emotional state from a face or facial expression.
- Keep all OpenAI credentials and other API secrets on the server. Never expose them in client bundles or logs.

## Privacy and media
- Explain recording and processing before capture and request explicit, separate browser permissions for microphone and camera as needed.
- When speech analysis is requested, upload only the microphone recording required for that analysis. Do not upload camera frames/video.
- Process camera frames locally with MediaPipe Tasks Vision. Never persist or transmit raw video.
- Delete transient raw microphone recordings after processing; do not retain them. Persist only data explicitly required by the product and documented in its retention policy.
- Provide clear permission-denied, loading, empty, and recoverable error states. Stop media tracks when capture ends or a view unmounts.

## Engineering
- Preserve existing source and project files. Inspect the relevant code and current Next.js documentation before edits.
- Keep TypeScript strict and resolve type errors; do not suppress them with `any`, `@ts-ignore`, or broad lint disables.
- Add only dependencies needed for defined scope. Validate uploaded files and request payloads at boundaries.
- Keep deterministic calculations independently testable. Keep external service calls behind server-side adapters.
- After each substantial implementation phase, run `npm run lint` and `npm run build`, and fix failures before continuing.
- Do not claim a feature works until its real processing path is implemented and verified.
