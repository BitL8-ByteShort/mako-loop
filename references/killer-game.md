# Killer Game Mode

Use this for browser games, canvas games, Three.js scenes, playable prototypes, simulations, and interactive toys.

## Outcome

The player can immediately understand the controls, play the loop, receive feedback, fail or score, and restart.

## Build Standard

- Moment-to-moment loop first.
- Controls are responsive and discoverable.
- Feedback is immediate: motion, sound if appropriate, score, hit states, particles, animation, or UI state.
- Failure, win, scoring, or progression exists.
- Restart/reset is reliable.
- The scene is framed correctly on desktop and mobile.
- Menus and meta progression come after the core loop works.

## Engine Rule

Use proven libraries for established domains when practical:

- Three.js for 3D.
- Phaser, Pixi, Matter.js, or similar for 2D/physics-heavy browser games.
- Existing chess/cards/physics/parsing engines when rules are complex.

Hand-roll only when the rules are simple or the user explicitly asks for it.

## Verification

- Screenshot or canvas-pixel proof that rendering is nonblank.
- Manual or automated input proof.
- Frame/layout proof at desktop and mobile sizes.
- Reset proof.
- No overlapping controls.
- If 3D, verify camera/framing and scene motion/interaction.

## Ship Review

- Is it fun or at least satisfying in the first 30 seconds?
- Are controls predictable?
- Does the player know what changed after each action?
- Is there a reason to retry?
