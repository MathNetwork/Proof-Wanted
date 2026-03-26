# Verification Report

## Build Information

- **Lean:** `leanprover/lean4:v4.29.0-rc8`
- **Mathlib:** master @ `4fa57024fc3c96135d09fef7ec9be47f4e3d67ee`
- **Date:** 2026-03-26

## Summary

All 9 candidate statements compile successfully against Mathlib. Every proof is `sorry` — only the statement signatures are verified to type-check.

| # | Candidate | First try? | Status |
|---|-----------|-----------|--------|
| 1 | sl2r-trace-classification | No | ✅ compiles |
| 2 | sl2r-homogeneous-space | No | ✅ compiles |
| 3 | cayley-transform | No | ✅ compiles |
| 4 | cantor-set-dimh | Yes | ✅ compiles |
| 5 | besicovitch-covering | Yes | ✅ compiles |
| 6 | sard-theorem | No | ✅ compiles |
| 7 | coarea-formula | No | ✅ compiles |
| 8 | frankl-semimodular | No | ✅ compiles |
| 9 | davenport-rank-two | No | ✅ compiles |

## Fixes Required

### sl2r-trace-classification, sl2r-homogeneous-space
- `SL(2, ℝ)` notation is scoped under `MatrixGroups`; added `open scoped MatrixGroups`
- The Möbius action `g • z` requires import `Mathlib.Analysis.Complex.UpperHalfPlane.MoebiusAction`

### cayley-transform
- `UpperHalfPlane` is a `structure` with field `coe` (not a `Subtype` with `.val`)
- Constructor uses `where coe := ...; coe_im_pos := by sorry`
- Coercion to `ℂ` via `(w : ℂ)` not `w.val`

### sard-theorem, coarea-formula
- `MeasureSpace (EuclideanSpace ℝ (Fin m))` requires `Mathlib.Analysis.Normed.Lp.MeasurableSpace` (provides `BorelSpace (PiLp p X)`)
- `Mathlib.MeasureTheory.Measure.Haar.OfBasis` provides the `measureSpaceOfInnerProductSpace` instance
- `Mathlib.MeasureTheory.Integral.Bochner` was renamed to `Mathlib.MeasureTheory.Integral.Bochner.Basic`

### coarea-formula (additional)
- `ℝ≥0` notation requires `open NNReal`
- `K : ℝ≥0` must be an explicit parameter (not auto-implicit, since `autoImplicit = false`)

### frankl-semimodular
- Used Mathlib's existing `IsUpperModularLattice` (not a custom class)
- Used Mathlib's existing `SupIrred` (not a custom `IsJoinIrreducible`)
- Needed `[DecidableEq L]` and `[DecidableRel (fun (a b : L) => a ≤ b)]` for `Finset.filter`

### davenport-rank-two
- `Nat.find` requires `DecidablePred`; fixed with `open Classical`
- `Fintype (ZMod n × ZMod n)` requires `NeZero n`; constructed from `0 < n` hypothesis
- Used `@DavenportConstant ... (by haveI : NeZero n := ...; infer_instance)` pattern

## Missing Mathlib Definitions

| Definition | Used in | Workaround |
|-----------|---------|------------|
| Cantor set | cantor-set-dimh | `sorry`-defined |
| Poincaré disk | cayley-transform | Defined as `{z : ℂ // ‖z‖ < 1}` |
| Davenport constant | davenport-rank-two | Defined via `Nat.find` |
| m-dimensional Jacobian | coarea-formula | Used `‖fderiv ℝ f x‖` (correct for codimension 1) |
| IFS attractor theory | cantor-set-dimh | Not needed for statement |
| Boundary ∂ℍ | sl2r-trace-classification | Parabolic/hyperbolic boundary fixed points not stated |

## Key Mathlib API Discoveries

- `SL(2, ℝ)` notation: scoped in `MatrixGroups` namespace
- `UpperHalfPlane.I`: the point $i \in \mathbb{H}$
- `UpperHalfPlane` is a structure with fields `coe : ℂ` and `coe_im_pos : 0 < coe.im`
- `IsUpperModularLattice`: the semimodularity class using `CovBy` (⋖)
- `SupIrred`: sup-irreducible = join-irreducible for lattices
- `hausdorffMeasure d`: takes `d : ℝ` (coerced from `ℕ`)
- `dimH`: returns `ℝ≥0∞`
- `EuclideanSpace` measure theory: needs both `Mathlib.Analysis.Normed.Lp.MeasurableSpace` and `Mathlib.MeasureTheory.Measure.Haar.OfBasis`
