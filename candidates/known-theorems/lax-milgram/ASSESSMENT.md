# Formalization Assessment: Lax-Milgram theorem

## 1. Statement formalizability

The statement compiles. Definitions needed:

- `NormedAddCommGroup H`, `InnerProductSpace ℝ H`, `CompleteSpace H`: real Hilbert space. All in Mathlib.
- `H →L[ℝ] ℝ`: continuous linear functionals. `Mathlib.Topology.Algebra.Module.Basic`.
- `H →L[ℝ] H →L[ℝ] ℝ`: continuous bilinear forms (curried). This works because `→L[ℝ]` is itself a normed space, so `H →L[ℝ] (H →L[ℝ] ℝ)` is well-defined. Continuity of the bilinear form is encoded by the continuity of both maps.
- `IsCoerciveContinuousBilinForm`: custom structure defined in Statement.lean. Only includes the coercivity condition (the continuity is built into `→L[ℝ]`).

The `∃! u : H, ∀ v : H, a u v = f v` is the correct existential uniqueness statement.

## 2. Proof strategy

Standard proof via Riesz representation:

Step 1: By Riesz representation (`InnerProductSpace.toDual` in `Mathlib.Analysis.InnerProductSpace.Dual`), identify f with an element y: f(v) = <y, v> for unique y.

Step 2: For each u, v -> a(u, v) is a continuous linear functional on H (by the `→L[ℝ]` encoding). By Riesz, there exists A(u) such that a(u, v) = <A(u), v>. This defines a bounded linear operator A : H → H.

Step 3: Show A is invertible:
  - Coercivity gives: alpha * ‖u‖^2 <= a(u,u) = <Au, u> <= ‖Au‖ * ‖u‖, so ‖Au‖ >= alpha * ‖u‖. This means A is injective and has closed range.
  - Show range is dense (if Au were orthogonal to some w, then a(w,w) = <Aw,w> = 0, contradicting coercivity for w != 0).
  - Closed + dense = surjective.

Step 4: Set u = A^{-1}(y).

`InnerProductSpace.toDual` in Mathlib gives the isometric linear equivalence `E ≃ₗᵢ⋆[ℝ] StrongDual ℝ E`. This is the key tool.

## 3. Estimated proof length

300-500 lines. The Riesz representation is already in Mathlib. Constructing A, proving injectivity from coercivity, and proving surjectivity from the closed range + density argument: each ~50-100 lines.

## 4. Dependencies not in Mathlib

- `InnerProductSpace.toDual`: present in `Mathlib.Analysis.InnerProductSpace.Dual`.
- Bounded inverse theorem / closed range theorem: Mathlib has `LinearMap.closedRange` and `ContinuousLinearMap.isClosedRange` infrastructure.
- Nothing fundamentally missing.

## 5. Risks and blockers

The encoding of the bilinear form as `H →L[ℝ] H →L[ℝ] ℝ` means that `a u` is a continuous linear map `H →L[ℝ] ℝ`, and `a` itself is continuous as a map `H →L[ℝ] (H →L[ℝ] ℝ)`. The coercivity hypothesis is about `a u u` which is a real number. This all types correctly.

The Riesz representation in Mathlib uses the conjugate-linear convention (`≃ₗᵢ⋆[𝕜]`). For `𝕜 = ℝ`, conjugate-linear = linear, so this is fine, but the notation may cause confusion.

## 6. Verdict

**Ready**. Statement compiles. All key tools (Riesz representation, closed range) are in Mathlib. Estimated 300-500 lines.
