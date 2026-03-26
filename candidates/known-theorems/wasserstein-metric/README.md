## Name

Wasserstein distance is a metric

## Summary

The p-Wasserstein distance defines a metric on probability measures with finite p-th moment.

## Type

known-theorem

## Area

Optimal Transport / Probability Theory

## Mathematical Statement

Let $(X, d)$ be a Polish space and $p \geq 1$. Define $\mathcal{P}_p(X)$ as the set of Borel probability measures on $X$ with finite $p$-th moment. For $\mu, \nu \in \mathcal{P}_p(X)$, define

$$W_p(\mu, \nu) = \left( \inf_{\gamma \in \Gamma(\mu,\nu)} \int_{X \times X} d(x,y)^p \, d\gamma(x,y) \right)^{1/p}$$

where $\Gamma(\mu,\nu)$ is the set of couplings (joint measures with marginals $\mu$ and $\nu$). Then $W_p$ is a metric on $\mathcal{P}_p(X)$.

## Source

- Villani, C. *Optimal Transport: Old and New*, Theorem 6.9
- Villani, C. *Topics in Optimal Transportation*, Chapter 7

## Status

Classical. The key ingredient is the gluing lemma (if $\pi_1 \in \Gamma(\mu,\nu)$ and $\pi_2 \in \Gamma(\nu,\rho)$, there exists a joint measure on $X^3$ with the right bivariate marginals), which gives the triangle inequality via Minkowski's inequality.

Not formalized in any proof assistant. Mathlib has no coupling, Wasserstein distance, or optimal transport definitions.

## Why this is a good formalization target

Foundational definition of optimal transport. Formalizing it would open the door to OT theory in Lean. The proof is self-contained and uses only measure theory (pushforward, product measure, disintegration) and Minkowski's inequality, most of which is in Mathlib.

## Mathlib Infrastructure

- `MeasureTheory.Measure.map` (pushforward) -- in Mathlib
- `MeasureTheory.IsProbabilityMeasure` -- in Mathlib
- Product measure / Fubini -- in Mathlib
- Lp spaces / Minkowski inequality -- in Mathlib
- Coupling $\Gamma(\mu,\nu)$ -- needs definition
- Gluing lemma -- needs proof
- Disintegration / conditional measures -- probably needed for gluing

## Proof Complexity Estimate

- **Estimated lines:** 800-1500
- **Key steps:** Define couplings; prove gluing lemma; triangle inequality via Minkowski
- **Biggest obstacle:** Gluing lemma requires disintegration of measures

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** draft -- verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
