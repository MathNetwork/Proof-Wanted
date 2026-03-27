## Name

Kantorovich duality (discrete / finite case)

## Summary

The minimum transport cost equals the maximum dual value (LP duality for the discrete Kantorovich problem).

## Type

known-theorem

## Area

Optimal Transport / Linear Programming

## Mathematical Statement

Let $\mu \in \mathbb{R}^m_{\geq 0}$ and $\nu \in \mathbb{R}^n_{\geq 0}$ be discrete probability distributions ($\sum_i \mu_i = \sum_j \nu_j = 1$), and let $C \in \mathbb{R}^{m \times n}_{\geq 0}$ be a cost matrix. Then:

$$\min_{\pi \in \Pi(\mu,\nu)} \sum_{i,j} C_{ij} \pi_{ij} = \max_{\substack{\phi \in \mathbb{R}^m, \psi \in \mathbb{R}^n \\ \phi_i + \psi_j \leq C_{ij}}} \sum_i \phi_i \mu_i + \sum_j \psi_j \nu_j$$

where $\Pi(\mu,\nu) = \lbrace\pi \geq 0 : \pi \mathbf{1} = \mu, \pi^T \mathbf{1} = \nu\rbrace$.

## Source

- Villani, C. *Topics in Optimal Transportation*, Theorem 1.3
- Peyre, G. and Cuturi, M. *Computational Optimal Transport*, Chapter 2

## Status

Special case of LP duality applied to the transportation polytope. The proof is pure linear algebra / finite optimization -- no measure theory needed.

## Why this is a good formalization target

Completely self-contained, finite-dimensional, no heavy analysis. Can be stated with `Finset`, `Matrix`, basic real linear algebra. A clean entry point to OT that avoids all measure-theoretic machinery.

## Mathlib Infrastructure

- `Finset`, `Finset.sum` -- in Mathlib
- `Matrix` -- in Mathlib
- Basic linear inequalities -- in Mathlib
- LP duality -- not in Mathlib, but the transportation problem is simple enough to prove duality directly

## Proof Complexity Estimate

- **Estimated lines:** 500-1000
- **Key steps:** Weak duality by summing constraints; strong duality via LP theory or direct complementary slackness argument
- **Biggest obstacle:** Formalizing the LP feasibility and optimality conditions

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** draft -- verified against Mathlib (2026-03-26)

## Contributor

MathNetwork


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
