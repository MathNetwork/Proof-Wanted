# Formalization Assessment: Maximum modulus principle

## 1. Statement formalizability

The statement compiles. Definitions needed:

- `DifferentiableOn ℂ f U`: `Mathlib.Analysis.Complex.AbsMax` (or basic complex analysis imports).
- `IsOpen U`, `IsPreconnected U`: `Mathlib.Topology.Basic`.
- `IsMaxOn (norm ∘ f) U z₀`: `Mathlib.Order.Filter.Basic` / `Mathlib.Topology.Order.Basic`. `IsMaxOn f s a` means `∀ x ∈ s, f x ≤ f a`.

The statement says: if |f| attains its max at an interior point z_0 of a preconnected open set, then |f| is constant on U. This is the standard maximum modulus principle.

## 2. Proof strategy

Mathlib already contains the core result. `Mathlib.Analysis.Complex.AbsMax` has:

- `Complex.norm_eqOn_of_isPreconnected_of_isMaxOn`: if f is differentiable on U, U is preconnected, and |f| has a maximum at z_0 in U, then |f| is constant on U.

This is essentially the theorem we want to prove. The Statement.lean formulation may be directly provable by applying this existing result.

Step 1: Apply `Complex.norm_eqOn_of_isPreconnected_of_isMaxOn` with the given hypotheses.
Step 2: The Mathlib version may have slightly different hypotheses (e.g., `IsPreconnected` vs `IsConnected`, or the exact measurability conditions). Check compatibility.

## 3. Estimated proof length

10-50 lines. This is essentially already in Mathlib. The proof is an application of an existing theorem, possibly with minor hypothesis adjustments.

## 4. Dependencies not in Mathlib

None. The theorem is already in Mathlib.

For the full harmonic maximum principle in R^n: the Laplacian and "harmonic function" are NOT in Mathlib. This would require defining `Δu = ∑ ∂²u/∂x_i²` and showing the mean value property, which is substantial (~500-1000 lines).

## 5. Risks and blockers

The existing Mathlib theorem may have slightly different hypotheses than our statement. For example, `Complex.norm_eqOn_of_isPreconnected_of_isMaxOn` may require `DifferentiableOn ℂ f U` where our statement also uses `DifferentiableOn`. Should be a direct match.

The R^n generalization to harmonic functions is blocked by the missing Laplacian definition.

## 6. Verdict

**Ready** (complex version). The theorem is essentially in Mathlib already. Proof is 10-50 lines. The R^n harmonic version is blocked.
