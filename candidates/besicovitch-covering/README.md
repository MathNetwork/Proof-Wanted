## Name

Besicovitch covering theorem

## Type

known-theorem

## Area

Geometric Measure Theory

## Mathematical Statement

Let $A \subset \mathbb{R}^n$ be bounded and let $r : A \to (0,\infty)$ assign a positive radius to each point. Then there exists a constant $N = N(n)$ depending only on the dimension and families $\mathcal{F}_1, \ldots, \mathcal{F}_N \subset A$ such that:

1. Each $\mathcal{F}_k$ is pairwise disjoint (as closed balls),
2. $A \subseteq \bigcup_{k=1}^N \bigcup_{x \in \mathcal{F}_k} \overline{B}(x, r(x))$.

## Source

- Mattila, P. *Geometry of Sets and Measures in Euclidean Spaces*, Theorem 2.7
- Evans, L.C. and Gariepy, R.F. *Measure Theory and Fine Properties of Functions*, §1.5

## Status

Well-known covering lemma. Not formalized in Lean/Mathlib.

## Why this is a good formalization target

Fundamental tool in geometric measure theory, used in differentiation theorems and density estimates.

## Mathlib Infrastructure

- ✅ `EuclideanSpace ℝ (Fin n)` — Euclidean space
- ✅ `Metric.closedBall` — closed balls
- ✅ `Bornology.IsBounded` — bounded sets
- ✅ `Set.PairwiseDisjoint` — pairwise disjointness

## Proof Complexity Estimate

- **Estimated lines:** 800–1200
- **Key steps:** Greedy selection algorithm; geometric packing argument for the dimension-dependent constant
- **Biggest obstacle:** The combinatorial geometry argument bounding the overlap constant $N(n)$

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
