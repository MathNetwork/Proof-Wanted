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


## 1. Statement formalizability

The statement compiles. Definitions needed:

- `EuclideanSpace ℝ (Fin n)`: `Mathlib.Analysis.InnerProductSpace.PiL2`.
- `Metric.closedBall`: `Mathlib.Topology.MetricSpace.Pseudo.Defs`.
- `Bornology.IsBounded`: `Mathlib.Topology.Bornology.Basic`.
- `Set.PairwiseDisjoint`: `Mathlib.Order.Disjoint`. Present. Takes a function `fun x => closedBall x (r x)` which maps points to their balls.

The statement existentially quantifies over `N : ℕ` (the Besicovitch constant), which is weaker than the standard theorem (where N depends only on the dimension n). A stronger version would state `∃ N, (N depends only on n) ∧ ...`, but the current formulation is still meaningful.

## 2. Proof strategy

The proof uses a greedy algorithm:

Step 1: Order the points in A by decreasing radius r(x).
Step 2: Greedily select balls, adding each to the first family where it doesn't overlap existing balls.
Step 3: Show that the overlap at any point is bounded by a constant N(n) depending only on the dimension.

The dimension-dependent constant comes from a geometric packing argument: in R^n, at most C(n) unit balls can touch a central unit ball without overlapping each other.

Step 4: Show the selected balls cover A.

This is a long combinatorial-geometric argument.

## 3. Estimated proof length

1500-3000 lines. The geometric packing bound is the hardest part. The greedy construction is conceptually simple but requires careful bookkeeping with sets and families.

## 4. Dependencies not in Mathlib

- Geometric packing bound in R^n: NOT in Mathlib. This is the key technical ingredient. Proving that at most C(n) unit balls can touch a central ball requires volume arguments.
- Greedy selection on a well-ordered set: standard but not packaged in Mathlib.

## 5. Risks and blockers

The dimension-dependent constant N(n) has no clean closed form. The standard proof bounds it by a volume argument (the kissing number bound). Formalizing this volume argument requires comparing volumes of balls and cones in R^n, which needs integration in Euclidean space (available via Haar measure in Mathlib, but connecting it to geometric packing is nontrivial).

The statement uses `Set.PairwiseDisjoint` with a function `fun x => closedBall x (r x)`. This works because `closedBall` produces a `Set`, which has a lattice structure for `Disjoint`.

## 6. Verdict

**Significant infrastructure needed**. Statement compiles, but the proof requires the geometric packing bound and greedy selection framework. Estimated 1500-3000 lines.
