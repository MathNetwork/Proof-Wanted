# Verification Report

## Build Information

- **Lean:** `leanprover/lean4:v4.29.0-rc8`
- **Mathlib:** master @ `4fa57024fc3c96135d09fef7ec9be47f4e3d67ee`
- **Date:** 2026-03-26

## Summary

All 15 candidate statements compile successfully against Mathlib (14 fully, 1 partial fallback). Every proof is `sorry` — only the statement signatures are verified to type-check.

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
| 10 | azuma-hoeffding | No | ✅ compiles |
| 11 | kolmogorov-01 | No | ✅ compiles |
| 12 | poincare-inequality | Yes | ✅ compiles |
| 13 | lax-milgram | Yes | ✅ compiles |
| 14 | rellich-kondrachov | No | ⚠️ partial (fallback) |
| 15 | maximum-principle-harmonic | Yes | ✅ compiles |

## Fixes Required (Round 1: Geometry / GMT / Combinatorics)

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

## Fixes Required (Round 2: Probability / PDE)

### azuma-hoeffding
- Finset sum syntax: `∑ k in range n` → `∑ k ∈ range n` (Lean 4 uses `∈` not `in`)
- `Filtration ℕ m0` requires explicit ambient σ-algebra `m0` as argument
- `μ {ω | ...}` works directly via `Measure.instFunLike` (no MeasurableSet needed for outer measure)
- `ENNReal.ofReal` correctly converts the exponential bound to `ℝ≥0∞`

### kolmogorov-01
- Tail σ-algebra: `⨆ k ≥ n, MeasurableSpace.comap (X k) ‹...›` failed — the `‹...›` assumption tactic can't find the instance inside iSup
- Fixed: `⨆ (k : ℕ) (_ : n ≤ k), MeasurableSpace.comap (X k) inferInstance`
- `tailSigmaAlgebra` returns `MeasurableSpace Ω` (a class type); needs `@[reducible]` annotation
- Removed unused `{m0 : MeasurableSpace Ω}` from definition (not used in body; caused inference failure in theorem)

### poincare-inequality
- Compiled on first try
- `EuclideanSpace.proj (⟨0, by omega⟩ : Fin n) x` works for coordinate extraction
- `HasCompactSupport` from `Mathlib.Topology.Algebra.Support`

### lax-milgram
- Compiled on first try
- Bilinear form encoded as `H →L[ℝ] H →L[ℝ] ℝ` (bundled continuous bilinear form)
- Avoided deprecated `IsLinearMap`; continuity is built into `→L[ℝ]`

### rellich-kondrachov
- **Full theorem BLOCKED**: Sobolev spaces $W^{1,p}$ not defined in Mathlib
- Fallback: Arzelà-Ascoli for equicontinuous bounded families of `X →ᵇ ℝ`
- `UniformAddGroup` doesn't exist; removed (not needed for the fallback statement)
- `Equicontinuous` requires specific function type signature

### maximum-principle-harmonic
- Compiled on first try
- Used complex maximum modulus principle (`DifferentiableOn ℂ f U` + `IsMaxOn`)
- Leverages `Mathlib.Analysis.Complex.AbsMax`
- **Full ℝⁿ version blocked**: no Laplacian or "harmonic function" definition in Mathlib

## Missing Mathlib Definitions

| Definition | Used in | Workaround |
|-----------|---------|------------|
| Cantor set | cantor-set-dimh | `sorry`-defined |
| Poincaré disk | cayley-transform | Defined as `{z : ℂ // ‖z‖ < 1}` |
| Davenport constant | davenport-rank-two | Defined via `Nat.find` |
| m-dimensional Jacobian | coarea-formula | Used `‖fderiv ℝ f x‖` (correct for codim 1) |
| Boundary ∂ℍ | sl2r-trace-classification | Boundary fixed points not stated |
| Tail σ-algebra | kolmogorov-01 | Defined via `⨅ n, ⨆ k ≥ n, comap ...` |
| Sobolev spaces $W^{1,p}$ | rellich-kondrachov | Fallback to Arzelà-Ascoli |
| Laplacian $\Delta u$ | maximum-principle-harmonic | Used complex holomorphic version |
| Harmonic functions | maximum-principle-harmonic | Not defined; complex version used |

## Key Mathlib API Discoveries

### Geometry / GMT / Algebra
- `SL(2, ℝ)` notation: scoped in `MatrixGroups` namespace
- `UpperHalfPlane.I`: the point $i \in \mathbb{H}$
- `UpperHalfPlane` is a structure with fields `coe : ℂ` and `coe_im_pos`
- `IsUpperModularLattice`: the semimodularity class using `CovBy` (⋖)
- `SupIrred`: sup-irreducible = join-irreducible for lattices
- `hausdorffMeasure d`: takes `d : ℝ` (coerced from `ℕ`)
- `dimH`: returns `ℝ≥0∞`
- `EuclideanSpace` measure theory: needs `Mathlib.Analysis.Normed.Lp.MeasurableSpace` + `Mathlib.MeasureTheory.Measure.Haar.OfBasis`

### Probability Theory
- **Martingale**: `Martingale f ℱ μ` where `f : ι → Ω → E`, `ℱ : Filtration ι m0`, `μ : Measure Ω`
  - Import: `Mathlib.Probability.Martingale.Basic`
  - Requires `[NormedAddCommGroup E] [NormedSpace ℝ E] [CompleteSpace E]`
- **Filtration**: `structure Filtration (ι : Type*) [Preorder ι] (m : MeasurableSpace Ω)` with fields `seq`, `mono'`, `le'`
  - Import: `Mathlib.Probability.Process.Filtration`
- **iIndepFun**: `iIndepFun (f : ∀ x : ι, Ω → β x) (μ : Measure Ω)` for joint independence
  - Import: `Mathlib.Probability.Independence.Basic`
- **IsProbabilityMeasure**: class requiring `μ univ = 1`
  - Import: `Mathlib.MeasureTheory.Measure.Typeclasses.Probability`
- `μ {ω | P ω}` works directly; `Measure` has `FunLike` instance applying outer measure to any set

### Functional Analysis / PDE
- **Arzelà-Ascoli**: in `Mathlib.Topology.UniformSpace.Ascoli`, namespace `ArzelaAscoli`
- **Riesz representation**: `InnerProductSpace.toDual` — linear isometric equivalence `E ≃ₗᵢ⋆[𝕜] StrongDual 𝕜 E`
  - Import: `Mathlib.Analysis.InnerProductSpace.Dual`
- **Lp spaces**: `MeasureTheory.Lp E p μ` — AddSubgroup of `α →ₘ[μ] E`
- **Maximum modulus**: `Complex.norm_eqOn_of_isPreconnected_of_isMaxOn` and related in `Mathlib.Analysis.Complex.AbsMax`
- **EuclideanSpace.proj**: continuous projection to i-th coordinate
- **HasCompactSupport**: in `Mathlib.Topology.Algebra.Support`
- **Sobolev spaces**: NOT in Mathlib. Only the Gagliardo-Nirenberg-Sobolev inequality exists (for smooth compactly supported functions, not W^{1,p}).
- **Laplacian**: NOT in Mathlib. No `Δu` or harmonic function definition.
- **IsLinearMap**: deprecated; use bundled `LinearMap` or `ContinuousLinearMap` (`→L[ℝ]`)
