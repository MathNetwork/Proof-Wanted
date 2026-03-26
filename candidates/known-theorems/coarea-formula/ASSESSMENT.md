# Formalization Assessment: Coarea formula

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
