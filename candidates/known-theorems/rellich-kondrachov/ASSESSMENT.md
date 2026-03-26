# Formalization Assessment: Rellich-Kondrachov compactness

## 1. Statement formalizability

The full Rellich-Kondrachov theorem is BLOCKED. Sobolev spaces W^{1,p}(Omega) are not defined in Mathlib.

The fallback statement (Arzela-Ascoli for equicontinuous families) compiles. It uses:
- `BoundedContinuousFunction (X →ᵇ ℝ)`: `Mathlib.Topology.ContinuousMap.Bounded.Basic`.
- `Equicontinuous`: `Mathlib.Topology.UniformSpace.Equicontinuity`.
- `IsCompact (closure F)`: Lean core.
- `CompactSpace X`, `UniformSpace X`: Mathlib topology.

## 2. Proof strategy

For the fallback (Arzela-Ascoli): Mathlib has `ArzelaAscoli.isCompact_of_equicontinuous` in `Mathlib.Topology.UniformSpace.Ascoli`. The proof in Statement.lean might follow directly from this existing result.

For the full Rellich-Kondrachov:
Step 1: Define W^{1,p}(Omega) as the completion of C^1 functions under the Sobolev norm.
Step 2: Prove the Gagliardo-Nirenberg-Sobolev embedding (partially in Mathlib at `Mathlib.Analysis.FunctionalSpaces.SobolevInequality`).
Step 3: Use mollification to approximate W^{1,p} functions by smooth ones.
Step 4: Apply Arzela-Ascoli to the mollified sequence.
Step 5: Diagonal argument to extract a convergent subsequence.

## 3. Estimated proof length

Fallback statement: 10-30 lines (apply Arzela-Ascoli from Mathlib).
Full Rellich-Kondrachov: 2000-5000 lines. Requires defining Sobolev spaces first (~500-1000 lines), then the compactness argument.

## 4. Dependencies not in Mathlib

- Sobolev spaces W^{k,p}: NOT in Mathlib. The Gagliardo-Nirenberg-Sobolev inequality exists for smooth compactly supported functions but W^{k,p} as a Banach space is not defined.
- Mollification: NOT in Mathlib as a packaged tool. The convolution infrastructure exists partially.
- Weak derivatives: NOT in Mathlib.

## 5. Risks and blockers

The full theorem is blocked by missing Sobolev space definitions. This is a known gap in Mathlib. Work is ongoing (there have been discussions on the Lean Zulip about frequency-side Sobolev spaces), but no PR has landed.

## 6. Verdict

**Blocked** (full theorem). Sobolev spaces are not in Mathlib. The fallback Arzela-Ascoli statement is **Ready** (10-30 lines using existing Mathlib results).
