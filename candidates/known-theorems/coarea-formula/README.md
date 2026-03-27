## Name

Coarea formula (codimension 1)

## Type

known-theorem

## Area

Geometric Measure Theory

## Mathematical Statement

For a Lipschitz function $f : \mathbb{R}^{n+1} \to \mathbb{R}$ and a measurable set $A \subseteq \mathbb{R}^{n+1}$:

$$\int_A \|\nabla f\| \, d\mathcal{L}^{n+1} = \int_{\mathbb{R}} \mathcal{H}^n(A \cap f^{-1}(t)) \, dt$$

This is the codimension-1 specialization of the general coarea formula.

## Source

- Federer, H. *Geometric Measure Theory*, §3.2.12
- Evans, L.C. and Gariepy, R.F. *Measure Theory and Fine Properties of Functions*, §3.4

## Status

Well-known result. Not formalized in Lean/Mathlib. The general coarea formula (arbitrary codimension) involves the Jacobian determinant.

## Why this is a good formalization target

Fundamental tool in PDE theory, calculus of variations, and geometric measure theory. The codimension-1 case avoids the general $m$-Jacobian.

## Mathlib Infrastructure

- ✅ `fderiv ℝ f x` — Fréchet derivative
- ✅ `hausdorffMeasure n` — $n$-dimensional Hausdorff measure ($\mu_H[n]$)
- ✅ `LipschitzWith K f` — Lipschitz condition
- ✅ `MeasureTheory.volume` — Lebesgue measure
- ✅ `∫ x in A, ... ∂μ` — Bochner integral over a set
- ⚠️ Norm of `ContinuousLinearMap` — `‖fderiv ℝ f x‖` compiles but is the operator norm, not the gradient norm (they coincide for $f : \mathbb{R}^{n+1} \to \mathbb{R}$)

## Proof Complexity Estimate

- **Estimated lines:** 1500–3000
- **Key steps:** Prove for smooth $f$ first; approximate Lipschitz by smooth; level set regularity via implicit function theorem
- **Biggest obstacle:** Connecting operator norm of derivative to gradient norm; Hausdorff measure of level sets

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork


## 1. Statement formalizability

The statement compiles. Definitions needed:

- `EuclideanSpace ℝ (Fin (n+1))`: present.
- `fderiv ℝ f x`: present. For `f : EuclideanSpace ℝ (Fin (n+1)) → ℝ`, this is `E →L[ℝ] ℝ`, whose norm `‖fderiv ℝ f x‖` is the operator norm (= gradient norm for scalar functions).
- `LipschitzWith K f`: `Mathlib.Topology.EMetricSpace.Lipschitz`.
- `hausdorffMeasure n`: `Mathlib.MeasureTheory.Measure.Hausdorff`. Takes a real number argument (ℕ is coerced).
- `volume`: Lebesgue/Haar measure.
- `∫ x in A, ... ∂volume` and `∫ t, ... ∂volume`: Bochner integral from `Mathlib.MeasureTheory.Integral.Bochner.Basic`.
- `MeasurableSet A`: present.

The left side integrates `‖fderiv ℝ f x‖` (a real number) over A. The right side integrates `(hausdorffMeasure n (A ∩ f⁻¹'{t})).toReal` over t in R. The `.toReal` converts `ℝ≥0∞ → ℝ`.

## 2. Proof strategy

The standard proof (Federer's approach, simplified):

Step 1: Prove for smooth f first, using the implicit function theorem and Fubini.
Step 2: Approximate Lipschitz f by smooth functions.
Step 3: Pass to the limit using dominated convergence.

For smooth f:
Step 1a: At regular points (where fderiv is surjective), apply the implicit function theorem to get local coordinates adapted to level sets.
Step 1b: Use Fubini in the adapted coordinates.
Step 1c: Identify the Jacobian factor with ‖grad f‖.

Mathlib has Fubini (`Mathlib.MeasureTheory.Integral.Prod`), the implicit function theorem (`Mathlib.Analysis.Calculus.ImplicitFunctionTheorem`), and dominated convergence.

## 3. Estimated proof length

2000-4000 lines. This is one of the hardest results on the list. The implicit function theorem + Fubini approach requires substantial coordinate-change machinery.

## 4. Dependencies not in Mathlib

- Area formula (a prerequisite for the full coarea formula): NOT in Mathlib.
- Change of variables for the Hausdorff measure under diffeomorphisms: NOT in Mathlib.
- Connection between operator norm of `fderiv` and the geometric Jacobian: needs a few lemmas.

## 5. Risks and blockers

The main risk is the implicit function theorem usage. Mathlib has `ImplicitFunctionTheorem.implicitFunction` but connecting it to measure-theoretic decomposition of level sets is nontrivial.

The codimension-1 case (f : R^{n+1} -> R) is simpler than the general case, but still requires all the above machinery.

The `.toReal` on the right-hand side may cause issues if `hausdorffMeasure n (A ∩ f⁻¹'{t})` is infinite for some t. The Lipschitz hypothesis should prevent this, but establishing it requires work.

## 6. Verdict

**Significant infrastructure needed**. Statement compiles. The proof requires area formula and change-of-variables for Hausdorff measure, neither of which is in Mathlib. Estimated 2000-4000 lines.
