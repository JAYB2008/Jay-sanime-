# Skill 3 — Genre-Specific Game Design Knowledge

## Mission

Generated games must feel like their stated genre, not merely display objects that move. Before generating code, select the relevant genre model and implement the camera, controls, physics, HUD, feedback, and gameplay loop that make that genre recognizable and satisfying.

## Universal game quality baseline

Every generated game needs:

- A clear start state and playable objective.
- Responsive controls with readable acceleration, friction, gravity, or rotation as appropriate.
- Visible feedback for success, failure, damage, collection, time, scoring, and state changes.
- Restart or replay behavior.
- Camera behavior that supports skillful play instead of fighting the player.
- Procedural visual identity using shapes, colors, lighting, particles, UI, and layout rather than external assets.
- At least one meaningful decision or skill expression beyond moving a square around.

## Racing

### Camera behavior

- 3D racing: use a chase camera behind and slightly above the vehicle, smoothed with spring/damping, looking ahead along velocity or heading. Avoid rigidly locking the camera so tightly that turns feel jerky.
- Top-down 2D racing: use a centered or slightly forward-offset camera that shows upcoming turns. Rotate the car, not necessarily the entire world, unless the design calls for it.
- Side-view racing: use a horizontal follow camera with lookahead and vertical damping for hills/jumps.

### Physics and movement feel

- Implement acceleration, braking, steering, friction, traction, and speed caps.
- Arcade racers need drift-friendly lateral slip, quick recovery, boost pads, forgiving wall slowdown, and satisfying speed feedback.
- Realistic circuit racers need stronger braking zones, grip limits, understeer/oversteer approximation, lap timing, and track boundaries.
- Futuristic hover racers need hover bob, low-friction glide, boost lanes, banked turns, and speed trails.

### Controls

- Keyboard default: W/Up accelerate, S/Down brake/reverse, A/D or Left/Right steer, Space boost or handbrake depending on design, R restart.
- Touch/mobile default: left/right steering zones or virtual wheel, accelerate/brake buttons, large boost button.
- Gamepad default: trigger accelerate/brake, left stick steering, face button boost/handbrake.

### Required HUD

- Speed indicator.
- Lap count or distance/progress.
- Timer and best/current lap for lap games.
- Position or checkpoint count when opponents are present.
- Boost meter if boosting exists.

### What makes it good

A good racing game has readable track shape, anticipation before turns, collisions that slow or redirect without instantly ruining the run, speed effects, checkpoints, lap validation, and handling tuned so the player can intentionally take better lines. A generic placeholder only moves a rectangle around a flat area.

## Platformer

### Camera behavior

- 2D side-scroller: horizontal follow camera with forward lookahead, vertical dead zone, and clamps to level bounds.
- 3D platformer: third-person orbit or follow camera with collision avoidance and a clear view of landing zones.
- Single-screen platformer: static camera is acceptable if the full challenge is visible.

### Physics and movement feel

- Use gravity, jump impulse, coyote time, jump buffering, variable jump height, ground friction, air control, terminal velocity, and reliable collision resolution.
- Platforms must have readable edges, safe ground, hazards, collectibles, and goals.
- Moving platforms should carry the player predictably.

### Controls

- Keyboard: A/D or arrows move, Space/W jump, Shift dash if present, R restart.
- Touch: left/right buttons or stick, jump button, optional dash button.
- Gamepad: left stick/D-pad move, bottom face button jump, shoulder/face button dash.

### Required HUD

- Lives/health or fail count.
- Collectibles count if collectibles exist.
- Timer for time challenges.
- Checkpoint or level indicator.

### What makes it good

A good platformer has tight jump arcs, forgiving input timing, deliberate platform spacing, readable hazards, and escalating challenge. A generic placeholder has a square jumping on random rectangles without coyote time, jump buffering, goals, or level rhythm.

## Shooter

### Camera behavior

- First-person: camera is the player view with mouse-look, crosshair, recoil, and clear weapon feedback.
- Third-person: over-shoulder or chase camera with aim reticle, aim offset, and obstacle awareness.
- Top-down/twin-stick: camera shows combat space around the player, aim follows mouse/right stick, enemies telegraph movement.
- 2D scrolling shooter: camera scrolls consistently and leaves enough reaction space.

### Physics and movement feel

- Movement must be responsive and readable, with acceleration/friction tuned for aiming.
- Projectiles need speed, lifetime, collision, hit feedback, and damage rules.
- Enemies need behavior patterns: chase, strafe, patrol, ranged fire, cover, waves, or bosses.
- Include invulnerability frames or clear damage feedback to prevent unfair instant failure.

### Controls

- Keyboard/mouse: WASD move, mouse aim, click shoot, R reload/restart depending context, Space dodge/jump if relevant.
- Touch: virtual movement stick, aim/fire area or auto-fire option, large dodge/reload controls.
- Gamepad: left stick move, right stick aim/camera, trigger shoot, face button dodge/reload.

### Required HUD

- Health/shields.
- Ammo/heat/cooldown if applicable.
- Score, wave, or objective progress.
- Crosshair or aim indicator.
- Enemy count or boss health when relevant.

### What makes it good

A good shooter has clear aiming, weapon cadence, enemy variety, readable hit reactions, sound/visual-equivalent feedback, cover or movement decisions, and fair escalation. A generic placeholder lets the player fire dots at identical enemies with no pacing, feedback, or tactical difference.

## Puzzle

### Camera behavior

- Grid puzzles: orthographic or top-down view with all relevant cells visible.
- Physics puzzles: camera frames the whole mechanism or smoothly follows the active piece.
- 3D spatial puzzles: stable orbit or fixed-room camera that preserves spatial understanding.

### Physics and movement feel

- Prioritize deterministic, predictable rules.
- Grid movement should snap cleanly and avoid ambiguous half-states.
- Physics puzzles need stable constraints, readable forces, and reset behavior.
- Avoid random outcomes unless randomness is the puzzle premise and is communicated clearly.

### Controls

- Keyboard: arrows/WASD move cursor or character, Space/Enter interact, Z undo when feasible, R reset.
- Mouse/touch: click/tap select, drag where appropriate, clear hover/selection states.
- Gamepad: D-pad/stick move selection, face button confirm, shoulder/face undo/reset.

### Required HUD

- Move count, timer, or score depending puzzle type.
- Goal description.
- Reset/undo affordance where possible.
- Level number or puzzle progression.

### What makes it good

A good puzzle game teaches one rule at a time, creates “aha” moments, supports undo/reset, communicates valid moves, and has deterministic outcomes. A generic placeholder is merely objects to collect without a meaningful rule system.

## Sports

### Camera behavior

- Field/court sports: side, broadcast, or slightly angled top-down camera showing player, ball, goal/target, and nearby opponents.
- Precision sports such as golf/bowling: aim camera with trajectory preview and post-shot follow.
- Racing-adjacent sports such as skating: follow camera with path preview and trick visibility.

### Physics and movement feel

- Ball/puck/projectile physics must include velocity, friction, bounce, spin or curve when relevant, boundaries, and scoring zones.
- Player movement should include acceleration, turning radius, stamina or cooldowns when useful, and collision rules.
- Opponents need readable positioning, pursuit, blocking, goalie, or formation behavior.

### Controls

- Keyboard: WASD/arrows move, Space/pass/shoot/charge, Shift sprint, mouse or arrows aim depending perspective.
- Touch: movement stick plus pass/shoot/action buttons.
- Gamepad: stick movement, face buttons pass/shoot, trigger sprint/aim modifier.

### Required HUD

- Score for each side.
- Timer, round, inning, period, or attempt count.
- Power meter for charged actions.
- Possession or active player indicator.

### What makes it good

A good sports game has understandable scoring, readable ball ownership, skill-based timing or aiming, opponent pressure, and satisfying physical response. A generic placeholder only moves a player icon toward a goal.

## RPG / Adventure

### Camera behavior

- Top-down 2D: follow camera with room/region transitions and enough forward visibility.
- Isometric: stable angled camera with sorting/depth clarity.
- Third-person 3D: follow/orbit camera with collision avoidance and interaction focus.
- First-person adventure: stable exploration camera with readable interaction prompts.

### Physics and movement feel

- Movement should support exploration: smooth walking, collision with terrain/props, interaction range, and path clarity.
- Combat, if present, needs timing, hitboxes, cooldowns, health, enemy tells, and feedback.
- Dialog, quests, inventory, or abilities should be implemented as real state systems, not static text only.

### Controls

- Keyboard: WASD/arrows move, E interact, Space/Click attack or confirm, I inventory if present, R restart.
- Mouse: click interact or aim depending style.
- Touch: movement stick/tap-to-move, interact button, context actions.
- Gamepad: left stick move, face button interact/attack, menu button inventory.

### Required HUD

- Health/stamina/mana as applicable.
- Quest or current objective text.
- Inventory, coins, keys, or ability indicators if present.
- Dialog box and interaction prompts.

### What makes it good

A good RPG/adventure game has a coherent space to explore, meaningful interactions, progression state, readable NPC/enemy behavior, and at least one quest or discovery loop. A generic placeholder is a character walking around random scenery with no stateful interaction.

## Cross-genre combinations

When genres combine, choose a primary genre for camera and controls, then add secondary mechanics carefully. Examples:

- Racing + shooter: prioritize racing camera/handling; shooting should use forward weapons, lock-on, or simple side weapons that do not break driving control.
- Platformer + puzzle: prioritize platformer movement; puzzle elements should be spatial switches, keys, timing, or physics constraints.
- RPG + shooter: prioritize exploration and progression; combat should include stats, upgrades, or enemy variety.

## Tuning pass requirement

Before returning code, perform an internal tuning pass:

- Can the player understand the objective within five seconds?
- Does the camera show what the player needs next?
- Are controls responsive and genre-appropriate?
- Is there a fail/restart/win loop?
- Is there at least one mechanic that creates skill, strategy, timing, or choice?
