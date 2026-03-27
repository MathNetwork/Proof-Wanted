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


## 1. Statement formalizability

The statement compiles. Definitions:

- `Measure.map Prod.fst` / `Prod.snd`: `Mathlib.MeasureTheory.Measure.Map`. `Measurable Prod.fst` is in `Mathlib.MeasureTheory.MeasurableSpace.Constructions`.
- `IsProbabilityMeasure`: `Mathlib.MeasureTheory.Measure.Typeclasses.Probability`.
- `edist`: `Mathlib.Topology.EMetricSpace.Basic`. Returns `ℝ≥0∞`.
- `ENNReal.rpow` (`(·) ^ p` for `p : ℝ`): `Mathlib.Analysis.SpecialFunctions.Pow.NNReal`.
- `⨅ γ ∈ couplings μ ν, ...`: biInf over a set. Present in Lean core / Mathlib order theory.

Custom definitions in Statement.lean:
- `IsCoupling`, `couplings`, `wassersteinCost`, `wasserstein`: all simple (2-3 lines each).

The Wasserstein distance is defined as `ℝ≥0∞`-valued, which avoids finiteness issues but means the metric properties need to be stated for `ℝ≥0∞` (which is an `EMetricSpace`-like structure).

## 2. Proof strategy

Symmetry: trivial, by swapping coordinates in the coupling.

Separation (W_p = 0 iff mu = nu):
Step 1: If mu = nu, the diagonal coupling has zero cost.
Step 2: If W_p = 0, then for any epsilon, there exists a coupling with cost < epsilon. Take a limit to show mu = nu. This uses the fact that the infimum is attained (or approached) and that convergence in Wasserstein implies weak convergence.

Triangle inequality:
Step 1: Given couplings pi_1 in Gamma(mu, nu) and pi_2 in Gamma(nu, rho), apply the gluing lemma to get a joint measure on X x X x X with marginals (pi_1, pi_2).
Step 2: Project to X x X (first and third coordinates) to get a coupling of (mu, rho).
Step 3: Apply Minkowski's inequality.

The gluing lemma requires disintegration of measures, which is NOT in Mathlib.

## 3. Estimated proof length

Symmetry: 30-50 lines.
Separation: 200-400 lines (assuming basic coupling properties).
Triangle inequality: 500-800 lines (gluing lemma is the hard part).
Total: 800-1500 lines.

## 4. Dependencies not in Mathlib

- Gluing lemma: NOT in Mathlib. Requires disintegration of measures (regular conditional probability). This is substantial infrastructure (~300-500 lines).
- Disintegration of measures: NOT in Mathlib.
- Minkowski's inequality for `ℝ≥0∞`: partially available via `Mathlib.MeasureTheory.Integral.MeanInequalities`.

## 5. Risks and blockers

The gluing lemma is the main blocker for the triangle inequality. Without it, symmetry and the "W=0 iff equal" direction are feasible but the triangle inequality is not.

The `ℝ≥0∞`-valued formulation avoids truncation issues but means the metric structure is on an extended metric space, not a standard metric space. For the standard metric, one would need to restrict to measures with finite p-th moment and use `ℝ`-valued distance.

## 6. Verdict

**Significant infrastructure needed**. Statement compiles. Symmetry is easy. The triangle inequality requires the gluing lemma, which requires disintegration of measures. Neither is in Mathlib. Estimated 800-1500 lines total, with ~300-500 for the gluing lemma alone.
