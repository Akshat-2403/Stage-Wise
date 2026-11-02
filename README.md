# StageWise

StageWise is an AI-powered presentation and public-speaking coach. It helps people improve delivery and content using measurable evidence from speech, locally processed posture/gesture signals, and optionally uploaded presentation slides.

The coaching model is deliberately bounded: deterministic code produces measurements; AI interprets those measurements and proposes evidence-linked guidance. It is not a general-purpose chatbot or a source of invented analytics.

## Product capabilities in scope

- Speech transcription and delivery analysis: speaking rate, filler words, pauses, and rhythm.
- Local camera analysis for posture and hand gestures using MediaPipe Tasks Vision. Camera video is never uploaded or stored.
- Presentation content and structure feedback.
- Optional slide upload and alignment between slide content and the spoken presentation.
- Evidence-backed recommendations whose claims can be traced to metrics, transcript spans, or slide references.

See [docs/feature-scope.md](docs/feature-scope.md) for boundaries and [docs/architecture.md](docs/architecture.md) for the proposed module design and data flow.

## Development setup

Use the actual project root, `D:\StageWise\stagewise` (the folder containing `package.json`). From there:

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open <http://localhost:3000>. Add a server-only `OPENAI_API_KEY` to `.env.local` only when enabling server-side AI interpretation. Never prefix secrets with `NEXT_PUBLIC_`. Do not commit `.env.local`.

Useful commands:

```powershell
npm run lint
npm run build
```

## Stack

- Next.js App Router, React, TypeScript, Tailwind CSS
- MediaPipe Tasks Vision and browser Media APIs (Web Audio API, MediaRecorder API)
- OpenAI API through server-side services
- Zod for boundary validation
- Officeparser for supported presentation extraction
- Recharts for analysis visualizations

Dependencies should be introduced only when a scoped phase needs them. The list describes the target stack, not a claim that every feature is implemented yet.

## Development approach

Implement in small phases: define contracts and privacy boundaries; build capture/upload UX; implement deterministic speech and media analytics; add slide parsing and alignment; then add evidence-constrained AI coaching and visualizations. See the initial checklist in `docs/architecture.md`.

Do not represent placeholder values as analysis. Keep mocks isolated and explicitly identified as development-only.
