## Name

Kolmogorov zero-one law

## Type

known-theorem

## Area

Probability Theory

## Mathematical Statement

Let $(X_n)_{n \geq 1}$ be independent random variables. The **tail σ-algebra**

$$\mathcal{T} = \bigcap_{n=1}^{\infty} \sigma(X_k : k \geq n)$$

is trivial: every $A \in \mathcal{T}$ satisfies $\mathbb{P}(A) = 0$ or $\mathbb{P}(A) = 1$.

## Source

- Kolmogorov, A.N. *Foundations of the Theory of Probability* (1933)
- Billingsley, P. *Probability and Measure*, Theorem 22.3
- Durrett, R. *Probability: Theory and Examples*, Theorem 2.5.3

## Status

Classical result. Not formalized in Lean/Mathlib. Mathlib has independence (`iIndepFun`) but no tail σ-algebra or zero-one laws.

## Why this is a good formalization target

Fundamental result in probability theory. The proof is short and elegant (show tail events are independent of themselves). Would establish the tail σ-algebra concept for further results (Kolmogorov's three-series theorem, law of large numbers).

## Mathlib Infrastructure

- ✅ `iIndepFun X μ` — joint independence of a function family (`Mathlib.Probability.Independence.Basic`)
- ✅ `MeasurableSpace.comap` — pullback σ-algebra
- ✅ `⨅` / `⨆` over `MeasurableSpace` — inf/sup of σ-algebras
- ❌ `tailSigmaAlgebra` — not in Mathlib; defined as `⨅ n, ⨆ k ≥ n, comap (X k) ...`

## Proof Complexity Estimate

- **Estimated lines:** 100–200
- **Key steps:** Show tail events are independent of finite-dimensional events; approximate from below; conclude $P(A) = P(A)^2$
- **Biggest obstacle:** Manipulating measurable space lattice operations; showing independence propagates through limits

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
