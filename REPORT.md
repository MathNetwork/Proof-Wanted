# Lean 4 Formalization Candidates — Verification Report

## Summary

All 7 statement files compile successfully against Mathlib (master, commit `4fa57024`).
Every proof is `sorry` — only the **statements** (types) are verified to type-check.

| # | File | First-try? | Issues & Fixes |
|---|------|-----------|----------------|
| 1 | `HyperbolicTraceClassification.lean` | No | `SL(2, ℝ)` notation requires `open scoped MatrixGroups` |
| 2 | `HyperbolicHomogeneous.lean` | No | Same `SL(2, ℝ)` notation fix |
| 3 | `CayleyTransform.lean` | No | `UpperHalfPlane` is a `structure` with field `coe`, not a `Subtype` with `.val`. Used `where`-constructor and `(w : ℂ)` coercion |
| 4 | `SelfSimilarDimH.lean` | Yes | Compiled on first try |
| 5 | `BesicovitchCovering.lean` | Yes | Compiled on first try (used `Bornology.IsBounded` instead of bare `IsBounded`) |
| 6 | `SardTheorem.lean` | No | Needed `Mathlib.Analysis.Normed.Lp.MeasurableSpace` for `MeasureSpace (EuclideanSpace ℝ (Fin m))` |
| 7 | `CoareaFormula.lean` | No | `Mathlib.MeasureTheory.Integral.Bochner` renamed to `...Bochner.Basic`; same `MeasurableSpace` import needed; `ℝ≥0` requires `open NNReal` |

## Detailed Changes

### File 1: HyperbolicTraceClassification.lean
- **Added**: `open scoped MatrixGroups` to enable `SL(2, ℝ)` notation
- **Added import**: `Mathlib.Analysis.Complex.UpperHalfPlane.MoebiusAction` (for `g • z` action)
- **Added import**: `Mathlib.LinearAlgebra.Matrix.Trace` (for `Matrix.trace`)
- The coercion `(g : Matrix (Fin 2) (Fin 2) ℝ)` works directly for `g : SL(2, ℝ)`
- `|·|` (absolute value) on `ℝ` works as expected

### File 2: HyperbolicHomogeneous.lean
- **Added**: `open scoped MatrixGroups`
- **Added import**: `Mathlib.Analysis.SpecialFunctions.Trigonometric.Basic` (for `Real.cos`, `Real.sin`)
- `UpperHalfPlane.I` is the correct name for `i ∈ ℍ`
- The `!![ ]` matrix notation works for SL(2,ℝ) rotation matrices

### File 3: CayleyTransform.lean
- **Changed**: `UpperHalfPlane` constructor from anonymous `⟨val, proof⟩` to `where coe := ...; coe_im_pos := ...`
- **Changed**: `w.val` → `(w : ℂ)` for coercing `UpperHalfPlane` to `ℂ`
- **Changed**: Inverse Cayley formula to `(w - I) / (w + I)` (standard form)
- `PoincareDisk` defined as `{z : ℂ // ‖z‖ < 1}` using norm

### File 4: SelfSimilarDimH.lean
- Compiled on first try
- `dimH` returns `ℝ≥0∞` (= `ENNReal`)
- `ENNReal.ofReal (Real.log 2 / Real.log 3)` is the correct way to embed the ratio

### File 5: BesicovitchCovering.lean
- Compiled on first try
- Used `Bornology.IsBounded` (fully qualified)
- `Set.PairwiseDisjoint` works with `fun x => closedBall x (r x)`
- `EuclideanSpace ℝ (Fin n)` with `Mathlib.Analysis.InnerProductSpace.PiL2`

### File 6: SardTheorem.lean
- **Added import**: `Mathlib.Analysis.Normed.Lp.MeasurableSpace` (provides `BorelSpace (PiLp p X)`, which gives `MeasurableSpace` and `MeasureSpace` for `EuclideanSpace`)
- **Added import**: `Mathlib.MeasureTheory.Measure.Haar.OfBasis` (provides `measureSpaceOfInnerProductSpace`)
- `fderiv ℝ f x` returns `E →L[ℝ] F`, and `Function.Surjective` applies to it via coercion to function
- `volume` is the Lebesgue/Haar measure on any finite-dimensional inner product space

### File 7: CoareaFormula.lean
- **Fixed import**: `Mathlib.MeasureTheory.Integral.Bochner` → `Mathlib.MeasureTheory.Integral.Bochner.Basic`
- **Added imports**: `Mathlib.Analysis.Normed.Lp.MeasurableSpace`, `Mathlib.MeasureTheory.Measure.Haar.OfBasis`
- **Added**: `open NNReal` for `ℝ≥0` notation
- `hausdorffMeasure n` (with natural number `n`) gives the n-dimensional Hausdorff measure
- `.toReal` converts `ℝ≥0∞ → ℝ` for integration

## Notes on Mathematical Correctness

These statements type-check but some may be **mathematically false** or **too strong/weak**:

1. **HyperbolicTraceClassification**: The statement that hyperbolic elements have *no* fixed points in ℍ is correct. Parabolic elements also have no fixed points in ℍ (they fix a point on the boundary ∂ℍ).

2. **BesicovitchCovering**: The full Besicovitch theorem states `N` depends only on the dimension `n`, not on the set or radii. Our statement existentially quantifies over `N`, which is weaker but still meaningful.

3. **Sard & Coarea**: These are deep analytic theorems. The statements type-check but the proofs would require substantial analytic machinery not yet in Mathlib.

## Missing Mathlib Definitions

- **Cantor set**: No built-in definition; left as `sorry` in `SelfSimilarDimH.lean`
- **Poincaré disk model**: No dedicated type in Mathlib; we defined `PoincareDisk` as a subtype
- **m-dimensional Jacobian**: Not in Mathlib; the coarea formula uses `‖fderiv ℝ f x‖` as a proxy (correct for codimension 1)

## Build Information

- **Lean**: `leanprover/lean4:v4.29.0-rc8`
- **Mathlib**: master @ `4fa57024fc3c96135d09fef7ec9be47f4e3d67ee`
- **Build command**: `lake build` (all targets succeed with only `sorry` warnings)
