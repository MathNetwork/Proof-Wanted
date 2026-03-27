## Name

Hausdorff dimension of the Cantor set

## Type

known-theorem

## Area

Geometric Measure Theory / Fractal Geometry

## Mathematical Statement

The middle-thirds Cantor set $C \subset [0,1]$ has Hausdorff dimension $\dim_H(C) = \frac{\log 2}{\log 3}$.

## Source

- Falconer, K. *The Geometry of Fractal Sets*, Theorem 1.14
- Mattila, P. *Geometry of Sets and Measures in Euclidean Spaces*, §4.13

## Status

Classical result. The self-similar dimension formula $\dim_H = \log N / \log (1/r)$ for IFS attractors is well-known but not formalized in Lean.

## Why this is a good formalization target

Prototypical example of Hausdorff dimension computation. Would establish patterns for IFS-based dimension proofs.

## Mathlib Infrastructure

- ✅ `dimH` — Hausdorff dimension (`ℝ≥0∞`-valued), in `Mathlib.Topology.MetricSpace.HausdorffDimension`
- ✅ `ENNReal.ofReal` — embedding `ℝ → ℝ≥0∞`
- ✅ `Real.log` — natural logarithm
- ❌ Cantor set — no built-in definition; must be constructed
- ❌ IFS attractor theory — not in Mathlib

## Proof Complexity Estimate

- **Estimated lines:** 500–800
- **Key steps:** Define Cantor set (e.g., as $\bigcap_n C_n$); prove self-similarity; upper bound via covers; lower bound via mass distribution principle
- **Biggest obstacle:** Hausdorff measure estimates; no IFS machinery in Mathlib

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork


## 1. Statement formalizability

The statement compiles. The Cantor set definition is `sorry`.

- `dimH`: `Mathlib.Topology.MetricSpace.HausdorffDimension`. Returns `ℝ≥0∞`.
- `ENNReal.ofReal`: `Mathlib.Data.ENNReal.Basic`. Converts `ℝ → ℝ≥0∞`.
- `Real.log`: `Mathlib.Analysis.SpecialFunctions.Log.Basic`.
- `cantorSet`: NOT in Mathlib. Must be defined. Options:
  (a) As `⋂ n, C_n` where C_n removes middle thirds iteratively.
  (b) As `{x ∈ Icc 0 1 | ∀ n, ...}` using ternary digit conditions.
  (c) As the attractor of the IFS {x/3, x/3 + 2/3}.

Option (a) is most natural. Each C_n is a finite union of closed intervals: approximately 10-15 lines to define the iteration, 5 lines for the intersection.

## 2. Proof strategy

Step 1: Define the Cantor set as intersection of iterated removals.

Step 2 (upper bound): Cover C by 2^n intervals of length 3^(-n). The s-dimensional Hausdorff measure for s = log2/log3 satisfies H^s(C) <= lim 2^n * (3^(-n))^s = lim 2^n * 2^(-n) = 1. So dimH(C) <= log2/log3.

Step 3 (lower bound): Use the mass distribution principle. The natural probability measure on C (uniform on each interval at level n) has the property that mu(B(x,r)) <= C * r^s. This gives dimH(C) >= s.

Step 4: Combine.

Mathlib has `hausdorffMeasure d` for computing Hausdorff measures, and `dimH_le_of_hausdorffMeasure_ne_top` / `le_dimH_of_hausdorffMeasure_eq_top` for bounding dimH.

## 3. Estimated proof length

Defining the Cantor set: 20-30 lines.
Upper bound: 200-300 lines (constructing covers, estimating Hausdorff measure).
Lower bound: 300-500 lines (mass distribution principle, possibly not in Mathlib).
Total: 500-800 lines.

## 4. Dependencies not in Mathlib

- Cantor set definition: ~20 lines.
- Mass distribution principle: NOT in Mathlib. This says: if there exists a Borel measure mu with mu(C) > 0 and mu(B(x,r)) <= C*r^s for all x,r, then dimH(C) >= s. Proving this from scratch: ~100-200 lines.
- IFS attractor theory: NOT in Mathlib. Not strictly needed if using direct cover/mass arguments.

## 5. Risks and blockers

The mass distribution principle is the main missing tool. Without it, the lower bound is significantly harder to prove. An alternative approach uses the self-similarity directly with Mathlib's `dimH` API, but this requires establishing that the IFS satisfies the open set condition, which is also not in Mathlib.

The `ENNReal.ofReal (Real.log 2 / Real.log 3)` representation is correct but requires showing `Real.log 2 / Real.log 3 >= 0` for various coercion lemmas. This is straightforward since log 2 and log 3 are positive.

## 6. Verdict

**Feasible with work**. Statement compiles (modulo sorry for cantorSet). Needs ~20 lines for the definition and ~100-200 lines for the mass distribution principle. Total proof estimated at 500-800 lines.
