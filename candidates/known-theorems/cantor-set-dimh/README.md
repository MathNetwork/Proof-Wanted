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
