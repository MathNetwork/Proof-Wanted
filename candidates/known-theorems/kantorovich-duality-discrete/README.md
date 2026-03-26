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
