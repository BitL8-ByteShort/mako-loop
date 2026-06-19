# Implementation-Grade Research

Use this when the user wants enough research that there is no question how to build the product.

## Standard

The output must be buildable. A principal engineer should be able to open the research pack and know:

- What to build.
- Why it should work.
- What not to build.
- Which architecture to use.
- Which models, libraries, frameworks, APIs, and OS capabilities are required.
- What data is stored.
- How privacy/security/offline behavior works.
- How to verify it.
- What risks remain and which decision is recommended.

If a decision cannot be proven from current research, choose a recommended path and name the uncertainty.

## Required Artifacts

1. `research-brief`
   - Target apps/products.
   - Current source URLs and dates.
   - Audience, buyer, price, platform, positioning.
   - Main promise and first value moment.

2. `capability-matrix`
   - Feature/capability.
   - Target product evidence.
   - Required v1 behavior.
   - Later behavior.
   - Acceptance criteria.

3. `implementation-blueprint`
   - Product contract.
   - System architecture.
   - Client/app architecture.
   - Service/background process architecture.
   - Data model.
   - State machines.
   - Error handling.
   - Security/privacy model.
   - Performance targets.

4. `model-runtime-decision`
   - Candidate models/runtimes.
   - Hardware targets.
   - Memory and latency constraints.
   - Accuracy tradeoffs.
   - Fallback plan.
   - Benchmark plan.
   - Recommended default.

5. `build-tasks`
   - Ordered milestones.
   - Files/modules to create.
   - Dependencies.
   - Acceptance criteria per milestone.
   - Verification commands.

6. `verification-matrix`
   - Functional tests.
   - UX/manual tests.
   - Performance tests.
   - Privacy/security tests.
   - Install/update tests when relevant.

## Current Research Rule

For modern products, models, APIs, pricing, system requirements, and platform capabilities, verify with current sources. Do not rely on stale model memory.

## Local AI / Dictation App Pattern

For apps like professional dictation/transcription tools, research and decide:

- Capture path: microphone permissions, global hotkeys, active app context, audio device switching.
- Transcription engine: Whisper/MLX/Core ML/whisper.cpp/local model, streaming vs chunked.
- Local LLM post-processing: punctuation, formatting, style commands, vocabulary, correction, summarization, expansion.
- Hardware target: normal MacBook memory/CPU/GPU/Neural Engine assumptions.
- Latency budget: push-to-talk start, partial transcript, final transcript, rewrite insertion.
- Text insertion: pasteboard, Accessibility API, Apple Events, focused-field behavior, fallback paste modes.
- Command model: dictation, correction, rewrite, custom vocabulary, templates, snippets, app-specific styles.
- Storage: local history, encrypted settings, user dictionary, prompts, audio retention policy.
- Privacy: local-first mode, optional cloud mode, telemetry opt-in, keychain.
- UX: menu bar app, floating recorder, waveform, transcript preview, correction UI, onboarding permissions, error recovery.
- Packaging: signed/notarized macOS app, updates, permissions messaging.

## No-Ambiguity Rule

Do not end with a generic recommendation list. End with:

- Recommended architecture.
- Recommended model/runtime.
- Recommended v1 scope.
- Ordered implementation plan.
- Verification matrix.
- Remaining decisions with defaults.

If enough public research is unavailable, say exactly what must be inspected next, but still provide the best buildable plan from available evidence.
