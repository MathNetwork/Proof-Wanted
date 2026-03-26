## Name

Davenport constant of ℤ_n ⊕ ℤ_n

## Type

open-conjecture

## Area

Additive Combinatorics / Algebraic Number Theory

## Mathematical Statement

The **Davenport constant** $D(G)$ of a finite abelian group $G$ is the smallest integer $d$ such that every multiset of $d$ elements from $G$ contains a non-empty zero-sum subsequence.

**Conjecture:** $D(\mathbb{Z}_n \oplus \mathbb{Z}_n) = 2n - 1$.

The lower bound $D(\mathbb{Z}_n \oplus \mathbb{Z}_n) \geq 2n - 1$ is easy (take $n-1$ copies of $(1,0)$ and $n-1$ copies of $(0,1)$). The upper bound is the content of the conjecture.

## Source

- Gao, W. and Geroldinger, A. "Zero-sum problems in finite abelian groups: a survey." *Expositiones Mathematicae* 24 (2006), 337–369
- Davenport, H. (1966, unpublished; related to Erdős–Ginzburg–Ziv theorem)
- Geroldinger, A. and Halter-Koch, F. *Non-Unique Factorizations*, Chapter 5

## Status

Known for:
- $n$ prime (Erdős–Ginzburg–Ziv theorem implies $D(\mathbb{Z}_p \oplus \mathbb{Z}_p) = 2p - 1$)
- $n = p^k$ for prime $p$ (Reiher, 2007 for $p$ prime; partial results for prime powers)
- General $n$: **OPEN**

## Why this is a good formalization target

Clean combinatorial statement. The Erdős–Ginzburg–Ziv theorem is already partially available in Mathlib. Formalizing the Davenport constant would create useful infrastructure for zero-sum theory.

## Mathlib Infrastructure

- ✅ `ZMod n` — integers modulo $n$
- ✅ `Multiset` — multisets with `sum`, `card`, `≤` (submultiset)
- ✅ `Fintype (ZMod n × ZMod n)` — finite type (requires `NeZero n`)
- ⚠️ `Combinatorics.Additive.ErdosGinzburgZiv` — EGZ theorem exists but Davenport constant not defined
- ❌ `DavenportConstant` — not in Mathlib; defined via `Nat.find`

## Proof Complexity Estimate

- **Estimated lines:** Unknown (open in general)
- **Key steps:** For prime $n$: reduce to EGZ; for general $n$: unknown
- **Biggest obstacle:** This is open for general $n$; even the prime case requires substantial combinatorics

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
