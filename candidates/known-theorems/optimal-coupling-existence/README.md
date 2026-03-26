## Name

Existence of optimal couplings

## Summary

The Kantorovich optimal transport problem has a minimizer when the spaces are compact and the cost is lower semicontinuous.

## Type

known-theorem

## Area

Optimal Transport / Measure Theory

## Mathematical Statement

Let $X, Y$ be compact metric spaces, $c: X \times Y \to [0, \infty]$ a lower semicontinuous cost function, and $\mu \in \mathcal{P}(X)$, $\nu \in \mathcal{P}(Y)$ probability measures. Then the Kantorovich problem

$$\inf_{\gamma \in \Gamma(\mu,\nu)} \int_{X \times Y} c(x,y) \, d\gamma(x,y)$$

admits a minimizer. That is, there exists an optimal coupling $\bar{\gamma} \in \Gamma(\mu,\nu)$.

## Source

- Villani, C. *Optimal Transport: Old and New*, Theorem 4.1
- Figalli, A. and Glaudo, F. *An Invitation to Optimal Transport, Wasserstein Distances, and Gradient Flows*, Theorem 2.1

## Status

The proof uses: (1) $\Gamma(\mu,\nu)$ is tight (by tightness of marginals on compact spaces), (2) $\Gamma(\mu,\nu)$ is closed under weak-* convergence, (3) the cost functional is lsc under weak-* convergence. Then apply the direct method of calculus of variations.

## Why this is a good formalization target

Uses fundamental measure theory (weak convergence, tightness, lsc functionals) that Mathlib is building toward. The Levy-Prokhorov metric and `ProbabilityMeasure` with weak-* topology are already in Mathlib.

## Mathlib Infrastructure

- `MeasureTheory.IsProbabilityMeasure` -- in Mathlib
- Weak-* topology on probability measures -- in Mathlib
- `LowerSemicontinuous` -- in Mathlib
- `Measure.map` (pushforward) -- in Mathlib
- Compact spaces, `IsCompact` -- in Mathlib
- Integration w.r.t. product measure -- in Mathlib
- Tightness of measures -- may need definition
- Coupling definition -- needs definition

## Proof Complexity Estimate

- **Estimated lines:** 600-1000
- **Key steps:** Show coupling set is compact in weak-* topology; show cost functional is lsc; apply direct method
- **Biggest obstacle:** Prokhorov's theorem (tightness <-> relative compactness) may not be in Mathlib

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** draft -- verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
