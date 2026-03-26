## Name

Azuma-Hoeffding inequality

## Type

known-theorem

## Area

Probability Theory

## Mathematical Statement

Let $(M_n)_{n \geq 0}$ be a martingale with respect to filtration $(\mathcal{F}_n)$, with bounded increments $|M_n - M_{n-1}| \leq c_n$ a.s. Then for all $t > 0$:

$$\mathbb{P}(|M_n - M_0| \geq t) \leq 2 \exp\left(-\frac{t^2}{2 \sum_{k=1}^n c_k^2}\right)$$

## Source

- Azuma, K. "Weighted sums of certain dependent random variables." *Tôhoku Math. J.* 19 (1967), 357–367
- Hoeffding, W. "Probability inequalities for sums of bounded random variables." *JASA* 58 (1963), 13–30

## Status

Standard concentration inequality. Not formalized in Lean/Mathlib. Mathlib has martingale infrastructure (Doob convergence, stopping times, conditional expectation) but no concentration inequalities yet.

## Why this is a good formalization target

Natural next step for Mathlib's probability theory. The proof is self-contained (exponential supermartingale argument + Markov's inequality). Would establish patterns for other martingale concentration bounds (Freedman, Bernstein).

## Mathlib Infrastructure

- ✅ `Martingale f ℱ μ` — martingale definition (`Mathlib.Probability.Martingale.Basic`)
- ✅ `Filtration ℕ m0` — filtrations as monotone families of sub-σ-algebras
- ✅ `IsProbabilityMeasure μ` — probability measure class
- ✅ `∀ᵐ ω ∂μ` — almost everywhere quantifier
- ✅ `Real.exp` — exponential function
- ✅ `ENNReal.ofReal` — embedding ℝ → ℝ≥0∞ for the bound

## Proof Complexity Estimate

- **Estimated lines:** 200–400
- **Key steps:** Hoeffding's lemma for bounded r.v.; exponential supermartingale; Markov inequality; optimize over parameter
- **Biggest obstacle:** Setting up the exponential moment argument with conditional expectations

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
