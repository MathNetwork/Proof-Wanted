## Name

Erdos matching conjecture

## Summary

Maximum size of a k-uniform family with bounded matching number.

## Type

open-conjecture

## Area

Combinatorics

## Mathematical Statement

The maximum size of a $k$-uniform family on $[n]$ with no $s+1$ pairwise disjoint sets is

$$\max\left\{\binom{ks+k-1}{k}, \binom{n}{k} - \binom{n-s}{k}\right\}$$

## Source

- Erdos, P. "A problem on independent r-tuples." *Annales Univ. Sci. Budapest* 8 (1965), 93--95
- Frankl, P. "Improved bounds for Erdos' matching conjecture." *J. Combin. Theory Ser. A* 120 (2013), 1068--1072

## Status

Proved for large $n$ relative to $k$ and $s$ (Frankl). Open for small $n$.

## Why this is a good formalization target

Clean combinatorial statement using only Finset, binomial coefficients, and matching (pairwise disjointness). All definitions are elementary.

## Mathlib Infrastructure

- `Finset` -- in Mathlib
- `Nat.choose` -- in Mathlib
- `Disjoint` -- in Mathlib
- Matching (pairwise disjoint subfamily) -- needs definition

## Proof Complexity Estimate

- **Estimated lines:** Unknown (open problem)
- **Key steps:** Unknown
- **Biggest obstacle:** This is an open problem

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** draft -- verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
