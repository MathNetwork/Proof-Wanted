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


## 1. Statement formalizability

The statement compiles. Definitions needed:

- `Finset (Finset (Fin n))`: nested Finsets over `Fin n`. Both in Mathlib.
- `Finset.card`: `Mathlib.Data.Finset.Card`. Present.
- `Nat.choose`: `Mathlib.Data.Nat.Choose.Basic`. Present.
- `Disjoint`: `Mathlib.Order.Disjoint`. Present. Works on `Finset` via the lattice structure.
- `HasNoLargeMatching`: NOT in Mathlib. Defined in Statement.lean (5 lines). Adequate.

The bound `max (choose (k*s+k-1) k) (choose n k - choose (n-s) k)` involves `Nat.choose` which returns `ℕ`. The subtraction `choose n k - choose (n-s) k` is natural number subtraction, so it truncates at 0. This is mathematically correct when `s <= n` (guaranteed by hypothesis `s * k <= n`).

## 2. Proof strategy

This is partially open. Proved for large n (Frankl, several papers). Open for small n.

For large n, the proof uses the "shifting" technique:
Step 1: Apply shifting operators to reduce to a "shifted" family.
Step 2: Show shifted families with bounded matching number have a specific structure.
Step 3: Count by direct computation.

Mathlib has some compression/shifting infrastructure in `Mathlib.Combinatorics.SetFamily.Compression`.

## 3. Estimated proof length

Statement: 15 lines (done).
Large-n case: estimated 1500-3000 lines. This is a substantial combinatorial argument.
Small-n case: open.

## 4. Dependencies not in Mathlib

- `HasNoLargeMatching` definition: 5 lines, in Statement.lean.
- Shifting/compression operators: partially in `Mathlib.Combinatorics.SetFamily.Compression`, but the full framework needed for Erdos matching is not there.
- Kruskal-Katona theorem (used in some proofs): NOT in Mathlib.

## 5. Risks and blockers

The large-n proof is technically feasible but very long. The shifting infrastructure in Mathlib is incomplete for this purpose.

The natural number subtraction in the bound is correct but may need explicit lemmas about `choose n k >= choose (n-s) k` when `s <= n`.

## 6. Verdict

**Significant infrastructure needed**. The statement compiles, but proving even the large-n case requires substantial shifting/compression infrastructure not currently in Mathlib.
