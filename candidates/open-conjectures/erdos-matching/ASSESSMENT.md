# Formalization Assessment: Erdos matching conjecture

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
