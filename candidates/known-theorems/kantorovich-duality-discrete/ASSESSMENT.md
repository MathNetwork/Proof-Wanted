# Formalization Assessment: Kantorovich duality (discrete)

## 1. Statement formalizability

The statement compiles. Definitions:

- `Matrix (Fin m) (Fin n) ℝ`: `Mathlib.Data.Matrix.Basic`.
- `Finset.sum` via `∑ i, ∑ j, ...`: `Mathlib.Algebra.BigOperators.Group.Finset.Basic`.
- `sInf`, `sSup` on `ℝ`: `Mathlib.Data.Real.Archimedean` provides `ConditionallyCompleteLinearOrder ℝ`.

Custom definitions: `IsTransportPlan`, `transportCost`, `IsDualFeasible`, `dualValue`. All 2-4 lines, straightforward.

The strong duality statement uses `sInf` and `sSup` over sets of reals. For `sInf` to give the correct answer, the set must be nonempty and bounded below. The set `{t | ∃ π, IsTransportPlan π μ ν ∧ transportCost C π = t}` is nonempty (the zero matrix might not be feasible, but the uniform plan exists when sum mu = sum nu = 1) and bounded below by 0 (if C >= 0). Similarly for `sSup`.

## 2. Proof strategy

Weak duality:
Step 1: For any feasible (pi, phi, psi), compute: sum phi_i * mu_i + sum psi_j * nu_j = sum_i phi_i * (sum_j pi_ij) + sum_j psi_j * (sum_i pi_ij) = sum_{i,j} (phi_i + psi_j) * pi_ij <= sum_{i,j} C_ij * pi_ij.
This uses the transport plan constraints and dual feasibility. One application of `Finset.sum` rearrangement.

Strong duality:
This is LP duality. Can be proved by:
(a) Citing general LP duality (not in Mathlib).
(b) Direct proof via complementary slackness, constructing the dual optimum from the primal optimum.
(c) For the special structure of the transportation problem, a direct argument via the Hungarian algorithm or the northwest corner method.

## 3. Estimated proof length

Weak duality: 30-60 lines. It's just rearranging sums.
Strong duality: 300-800 lines. LP duality from scratch is substantial but the transportation problem has enough special structure to simplify.

## 4. Dependencies not in Mathlib

- LP duality: NOT in Mathlib. No general linear programming theory.
- The transportation problem's special structure (totally unimodular constraint matrix) could simplify things but is also not in Mathlib.
- Existence of optimal transport plan (a finite-dimensional optimization problem over a compact set): follows from continuity + compactness. Mathlib has `IsCompact.exists_isMinOn` or similar.

## 5. Risks and blockers

The `sInf` / `sSup` formulation requires showing the sets are nonempty and bounded. If C has nonneg entries and mu, nu are nonneg with sum 1, then transport cost is in [0, max C_ij], so the infimum set is bounded. The supremum set is bounded by weak duality. These auxiliary lemmas add ~50 lines.

For the strong duality proof without general LP theory, a constructive approach (building the dual optimum from the primal optimum using complementary slackness) works but requires careful finite-dimensional optimization arguments.

## 6. Verdict

**Feasible with work**. Statement compiles. Weak duality is easy (30-60 lines). Strong duality requires LP duality arguments not in Mathlib. Estimated 300-800 lines total.
